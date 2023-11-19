using API_MusicOS.Resource;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using System.Net;

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        [HttpGet]
        [Route("getImage/{id}")]
        public dynamic GetImagen(int id)
        {
            try
            {
                string imageBlob = new Query().Get($"SELECT ruta FROM imagenes WHERE id_imagen = {id}");
                // imagen_blob sería el campo en tu base de datos donde se almacenan los datos binarios de la imagen.

                // Convertir la cadena a un objeto JSON
                JObject jsonObject = (JObject)JArray.Parse(imageBlob).First; // Suponiendo que sea un solo objeto en el array

                // Obtener la cadena de la ruta de la imagen
                string imageString = jsonObject["ruta"].ToString();

                byte[] imageBytes = Convert.FromBase64String(imageString); // Suponiendo que la imagenBlob es una cadena base64
                
                
                return File(imageBytes, "image/png"); // Asegúrate de usar el tipo MIME correcto según el formato de la imagen

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

    }
}
