import { Component } from '@angular/core';
import { MusicosApiService } from 'src/app/service/api/musicos-api.service';
import { MusicosAuthLoginService } from 'src/app/service/api/musicos-auth-login.service';
import { OAuthService } from 'angular-oauth2-oidc';

interface ContactIcon {
  description: string;
  iconName: string;
}


@Component({
  selector: 'app-nav-logout',
  templateUrl: './nav-logout.component.html',
  styleUrls: ['./nav-logout.component.css']
})
export class NavLogoutComponent {
  isLoggedIn: boolean | undefined;
    
  constructor(private musicosApiService: MusicosApiService, private authLogin: MusicosAuthLoginService, private oauthService: OAuthService){}

  // Contacts Icons
  contactsIcons: ContactIcon[] = [
    {
      description: "Jalisco, GDL 10012, MEX",
      iconName: "location.png"
    },
    {
      description: "musicos@musica.com",
      iconName: "mail.png"
    },
    {
      description: "+ 52 33 28 12 48 59",
      iconName: "phone.png"
    },
    {
      description: "+ 01 234 567 89",
      iconName: "phone.png"
    }
  ];

  loginWithGoogle() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getUserInfo() {
    const claims = this.oauthService.getIdentityClaims();
    // Aquí puedes acceder a los datos del usuario
    console.log(claims);
  }

  async getValueAndTrim(elementId: string) {
    const inputElement = document.getElementById(elementId) as HTMLInputElement | null;
    return inputElement?.value.trim() ?? null;
  }

  async validarRegistro(){
    const name = await this.getValueAndTrim("userName");
    const lastName = await this.getValueAndTrim("userLastName");
    const email = await this.getValueAndTrim("emailSingUp");
    const password = await this.getValueAndTrim("passwordSingUp");
    const valid_pw = await this.getValueAndTrim("vpasswordSingUp");

    if (!name || !lastName! || !email || !password || !valid_pw){
      alert("Error al registrar, por favor verifica los campos");
      return;
    }
    if (password !== valid_pw) {
        alert("Las contraseñas no coinciden");
        return; // Evita que el formulario se envíe si las contraseñas no coinciden
    }

    const body = {
      "nombre": name,
      "apellidos": lastName,
      "correo": email,
      "contraseña": password
    }
    
    this.musicosApiService.createClient(body).subscribe( response => {
        if(response.success === true){
          this.musicosApiService.loginCliente(email, password).subscribe(response => {
            let correo = response.user.correo;
            let contraseña = response.user.contraseña;
            let id = response.user.userId;
            this.isLoggedIn = true; 
            this.authLogin.setUser(correo, contraseña, id);
            window.location.reload();
          }, () => {
            console.error('Error');
          });
        }
      }
    );
  }

  
  async validarLogin() {
    // Obtener los valores de los campos de email y contraseña
    const email = await this.getValueAndTrim("emailAccess");
    const password = await this.getValueAndTrim("passwordAccess");

    // Verificar si los campos están vacíos o inexistentes
    if (!email || !password) {
      console.error("Error al iniciar sesión, por favor verifica los campos");
      return;
    }
    
    // Realizar aquí la lógica para iniciar sesión
    this.musicosApiService.loginCliente(email, password).subscribe(response => {
      let correo = response.user.correo;
      let contraseña = response.user.contraseña;
      let id = response.user.userId;
      this.isLoggedIn = true; 
      this.authLogin.setUser(correo, contraseña, id);
      window.location.reload();
    }, () => {
      console.error('Error');
    });
  }  
}
