﻿using System.Web.Mvc;

namespace Angular.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return File("html\\index.html", "text/html");
        }
    }
}