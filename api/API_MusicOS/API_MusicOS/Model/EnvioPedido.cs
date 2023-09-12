namespace API_MusicOS.Model
{
    public class EnvioPedido
    {
        private int id_pedido = 0;
        private int id_envio = 0;

        public int ID_Pedido { get => id_pedido; set => id_pedido = value; }
        public int ID_Envio { get => id_envio; set => id_envio = value; }
    }
}
