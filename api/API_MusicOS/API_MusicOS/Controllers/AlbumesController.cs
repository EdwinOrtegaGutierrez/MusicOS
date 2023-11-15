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
        [HttpGet]
        [Route("Categorias")]
        public dynamic Get()
        {
            // Get para consumir status de alta
            try
            {
                var generos = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get("CALL Categorias;"))?.Select(album => album.Genero).ToList() ?? new List<string>();

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

        [HttpGet]
        [Route("Albumes_Categorias")]
        public dynamic Get([FromQuery]string categoria)
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

        [HttpGet]
        [Route("Mas_Vendidos")]
        public dynamic Get_Vendidos()
        {
            // Get para consumir status de alta
            try
            {
                // Proyecta los campos deseados (fecha_Salida y titulo)
                var albumes = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get("Mas_Vendidos", ""))?.Select(a => new { a.Titulo, a.Total_De_Ventas }).ToList();

                return new
                {
                    Success = true,
                    albumes
                };

            }
            catch (Exception ex)
            {
                return new { Success = false, Message = $"Error: {ex.Message}" };
            }
        }

        [HttpGet]
        [Route("Principales_Generos")]
        public dynamic Get_Principales()
        {
            // Get para consumir status de alta
            try
            {
                // Proyecta los campos deseados (fecha_Salida y titulo)
                var albumes = JsonConvert.DeserializeObject<List<Albumes>>(new Query().Get("Principales_Generos", ""))?.Select(a => new { a.Genero, a.Total_De_Ventas }).ToList();

                return new
                {
                    Success = true,
                    albumes
                };

            }
            catch (Exception ex)
            {
                return new { Success = false, Message = $"Error: {ex.Message}" };
            }
        }
    }
}
