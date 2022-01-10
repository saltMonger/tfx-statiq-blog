Title: Site Build 1 - First Refresh
Published: 2021-12-14
Category: news
---
It has been a long time since I've paid my portfolio any attention.  I think it's very easy to throw something together and then never maintain it. What better way to get back into the swing of things than rebuild it?

### Why start from scratch?
My first website was builtin WordPress and hosted on a free webhost.  This was fine in college, but after a while I feel I outgrew the platform (and that advert that kept popping up at the bottom of my page).  Being a programmer by trade, I felt like I needed something else to show my skills off, even if that's what the content on the portfolio is for.

Thus, a friend recommended to me "Enduro.js"  - this was a pretty cool framework that included an admin background, posts and data stored in JSON, and a front end using HandleBars.  This was great for a while, however the project was unsupported when I started using it, and as of the writing of this article, the website doesn't exist anymore.

Ideally, I'd want something that's supported still.  Also, since my tenure increases with the .NET platform, I find myself drawn more to projects that written or benefit from it.  I had some thoughts about writing something in F# since I've been learning it on and off recently, but the learning curve to build out a full portfolio in a new paradigm is a bit too massive for me.  So, preferably something that uses C#.

Enter [**Statiq**](https://www.statiq.dev/web/) - a static site generator written in C#.  Statiq.Web is a collection of web pipelines to enable more website centric generation, all built on top of a core pipeline processing system known as Statiq.Framework.  Writing in this framework will lend me a bit of agility, as I'm comfortable with both C#, and the Razor templating engine which Statiq.Web uses.


### What do I gain?
Hopefully a website.  And fast.  I want something that is easy enough to create new posts in, and something that I can feel is totally mine, not just some styling slapped on top.  I'm hoping that this framework satisfies both of those needs.

### So, what first?
I'll start with a running example.  Some of my searches for "C# static site generator" revealed a project and article by [Bradley Wells](https://wellsb.com/) who so helpfully provides a boilerplate template.  I find that enough of a project working to show me a web page that says "here are some posts" is a good start to get me tinkering and adding my own things.

Hopefully, even after I build this website, I'll make it a habit of updating it with new projects, and articles about them.  I have a series of blogs planned to follow my progress building the site, so stay tuned!
