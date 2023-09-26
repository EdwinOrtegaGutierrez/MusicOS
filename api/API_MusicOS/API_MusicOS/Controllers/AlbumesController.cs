using API_MusicOS.Model;
using API_MusicOS.Resource;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumesController : ControllerBase
    {
        /*
            #Principales Generos
            @app.route('/Principales_Generos')
            def Principales_Generos():
                #Se conecta
                connection = mariadb.connect(**conn_params) # AHUEVO
                cursor= connection.cursor()
    
                cursor.execute(f"CALL principales_generos;")
                rows = cursor.fetchall() # AHUEVO
    
                # Get column names
                headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
                # Create a list of dictionaries
                result = []
                for row in rows: result.append(dict(zip(headers, row)))
    
                # Free resources
                cursor.close() # AHUEVO
                connection.close() # AHUEVO
                return result

            #Mas Vendidos
            @app.route('/mas_ven')
            def mas_ven():
                connection = mariadb.connect(**conn_params)
                cursor= connection.cursor() # AHUEVO
                cursor.execute(f"CALL mas_vendidos;") # OPCIONAL
                rows = cursor.fetchall()
                # Get column names
                headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
                # Create a list of dictionaries
                result = []
                for row in rows: result.append(dict(zip(headers, row)))
                # Free resources
                cursor.close() # AHUEVO
                connection.close() # AHUEVO
                return result # AHUEVO
         */

        [HttpGet]
        [Route("categorias")]
        public dynamic Get([FromQuery] string token)
        {
            bool validToken = new JwtToken().IsTokenValid(token);
            if (validToken)
            {
                // Get para consumir status de alta
                try
                {
                    var generos = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get("CALL categorias;"))?.Select(album => album.Genero).ToList() ?? new List<string>();

                    return new
                    {
                        Success = true,
                        Generos = generos
                    };

                }
                catch (Exception ex)
                {
                    return new { Success = false, Message = $"Error: {ex.Message}" };
                }
            }
            else
                return new { Success = false, Message = "Invalid Token" };

        }

        [HttpGet]
        [Route("Albumes_Categorias")]
        public dynamic Get([FromQuery] string token, string categoria)
        {
            bool validToken = new JwtToken().IsTokenValid(token);
            if (validToken)
            {
                // Get para consumir status de alta
                try
                {
                    return new
                    {
                        Success = true,
                        Albumes = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get("Albumes_Categorias", $"('{categoria}')"))
                };

                }
                catch (Exception ex)
                {
                    return new { Success = false, Message = $"Error: {ex.Message}" };
                }
            }
            else
                return new { Success = false, Message = "Invalid Token" };

        }
    }
}
