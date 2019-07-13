using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VuePlayground.Startup))]
namespace VuePlayground
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
