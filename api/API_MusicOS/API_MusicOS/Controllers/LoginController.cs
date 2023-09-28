using API_MusicOS.Model;
using API_MusicOS.Resource;
using Microsoft.AspNetCore.Mvc;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        [HttpGet]
        [Route("google")]
        public dynamic Get_Principales()
        {
            return "Google";
        }
    }
}
