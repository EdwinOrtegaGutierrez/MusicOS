namespace API_MusicOS.Model
{
    public class Tarjetas
    {
        // Parameter
        private int id_tarjeta = 0;
        private String numero_tarjeta = string.Empty;
        private DateTime fecha_caducidad;
        private String titular = string.Empty;
        private String emisor = string.Empty;
        private int cvv = 0;
        private String estado = string.Empty;
        // Get & Setters of parameters
        public int ID_Tarjeta { get => id_tarjeta; set => id_tarjeta = value; }
        public String Numero_Tarjeta { get => numero_tarjeta; set => numero_tarjeta = value; }
        public DateTime Fecha_Caducidad { get => fecha_caducidad; set => fecha_caducidad = value; }
        public String Titular { get => titular; set => titular = value; }
        public String Emisor { get => emisor; set => emisor = value; }

        public int CVV { get => cvv; set => cvv = value; }

        public String Estado { get => estado; set => estado = value; }
    }
}
