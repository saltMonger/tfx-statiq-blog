Title: Site Build - Part 2
Published: 2021-12-23
Category: news
---
### SNAG:  Parsing special markdown files for project links

Since the blog basically comes for free, I want to extend my website to also present my various projects as articles.  Statiq.Web provides a set of pipelines to read both normal and meta data from a markdown file - metadata is in the common "FrontMatter" format where it is separated from the rest of the potential article by 3 hyphens.  Anything above the hyphens is read in YAML format.  Neat, I could just make the following construct in the FrontMatter:

```yaml
link:
	[YouTube]: https://www.youtube.com
	[SoundCloud]: https://www.soundcloud.com
---
# Cool article text!
```

This is great! Except for how the YAML is interpreted into what the custom razor system can consume.  I'm a bit hazy on how the @Model or @Document variable is composed, and a quick readthrough of the available source didn't give me too clear of an idea either.  There's some methods to fetch the information, one of which seems at least somewhat useful: `Model.GetList()`.

Nice! We'll use that.  I was going to name the link on the page using the dictionary's key, but since we're using a list, we'll need to encode the link somehow.  What immediately came to mind was how markdown represent links:
```
[Link Name](href)
``` 
Cool!  We can just use this to represent links in our list.  We'll just need some way to figure that out.  Markdown can obviously handle it, but since we're working in YAML, I just looked around for some regex to check for markdown links and found a handy article here: https://davidwells.io/snippets/regex-match-markdown-links

It took just a little fiddling around and the addition of a character in the href capture group (`-`) which I quickly found out was present in my soundcloud link.

Here's the final regex:
```cs
 Regex fullLinkOnlyRegex = new Regex(@"^\[([\w\s\d]+)\]\((https?:\/\/[\w\d-./?=#]+)\)$");
 var split = fullLinkOnlyRegex.Match(link);
 <div class="card-text mb-2">
     <a href="@split.Groups[2]">@split.Groups[1]</a>
 </div>
```
Well, that was all exciting - now I have a functional link sub nav that I can populate programmatically for each project I put together.

I'll be continuing to record more post-mortem information which I'll release... whenever I finish the rest of my website!