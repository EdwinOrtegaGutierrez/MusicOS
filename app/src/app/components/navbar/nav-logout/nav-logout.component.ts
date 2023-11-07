import { Component } from '@angular/core';
import { MusicosApiService } from 'src/app/service/api/musicos-api.service';
import { MusicosAuthLoginService } from 'src/app/service/api/musicos-auth-login.service';

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
    
  constructor(private musicosApiService: MusicosApiService, private authLogin: MusicosAuthLoginService){}

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

  async getValueAndTrim(elementId: string) {
    const inputElement = document.getElementById(elementId) as HTMLInputElement | null;
    return inputElement?.value.trim() ?? null;
  }

  async validarRegistro(){
    const userName = await this.getValueAndTrim("userName");
    const email = await this.getValueAndTrim("emailSingUp");
    const password = await this.getValueAndTrim("passwordSingUp");
    const vPassword = await this.getValueAndTrim("vpasswordSingUp");

    if (!userName || !email || !password || !vPassword){
      console.error("Error al registrar, por favor verifica los campos");
      return;
    }
    if (password !== vPassword) {
        alert("Las contraseñas no coinciden");
        return; // Evita que el formulario se envíe si las contraseñas no coinciden
    }
    console.log({ "usuario":userName, "email":email, "contraseña":password, "confirmacion":vPassword});
    console.log("Registro con: ", userName, email, password, vPassword);
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
      console.log('Respuesta:', response);
      this.isLoggedIn = true; 
      this.authLogin.setUser(email, password);
      window.location.reload();
    }, () => {
      console.error('Error');
    });
  }  
}
