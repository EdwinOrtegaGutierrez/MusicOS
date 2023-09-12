namespace API_MusicOS.Model
{
    public class ClienteTarjeta
    {
        private int id_tarjeta = 0;
        private int id_usuario = 0;

        public int ID_Tarjeta { get => id_tarjeta; set => id_tarjeta = value; }
        public int ID_Usuario { get => id_usuario; set => id_usuario = value; }
    }
}
