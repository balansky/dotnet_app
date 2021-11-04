
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dotnet_mvc.Models;

namespace dotnet_mvc.Controllers
{

    public class ProductController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public ProductController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }

    }
}