using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System.Data;

namespace API_MusicOS.Resource
{
    public class Database
    {
        string Connectivity { get; } = "server=127.0.0.1,3307;uid=root;pwd=;database=musicOS";


        // Function to execute queries, takes them as inputs, and returns a list of objects from the resulting query: [{...}]
        public string GetInformation(string query)
        {
            using MySqlConnection connection = new(Connectivity);
            try
            {
                // try connection with DB
                connection.Open();
                // Create SQL data reader and execute query parameter
                using MySqlDataReader reader = new MySqlCommand(query, connection).ExecuteReader();
                // Create a table for the string reader
                using DataTable dataTable = new();
                // Convert string to DataTable type
                dataTable.Load(reader);
                // Close connection with DB
                connection.Close();
                // From the data table return in JSON format
                return JsonConvert.SerializeObject(dataTable);
            }
            catch (Exception ex) { 
                    return $"ERROR: {ex.Message}";
                }
            }

        public string SetInformation(string query)
        {
            // using SqlConnection connection = new(Connectivity);
            using MySqlConnection connection = new(Connectivity);
            try
            {
                // Try connection
                connection.Open();
                // Create SQL data reader and execute query parameter, in this case the reader isn't necessary
                using (MySqlCommand cmd = new(query, connection)) { cmd.ExecuteNonQuery(); }
                // Close connection
                connection.Close();
                // Return message
                return "The data has been successfully saved";
            }
            catch (Exception ex)
            {
                // Return Error SQL
                return $"Error MySQL: {ex.Message}";
            }
        }
    }
}
