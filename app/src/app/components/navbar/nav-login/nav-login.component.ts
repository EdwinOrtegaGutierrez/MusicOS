import { Component } from '@angular/core';
import { GoogleApiService } from 'src/app/service/api/google-api.service';

interface ContactIcon {
  description: string;
  iconName: string;
}


@Component({
  selector: 'app-nav-login',
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent {

  constructor(private googleApi: GoogleApiService){}

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

  async logout(){
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.googleApi.singOut();
    window.location.reload();
  }
}
