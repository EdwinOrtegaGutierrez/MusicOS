from flask import Flask, jsonify
import mariadb

# CONFIGURE FLASK
app = Flask(__name__)
app.config.update(
    TESTING=True,
    SECRET_KEY='192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf'
)

# CONFIGURE MARIADB
## connection parameters
conn_params= {
    "user"      : "root",
    "password"  : "eddy",
    "host"      : "192.168.1.18",
    "port"      : 23306,
    "database"  : "musicos"
}

# ROUTES
## GET
def get_json(query:str):
    ## Establish a connection
    connection = mariadb.connect(**conn_params) # AHUEVO
    cursor= connection.cursor() # AHUEVO
    # Get Information
    cursor.execute(query) # OPCIONAL
    rows = cursor.fetchall() # AHUEVO
    # Get column names
    headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
    # Create a list of dictionaries
    result = []
    for row in rows: result.append(dict(zip(headers, row)))
    # Free resources
    cursor.close() # AHUEVO
    connection.close() # AHUEVO
    return result # AHUEVO

@app.route('/<string:table>/GET')
def albumes_GET(table): return jsonify(get_json(f"SELECT * FROM {table};"))

## SET
@app.route('/<string:nombre>/<string:correo>/<string:contrasena>/RegistrarUsuario/SET')
def Registrar_Usuario(nombre, correo, contrasena):
    try:
        ## Establish a connection
        connection = mariadb.connect(**conn_params) # AHUEVO
        cursor= connection.cursor() # AHUEVO
        # Get Information
        cursor.execute(f"INSERT INTO `usuarios` (`nombre`, `correo`, `contraseña`) VALUES ('{nombre}', '{correo}', '{contrasena}');")
        # Free resources
        cursor.close() # AHUEVO
        connection.close() # AHUEVO
        return "Pass"
    except:
        return "Error"

# Buscar usuario
@app.route('/<string:email>/<string:pwd>/bUser')
def bUser(email, pwd):
    ## Establish a connection
    connection = mariadb.connect(**conn_params)
    cursor= connection.cursor()
    # Get Information
    cursor.execute(f"SELECT correo FROM usuarios WHERE correo = '{email}';")
    emailDB = cursor.fetchall()

    cursor.execute(f"SELECT contraseña FROM usuarios WHERE contraseña = '{pwd}';")
    pwdDB = cursor.fetchall()
    try:
        if (email == emailDB[0][0] and pwd == pwdDB[0][0]):
            return {"status":True} 
    except: return {"status":False}
    
#Principales Generos
@app.route('/Principales_Generos')
def Principales_Generos():
    #Se conecta
    connection = mariadb.connect(**conn_params) # AHUEVO
    cursor= connection.cursor()
    
    cursor.execute(f"CALL principales_generos;")
    rows = cursor.fetchall() # AHUEVO
    
    # Get column names
    headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
    # Create a list of dictionaries
    result = []
    for row in rows: result.append(dict(zip(headers, row)))
    
    # Free resources
    cursor.close() # AHUEVO
    connection.close() # AHUEVO
    return result

#Mas Vendidos
@app.route('/mas_ven')
def mas_ven():
    connection = mariadb.connect(**conn_params)
    cursor= connection.cursor() # AHUEVO
    cursor.execute(f"CALL mas_vendidos;") # OPCIONAL
    rows = cursor.fetchall()
    # Get column names
    headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
    # Create a list of dictionaries
    result = []
    for row in rows: result.append(dict(zip(headers, row)))
    # Free resources
    cursor.close() # AHUEVO
    connection.close() # AHUEVO
    return result # AHUEVO

#Nombre de las categorias que hay
@app.route('/Nombre_Categorias')
def Nombre_Categorias():
    connection = mariadb.connect(**conn_params)
    cursor= connection.cursor() # AHUEVO
    cursor.execute(f"SELECT DISTINCT genero FROM albumes;") # OPCIONAL
    rows = cursor.fetchall()
    # Get column names
    headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
    # Create a list of dictionaries
    result = []
    for row in rows: result.append(dict(zip(headers, row)))
    # Free resources
    cursor.close() # AHUEVO
    connection.close() # AHUEVO
    return result # AHUEVO
    
#Get de los albumes que hay por categoria (esta incompleto)
@app.route('/<string:genero>/Albumes_Categorias')
def Albumes_Categorias(genero):
    connection = mariadb.connect(**conn_params)
    cursor= connection.cursor() # AHUEVO
    cursor.execute(f"SELECT * FROM albumes WHERE genero = '{genero}';") # OPCIONAL
    rows = cursor.fetchall()
    # Get column names
    headers = [desc[0] for desc in cursor.description] # OPCIONAL | SEA DIC
    # Create a list of dictionaries
    result = []
    for row in rows: result.append(dict(zip(headers, row)))
    # Free resources
    cursor.close() # AHUEVO
    connection.close() # AHUEVO
    return result # AHUEVO

if __name__ == "__main__":
    #app.secret_key = 'super secret key' #NECESARIO PARA MANDAR MENSAJES PRIVADOS
    app.run(
        host = '0.0.0.0', 
        port=280, 
        debug=True)