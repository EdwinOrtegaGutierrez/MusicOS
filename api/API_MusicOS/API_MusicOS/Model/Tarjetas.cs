namespace API_MusicOS.Model
{
    public class Tarjetas
    {
        // Parameter
        private int id_tarjeta = 0;
        private string numero_tarjeta = string.Empty;
        private DateTime fecha_caducidad;
        private string titular = string.Empty;
        private string emisor = string.Empty;
        private int cvv = 0;
        private string estado = string.Empty;
        // Get & Setters of parameters
        public int ID_Tarjeta { get => id_tarjeta; set => id_tarjeta = value; }
        public string Numero_Tarjeta { get => numero_tarjeta; set => numero_tarjeta = value; }
        public DateTime Fecha_Caducidad { get => fecha_caducidad; set => fecha_caducidad = value; }
        public string Titular { get => titular; set => titular = value; }
        public string Emisor { get => emisor; set => emisor = value; }

        public int CVV { get => cvv; set => cvv = value; }

        public string Estado { get => estado; set => estado = value; }
    }
}
