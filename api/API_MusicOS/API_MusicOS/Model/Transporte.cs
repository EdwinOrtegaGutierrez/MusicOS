namespace API_MusicOS.Model
{
    public class Transporte
    {
        private String placa = string.Empty;
        private String conductor = string.Empty;
        private String estado = string.Empty;

        public String Placa { get =>  placa; set => placa = value; }
        public String Conductor { get => conductor; set => conductor = value; }
        public String Estado { get => estado; set => estado = value; }
    }
}
