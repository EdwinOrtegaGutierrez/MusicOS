namespace API_MusicOS.Model
{
    public class Carrito
    {
        private int id_carrito = 0;
        private int id_album = 0;
        private int id_cliente = 0;
        private int cantidad = 0;
        private float total = 0;
        private dynamic image;
        private string nombre = string.Empty;
        private string artista = string.Empty;

        public int Id_carrito { get => id_carrito; set => id_carrito = value; }
        public int Id_album { get => id_album; set => id_album = value; }
        public int Id_cliente { get => id_cliente; set => id_cliente = value; }
        public int Cantidad { get => cantidad; set => cantidad = value; }
        public float Total { get => total; set => total = value; }
        public dynamic Image { get => image; set => image = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Artista { get => artista; set => artista = value; }

    }
}
