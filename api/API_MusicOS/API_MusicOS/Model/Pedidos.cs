namespace API_MusicOS.Model
{
    public class Pedidos
    {
        private int id_pedido = 0;
        private String direccion_pedido = string.Empty;
        private String estado = string.Empty;

        public int ID_Pedido { get => id_pedido; set => id_pedido = value; }
        public String Direccion_Pedido { get => direccion_pedido; set => direccion_pedido = value; }
        public String Estado { get => estado; set => estado = value; }
    }
}
