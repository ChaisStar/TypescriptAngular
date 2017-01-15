using System.Web.Mvc;
using System.Web.Routing;

namespace Angular
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Employees",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Employees", action = "Index", id = UrlParameter.Optional }
            //);


            routes.MapRoute(
                name: "Default",
                url: "",
                defaults: new {Controller = "Home", action = "Index", id = UrlParameter.Optional}
            );
        }
    }
}
