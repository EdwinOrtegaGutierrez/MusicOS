namespace API_MusicOS.Model
{
    public class Transporte
    {
        private string placa = string.Empty;
        private string conductor = string.Empty;
        private string estado = string.Empty;

        public string Placa { get =>  placa; set => placa = value; }
        public string Conductor { get => conductor; set => conductor = value; }
        public string Estado { get => estado; set => estado = value; }
    }
}
