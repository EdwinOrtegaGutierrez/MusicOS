using API_MusicOS.Model;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API_MusicOS.Resource
{
    public class JwtToken
    {
        // Create a secret key
        private string SecretKey { get; } = "dsjLDFVL3923dcnk#$%$##=)(/()?POKJHGFDSXCVBHrhbvcaw";

        public string GenerateToken(Cliente cliente)
        {
            // Create token with issuer connection, expires time, claims from user object and credential
            var token = new JwtSecurityToken(
                issuer: "http://localhost:5094",
                expires: DateTime.UtcNow.AddMinutes(5),
                claims: new[]
                {
                    new Claim("correo", cliente.Correo),
                    new Claim("contraseña", cliente.Contraseña),
                },
                signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey)), SecurityAlgorithms.HmacSha256)
            );
            // Returns token
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public bool IsTokenValid(string token)
        {
            try
            {
                // Check if the token is valid from JWT generate token
                new JwtSecurityTokenHandler().ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);
                // Return true if it's a valid token
                return true;
            }
            catch { return false; }
        }

    }
}
