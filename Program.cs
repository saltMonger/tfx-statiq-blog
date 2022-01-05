using System;
using System.Linq;
using System.Threading.Tasks;
using Statiq.App;
using Statiq.Common;
using Statiq.Web;
namespace StatiqBlog
{
    class Program
    {
        static async Task<int> Main(string[] args) =>
            await Bootstrapper.Factory
                .CreateWeb(args)
                .AddSetting(Keys.Host, new Uri(Constants.SiteUri).Host)
                .AddSetting(Keys.LinksUseHttps, true)
                .AddSetting(
                        Keys.DestinationPath,
                        Config.FromDocument((doc, ctx) =>
                        {
                            // Only applies to the content pipeline
                            if (ctx.PipelineName == nameof(Statiq.Web.Pipelines.Content))
                            {
                                if (doc.Source.Parent.Segments.Last().SequenceEqual("posts".AsMemory()))
                                {
                                    return new NormalizedPath(Constants.BlogPath).Combine(doc.GetDateTime(WebKeys.Published).ToString("yyyy")).Combine(doc.GetString("Category")).Combine(doc.Destination.FileName.ChangeExtension(".html"));
                                }
                                else if (doc.Source.Parent.Segments.Last().SequenceEqual("projects".AsMemory()))
                                {
                                    return new NormalizedPath(Constants.ProjectPath).Combine(doc.Destination.FileName.ChangeExtension(".html"));
                                }
                                return doc.Destination.ChangeExtension(".html");
                            }
                            return doc.Destination;
                        }))
                .RunAsync();
    }
}
