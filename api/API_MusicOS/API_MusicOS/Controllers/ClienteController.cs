using API_MusicOS.Resource;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlX.XDevAPI;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using API_MusicOS.Model;

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpPost]
        [Route("Create_Client")]
        public dynamic Post([FromBody] Cliente cliente)
        {
            try
            {

                dynamic correo_db = new Query().Get("Select", $" correo FROM `cliente` WHERE correo = '{cliente.Correo}'");
                try
                {
                    dynamic email = JsonConvert.DeserializeObject<dynamic>(correo_db)[0].correo.ToString();

                    return new { Success = false, Message = $"El usuario ya esta registrado: {email}" };
                } catch
                {
                    return new
                    {
                        Success = true,
                        Message = $"Usuario registrado",
                        DatabaseStatus = new Query().Put("Create_Client", $"('{cliente.Nombre}', '{cliente.Apellidos}', '{cliente.Correo}', '{cliente.Contraseña}', 'Activo')")
                    };
                }
            }
            catch (Exception ex)
            {
                return new { Success = false, Message = $"Error: {ex.Message}" };
            }
        }

        [HttpGet]
        [Route("Login")]
        public dynamic Get(string correo, string contraseña)
        {
            Cliente cliente = new() { Correo = correo, Contraseña = contraseña };

            dynamic userData = new Query().Get("Login_Usuario", $"('{cliente.Correo}', '{cliente.Contraseña}')");
            bool isUser = JsonConvert.DeserializeObject<dynamic>(userData)?[0].UserExists;
            
            if (isUser)
            {
                int userId = JsonConvert.DeserializeObject<dynamic>(userData)?[0].id;
                // Get Valid Token from GenerateToken function with 5 minutes and user data set
                string token = new JwtToken().GenerateToken(cliente);
                // Save user token
                HttpContext.Session.SetString(Resource.Session.KeyToken, token);
                // Save ID user token
                HttpContext.Session.SetString(Resource.Session.KeyId, Guid.NewGuid().ToString());
                // Return value
                return new { Access = true, Token = token, User = new { cliente.Correo, cliente.Contraseña, userId } };

            }
            else return new {
                Access = false,
                Message = "User account or password is invalid"
            };
        }
    }
}
