using API_MusicOS.Model;
using API_MusicOS.Resource;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_MusicOS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarritoController : ControllerBase
    {
        // GET: api/<CarritoController>
        [HttpGet]
        [Route("getCarrito")]
        public dynamic Get([FromQuery] int id_cliente)
        {
            try
            {
                var carrito = JsonConvert.DeserializeObject<List<Carrito>>(new Query().Get($"SELECT * FROM `carrito` WHERE id_cliente = {id_cliente}"));

                for (int i = 0; i < carrito?.Count; i++)
                {
                    string imageBlob = new Query().Get($"SELECT ruta FROM imagenes WHERE id_imagen = {carrito[i].Id_album}");
                    // imagen_blob sería el campo en tu base de datos donde se almacenan los datos binarios de la imagen.

                    // Convertir la cadena a un objeto JSON
                    JObject jsonObject = (JObject)JArray.Parse(imageBlob).First; // Suponiendo que sea un solo objeto en el array


                    // Obtener la cadena de la ruta de la imagen
                    string imageString = jsonObject["ruta"].ToString();


                    byte[] imageBytes = Convert.FromBase64String(imageString); // Suponiendo que la imagenBlob es una cadena base64

                    carrito[i].Image = File(imageBytes, "image/png"); // Asegúrate de usar el tipo MIME correcto según el formato de la imagen

                    // Obtener nombre y artista del album
                    var album = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get($"SELECT autor, titulo FROM `albumes` WHERE codigo_album = {carrito[i].Id_album}"));

                    carrito[i].Artista = album[0].Autor;
                    carrito[i].Nombre = album[0].Titulo;
                }

                return new
                {
                    Success = true,
                    Carrito = carrito
                };
            } catch (Exception ex)
            {
                return new
                {
                    Success = false,
                    Carrito = ex
                };
            }
        }

        [HttpPost]
        [Route("deleteCarrito")]
        public dynamic DeleteCarrito([FromBody] int id_carrito)
        {
            try
            {
                new Query().Put($"DELETE FROM carrito WHERE `carrito`.`id_carrito` = {id_carrito}");

                return new
                {
                    Success = true,
                };
            }
            catch (Exception ex) 
            {
                return new
                {
                    Success = false,
                    Carrito = ex
                };
            }
        }

        [HttpPost]
        [Route("emptyCarrito")]
        public dynamic EmptyCarrito([FromBody] int id_cliente)
        {
            try
            {
                new Query().Put($"DELETE FROM carrito WHERE id_cliente = {id_cliente};");
                
                return new
                {
                    Success = true,
                };
            }
            catch (Exception ex)
            {
                return new
                {
                    Success = false,
                    Carrito = ex
                };
            }
        }

        [HttpPost]
        [Route("addCarrito")]
        public dynamic AddCarrito([FromBody] AddCarrito addCarrito)
        {
            try
            {
                new Query().Put($"INSERT INTO `carrito` (`id_carrito`, `id_album`, `id_cliente`, `cantidad`, `total`) VALUES (NULL, '{addCarrito.Id_album}', '{addCarrito.Id_cliente}', '{addCarrito.Cantidad}', '{addCarrito.Total}');");

                return new
                {
                    Success = true,
                };
            }
            catch (Exception ex)
            {
                return new
                {
                    Success = false,
                    Carrito = ex
                };
            }
        }
    }
}
