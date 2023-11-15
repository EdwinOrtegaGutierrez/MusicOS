import { Component, OnInit } from '@angular/core';
import { ImportJsService } from '../../service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';
import { MusicosAuthLoginService } from 'src/app/service/api/musicos-auth-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ ImportJsService ]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  nav_login: boolean = false;
  nav_logout: boolean = false;

  constructor(private _NavbarJsService: ImportJsService, private musicosApiService: MusicosApiService, private authLogin: MusicosAuthLoginService)
  {
    _NavbarJsService.Carga(["navbar/navbar"]);
  }
  
  ngOnInit(): void {
    let [email, password] = this.authLogin.getUser();

    if (email !== '' && password !== '') {
      this.musicosApiService.loginCliente(email, password).subscribe(
        () => (this.isLoggedIn = true)
      );
      this.nav_logout = false;
      this.nav_login = true;
    }
    if (email === '' && password === '') {
      this.isLoggedIn = false
      this.nav_logout = true;
      this.nav_login = false;
    }
  }
}
