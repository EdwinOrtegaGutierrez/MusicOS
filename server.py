from flask import Flask, render_template as html, url_for

app = Flask(__name__, template_folder="templates")

app.config.update(
    TESTING=True,
    SECRET_KEY='192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf'
)

@app.route('/')
def index():
    return html('home/index.html')

@app.route('/store')
def store():
    return html('store/index.html')

if __name__ == "__main__":
    #app.secret_key = 'super secret key' #NECESARIO PARA MANDAR MENSAJES PRIVADOS
    app.run(
        host = '0.0.0.0', 
        port=80, 
        debug=True)