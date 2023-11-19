using System;
using System.IO;
using MySql.Data.MySqlClient;

namespace SaveImagesSQL
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string connectionString = "server=127.0.0.1;uid=root;pwd=;database=musicOS";
            string rutaImagen = @"C:\Users\edwin\OneDrive\Escritorio\MusicOS\Images\Albumes\Static_God.png";

            try
            {
                byte[] imagenBytes = File.ReadAllBytes(rutaImagen);

                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // Consulta SQL para insertar la imagen en la base de datos como un BLOB
                    string insertQuery = "INSERT INTO imagenes (id_imagen, ruta) VALUES (9, @imagenBlob)";

                    MySqlCommand command = new MySqlCommand(insertQuery, connection);
                    command.Parameters.Add("@imagenBlob", MySqlDbType.Blob).Value = imagenBytes;

                    // Ejecutar la consulta
                    command.ExecuteNonQuery();
                    connection.Close();
                }

                Console.WriteLine("Imagen guardada exitosamente en la base de datos.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al guardar la imagen: " + ex.Message);
            }
        }
    }
}
