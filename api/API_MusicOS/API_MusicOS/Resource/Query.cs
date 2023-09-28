using System.Reflection;

namespace API_MusicOS.Resource
{
    public class Query
    {
        // -- USUARIO
        public string Login_Usuario() { return "CALL Login_Usuario"; }
        public string Create_Client() { return "CALL Create_Client"; }
        public string Albumes_Categorias() { return "CALL Albumes_Categorias"; }
        public string Categorias() { return "CALL Categorias"; }
        public string Mas_Vendidos() { return "CALL Mas_Vendidos"; }
        public string Principales_Generos() { return "CALL Principales_Generos"; }

        public string Get(string query) => new Database().GetInformation(query);
        public string Get(string method, dynamic query)
        {
            // Create a dynamic method: Can be any about Set function
            MethodInfo? setMethod = GetType().GetMethod(method);
            return new Database().GetInformation(
                $"{setMethod?.Invoke(this, null) ?? null} " +    // Add dynamic method
                $"{query}"                                               // Add query
            );
        }

        public string Put(string method, dynamic query)
        {
            // Create a dynamic method: Can be any about Set function
            MethodInfo? setMethod = GetType().GetMethod(method);
            return new Database().SetInformation(
                $"{setMethod?.Invoke(this, null) ?? null} " +    // Add dynamic method
                $"{query}"                                               // Add query
            );
        }
    }
}
