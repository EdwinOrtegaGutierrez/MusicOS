namespace API_MusicOS.Model
{
    public class Imagenes
    {
        private int id_imagen = 0;
        private string ruta = string.Empty;

        public int ID_Imagen {  get => id_imagen; set => id_imagen = value; }
        public string Ruta { get => ruta; set => ruta = value; }
    }
}
