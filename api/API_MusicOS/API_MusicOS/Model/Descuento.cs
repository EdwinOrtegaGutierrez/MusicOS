namespace API_MusicOS.Model
{
    public class Descuento
    {
        private int id_descuento = 0;
        private float cantidad = 0;
        private string estado = string.Empty;

        public int ID_Descuento { get => id_descuento; set => id_descuento = value; }
        public float Cantidad { get => cantidad; set => cantidad = value; }
        public string Estado { get => estado; set => estado = value; }
    }
}
