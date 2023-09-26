namespace API_MusicOS.Model
{
    public class Cliente
    {
        private int codigo_usuario = 0;
        private string nombre = string.Empty;
        private string apellidos = string.Empty;
        private string correo = string.Empty;
        private string contraseña = string.Empty;
        private string estado = string.Empty;

        public int Codigo_Usuario { get => codigo_usuario; set => codigo_usuario = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellidos { get => apellidos; set => apellidos = value; }
        public string Correo { get => correo; set => correo = value; }
        public string Contraseña { get => contraseña; set => contraseña = value; }
        public string Estado { get => estado; set => estado = value; }
    }
}
