namespace API_MusicOS.Model
{
    public class Pedidos
    {
        private int id_pedido = 0;
        private string direccion_pedido = string.Empty;
        private string estado = string.Empty;

        public int ID_Pedido { get => id_pedido; set => id_pedido = value; }
        public string Direccion_Pedido { get => direccion_pedido; set => direccion_pedido = value; }
        public string Estado { get => estado; set => estado = value; }
    }
}
