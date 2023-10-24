import { Component } from '@angular/core';
import { ImportJsService } from '../../service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';

interface ContactIcon {
  description: string;
  iconName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ ImportJsService ]
})
export class NavbarComponent {
  constructor(private _NavbarJsService: ImportJsService, private musicosApiService: MusicosApiService)
  {
    _NavbarJsService.Carga(["navbar/navbar"]);
  }

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
    }, error => {
      console.error('Error:', error);
    });
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
}
