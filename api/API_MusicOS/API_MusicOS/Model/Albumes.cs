namespace API_MusicOS.Model
{
    public class Albumes
    {
        private int codigo_album = 0;
        private String autor = string.Empty;
        private DateTime fecha_salida;
        private String titulo = string.Empty;
        private int num_canciones = 0;
        private String canciones = string.Empty;
        private String genero = string.Empty;
        private String estado = string.Empty;
        private float precio;

        public int Codigo_Album { get =>  codigo_album; set => codigo_album = value; }
        public string Autor { get => autor; set => autor = value; }
        public DateTime Fecha_Salida { get => fecha_salida; set => fecha_salida = value;}
        public String Titulo { get => titulo; set => titulo = value; }
        public int Num_Canciones { get => num_canciones; set =>  num_canciones = value; }
        public String Canciones { get => canciones;set => canciones = value; }
        public String Genero { get => genero; set => genero = value; }
        public String Estado { get => estado; set => estado = value; }
        public float Precio { get => precio; set => precio = value; }
    }
}
