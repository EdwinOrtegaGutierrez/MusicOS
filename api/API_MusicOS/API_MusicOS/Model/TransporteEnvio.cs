namespace API_MusicOS.Model
{
    public class TransporteEnvio
    {
        private int id_envio = 0;
        private string placa_transporte = string.Empty;

        public int ID_Envio { get => id_envio; set => id_envio = value; }
        public string Placa_Transporte { get => placa_transporte; set => placa_transporte = value; }
    }
}
