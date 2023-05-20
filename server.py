#!/usr/bin/env python3

from flask import Flask, render_template as html, url_for
from requests import get
from json import loads, load
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
    categorias = get("http://192.168.1.9:280/Nombre_Categorias")
    categorias = loads(categorias.content)
    albumes = get("http://192.168.1.9:280/mas_ven")
    albumes = loads(albumes.content)
    with open('static/json/store.json') as f:
        album_img = load(f)
    return html('store/index.html', categorias = categorias, albumes = albumes, album_img = album_img)

@app.route('/store/<string:genero>')
def storeG(genero): 
    categorias = get("http://192.168.1.9:280/Nombre_Categorias")
    generos = get(f"http://192.168.1.9:280/{genero}/Albumes_Categorias")
    generos = loads(generos.content)
    categorias = loads(categorias.content)
    return html('generos/index.html', categorias=categorias, generos=generos)

@app.route('/about-us')
def about_us():
    with open('static/json/about_us.json') as f:
        work_team = load(f)
    return html('about_us/index.html', work_team = work_team)

if __name__ == "__main__":
    #app.secret_key = 'super secret key' #NECESARIO PARA MANDAR MENSAJES PRIVADOS
    app.run(
        host = '0.0.0.0', 
        port=80, 
        debug=True)