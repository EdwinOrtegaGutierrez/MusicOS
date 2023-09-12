namespace API_MusicOS.Model
{
    public class Ventas
    {
        private int id_compra = 0;
        private String tipo_pago = string.Empty;

        public int ID_Compra { get => id_compra; set => id_compra = value; }
        public String Tipo_Pago { get => tipo_pago; set => tipo_pago = value; }
    }
}
