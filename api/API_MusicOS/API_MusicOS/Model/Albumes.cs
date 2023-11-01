namespace API_MusicOS.Model
{
    public class Albumes
    {
        private int codigo_album = 0;
        private string autor = string.Empty;
        private DateTime fecha_salida;
        private string titulo = string.Empty;
        private int num_canciones = 0;
        private string canciones = string.Empty;
        private string genero = string.Empty;
        private string estado = string.Empty;
        private float precio;

        private string total_de_ventas = string.Empty;

        public int Codigo_Album { get =>  codigo_album; set => codigo_album = value; }
        public string Autor { get => autor; set => autor = value; }
        public DateTime Fecha_Salida { get => fecha_salida; set => fecha_salida = value;}
        public string Titulo { get => titulo; set => titulo = value; }
        public int Num_Canciones { get => num_canciones; set =>  num_canciones = value; }
        public string Canciones { get => canciones;set => canciones = value; }
        public string Genero { get => genero; set => genero = value; }
        public string Estado { get => estado; set => estado = value; }
        public float Precio { get => precio; set => precio = value; }

        public string Total_De_Ventas { get => total_de_ventas; set => total_de_ventas = value; }
    }
}
