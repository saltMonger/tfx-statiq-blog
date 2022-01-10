Title: Site Build - Part 3
Published: 2021-12-26
Category: news
---
### Snag: No date archives for posts!
It was only literal seconds after getting the regex links working that I ran into my next issue.

The vast majority of the code for blog posts comes for free with the blog template that [Bradley Wells](https://wellsb.com/csharp/author/wellsb/) put together, which is just enough of a push in the right direction to learn more about Statiq.  I'm unsure if it was because I used a newer version of Statiq, or if there was something wrong with how I've formatted my input files, but the `archive.cshtml` enumerated piece doesn't actually emit blog posts to the correct location.  Thus, clicking the side bar links would send you into oblivion...

I tried looked around in a few places which helped me understand more about Statiq's rendering system.  The `archive.chstml` file is as follows (directly from the template):
```cs
Enumerate: => Inputs.FilterSources($"{Constants.BlogPath}/posts/*").Select(x => x.GetDateTime("Published").ToString("yyyy/MM")).Distinct()
DestinationFileName: => new NormalizedPath($"{Constants.BlogPath}/{Current}/index.html")
Title: => $"Post Archive - {Current}"
---
<section class="blog-section">
    <div class="blog-container">
        @{
            DateTime archiveDate;
            if (DateTime.TryParse(Model.GetString(Keys.Current), out archiveDate))
            {
                <h1>Post from @archiveDate.ToString("MMMM yyyy")</h1>
            }            
            @Html.Partial($"/{Constants.BlogPath}/_posts.cshtml", Outputs[nameof(Content)]
                .Flatten()
                .FilterSources($"{Constants.BlogPath}/posts/*")
                .Where(doc => doc.GetDateTime("Published").ToString("yyyy/MM").Equals(Model.GetString(Keys.Current)))
                .OrderByDescending(doc => doc.GetDateTime("Published")))            
        }
    </div>
</section>
```

Seems pretty normal - there front matter in this piece of code has a few special Statiq related fields which take their string value and execute them as a C# script.  This is neat and lets you do a whole bunch of stuff.  Here, Enumerate... enumerates over the collection that is supplied by the value, in this case we look at pre-processed blog posts files.  Then, we put them all into the `Current` variable which is, as far as I understand, some representation of the document being processed.  _Then_ you can write the file to the path as specified in `DestinationFileName`.

Except it doesn't do that.

Or at least, that's what I discovered when I tinkered for an hour or two.  I'm sure there's an actual answer to this, but it was creating the properly distributed folders fine... just never actually emitting blog posts or `index.html` files there to server to a web browser.

Feeling a bit lost, I remember that one of the brief bits of documentation I read about Statiq.Web was about proper `Archives`.  Helpfully, too, the categories sidebar seemed to send you to a /categories/ path quite fine... and that happens to be an archive too!  Neat, let's check that out.

```
ArchiveSources: => $"{Constants.BlogPath}/posts/*"
ArchiveKey: Category
ArchiveDestination: >
  => GetInt("Index") <= 1 ? $"{Constants.BlogPath}/categories/{GetString("GroupKey")}/index.html" : $"{Constants.BlogPath}/categories/{GetString("GroupKey")}/{GetInt("Index")}.html"
ArchivePageSize: => @Constants.PostsPerPage
ArchiveOrderKey: Published
Title: Categories
ArchiveTitle: => Outputs[$"{Constants.BlogPath}/categories/{GetString("GroupKey")}.yml"].First().GetString("Title")
---
<section class="blog-section">
    <div class="blog-container">
        @if (Document.ContainsKey(Keys.GroupKey))
        {
            <h1>@(Outputs[$"{Constants.BlogPath}/categories/{Document.GetString(Keys.GroupKey)}.yml"].First().GetString("Title"))</h1>
            <p>@(Outputs[$"{Constants.BlogPath}/categories/{Document.GetString(Keys.GroupKey)}.yml"].First().GetString("Description"))</p>
            @Html.Partial($"/{Constants.BlogPath}/_posts.cshtml", Document.GetChildren())
        }
        else
        {
            @foreach (IDocument category in Document.GetChildren())
            {
                <div>
                    <div class="p-3 mb-2 bg-light">
                        <h4>@Html.DocumentLink(category)</h4>
                        <p>@(Outputs[$"{Constants.BlogPath}/categories/{category.GetString(Keys.GroupKey)}.yml"].First().GetString("Description"))</p>
                    </div>
                </div>
            }
        }
    </div>
</section>
```
There's a bit more going on here.  There are now a number of archive specific YAML controls, but the ones that are really useful in the moment are `ArchiveSources`, `ArchiveKey`, and `ArchiveDestination`.  `
* `ArchiveSources` acts similarly to the `Inputs` collection that was supplied to the `Enumerate` of the last archive attempt, but in this case will actually look for an input folder path.
*   `ArchiveKey` is the "grouping key" that we're specifically going to use to find documents in this archive - this can be set to a computed value, or just a straight YAML config that appears in the FrontMatter of a document that we're looking at.
* `ArchiveDestination` is the same as `DestinationFileName` in the previous archive iteration - this is where the archive will emit the `index.html`.
* `Keys.GroupKey` is the current value of the `ArchiveKey` used.

Okay, so, the above code will look at the input posts and then create a directory based off of all the categories available (in the blog template, `News` and `Opinion` are defined), then produce an `index.html` in that directory to serve the content in the template.

My solution now:  Create a year/month archive.

Basically, follow the same steps as above by creating an archive and using the `Published` field that is in the FrontMatter of my blog posts. 
```
ArchiveSources: => $"{Constants.BlogPath}/posts/*"
ArchiveKey: => Get<DateTime>("Published").ToString("yyyy/MM")
ArchiveDestination: >
  => GetInt("Index") <= 1 ? $"{Constants.BlogPath}/{GetString("GroupKey")}/index.html" : $"{Constants.BlogPath}/{GetString("GroupKey")}/{GetInt("Index")}.html"
ArchivePageSize: => @Constants.PostsPerPage
ArchiveOrderKey: Published
Title: Categories
ArchiveTitle: => GetString("GroupKey")
---
<section class="blog-section">
    <div class="blog-container">
        @if (Document.ContainsKey(Keys.GroupKey))
        {
            @Html.Partial($"/{Constants.BlogPath}/_posts.cshtml", Document.GetChildren())
        }
        else
        {
            @foreach (IDocument year in Document.GetChildren())
            {
                <div>
                    <div class="p-3 mb-2 bg-light">
                        <h4>@Html.DocumentLink(year)</h4>
                    </div>
                </div>
            }
        }
    </div>
</section>
```
This is the month index: for a specific year it will produce folders 01 - 12, such that the path /2020/02/ shows a list of all  blog posts written in February of 2020.  Nice!

One thing to note is that the `ArchiveKey` is just a simple value.  Because the FrontMatter of this file type allows C# scripts to be used, I've specifically processed the `Published` configuration so that we can pull out what we need (that is, the year and month).

I also created a year-level archive that does the same thing, but lists all articles published that year.  This will let those side bar links finally shine!
ine!