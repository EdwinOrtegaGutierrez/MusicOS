using Google.Apis.Auth.OAuth2;
using Google.Apis.Plus.v1;
using Google.Apis.Plus.v1.Data;
using Google.Apis.Services;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration; // Inyecta IConfiguration

        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("google")]
        public async Task<IActionResult> GetGmailUserProfile([FromHeader] string email)
        {
            try
            {
                // Obtiene las credenciales del archivo appsettings.json
                var googleApiSettings = _configuration.GetSection("GoogleApiSettings");
                var clientId = googleApiSettings["ClientId"];
                var clientSecret = googleApiSettings["ClientSecret"];

                var credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                    new ClientSecrets
                    {
                        ClientId = clientId,
                        ClientSecret = clientSecret
                    },
                    new[] { PlusService.Scope.UserinfoEmail, PlusService.Scope.UserinfoProfile },
                    "user", CancellationToken.None);

                var plusService = new PlusService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential
                });

                var profile = await plusService.People.Get(email).ExecuteAsync();

                return Ok(new
                {
                    Name = profile.Name.GivenName,
                    LastName = profile.Name.FamilyName
                });
            }
            catch (Exception ex)
            {
                // Handle any errors here
                return BadRequest(ex.Message);
            }
        }
    }
}
