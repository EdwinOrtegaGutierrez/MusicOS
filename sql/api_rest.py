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
@app.route('registrar_vendedor/<string:name>/<int:phone>/SET')
def registrar_vendedor(name, phone):
    try:
        ## Establish a connection
        connection = mariadb.connect(**conn_params) # AHUEVO
        cursor= connection.cursor() # AHUEVO
        # Get Information
        cursor.execute(f"INSERT INTO `vendedores` (`name`, `phone`) VALUES ('{name}', '{phone}');") # OPCIONAL
        # Free resources
        cursor.close() # AHUEVO
        connection.close() # AHUEVO
        return "Concluido"
    except:
        return "Error"
# TODO

## B
@app.route('/<string:email>/<string:pwd>/bUser')
def bUser(email, pwd):
    ## Establish a connection
    connection = mariadb.connect(**conn_params)
    cursor= connection.cursor()
    # Get Information
    cursor.execute(f"SELECT {email} FROM usuarios;")
    emailDB = cursor.fetchall()

    cursor.execute(f"SELECT {pwd} FROM usuarios;")
    pwdDB = cursor.fetchall()

    if (email == emailDB and pwd == pwdDB):
        return True 
    else: return False

if __name__ == "__main__":
    #app.secret_key = 'super secret key' #NECESARIO PARA MANDAR MENSAJES PRIVADOS
    app.run(
        host = '0.0.0.0', 
        port=80, 
        debug=True)