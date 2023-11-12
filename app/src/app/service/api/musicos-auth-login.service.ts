import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MusicosAuthLoginService {
  
  constructor() { }

  getUser(){
    // Obtén el valor de las cookies
    const cookiesString = document.cookie;

    // Divide las cookies en pares clave-valor
    const cookiePairs = cookiesString.split(';');

    // Inicializa variables para el email y el password
    let email = '';
    let password = '';

    // Recorre los pares clave-valor y busca las cookies de email y password
    for (const cookiePair of cookiePairs) {
      const [key, value] = cookiePair.trim().split('=');
      if (key === 'email') {
        email = value;
      } else if (key === 'password') {
        password = value;
      }
    }

    // Ahora tienes el email y el password en las variables email y password
    return [email, password];
  }

  setUser(email: string, password: string, id: number){
    document.cookie = `email=${email};`;
    document.cookie = `password=${password};`;
    document.cookie = `id=${id}`;
  }
}
