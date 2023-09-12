namespace API_MusicOS.Model
{
    public class VentaPedido
    {
        private int codigo_usuario = 0;
        private int codigo_album = 0;
        private int id_compra = 0;
        private int id_pedido = 0;

        public int Codigo_Usuario { get => codigo_usuario; set => codigo_usuario = value; }
        public int Codigo_Album { get => codigo_album; set => codigo_album = value; }
        public int ID_Compra { get => id_compra; set => id_compra = value; }
        public int ID_Pedido { get => id_pedido; set => id_pedido = value; }
    }
}
