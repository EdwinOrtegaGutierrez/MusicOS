from flask import Flask, render_template as html, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return html('/index.html')

if __name__ == "__main__":
    app.secret_key = 'super secret key' #NECESARIO PARA MANDAR MENSAJES PRIVADOS
    app.run(host = '0.0.0.0', port=80, debug=True)