namespace API_MusicOS.Model
{
    public class Cliente
    {
        private int codigo_usuario = 0;
        private String nombre = string.Empty;
        private String apellidos = string.Empty;
        private String correo = string.Empty;
        private String contraseña = string.Empty;
        private String estado = string.Empty;

        public int Codigo_Usuario { get => codigo_usuario; set => codigo_usuario = value; }
        public String Nombre { get => nombre; set => nombre = value; }
        public String Apellidos { get => apellidos; set => apellidos = value; }
        public String Correo { get => correo; set => correo = value; }
        public String Contraseña { get => contraseña; set => contraseña = value; }
        public String Estado { get => estado; set => estado = value; }
    }
}
