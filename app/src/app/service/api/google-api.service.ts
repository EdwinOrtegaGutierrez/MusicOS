import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '652639111593-5rsu4pi7mn1s718n46ivn3cknl1vc8ev.apps.googleusercontent.com',
  scope: 'openid profile email'
}

export interface UserInfo {
  info: {
    sub: string,
    email: string,
    email_verified: boolean,
    name: string,
    picture: string,
    given_name: string,
    family_name: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  userProfile?: UserInfo;

  constructor(private readonly oAuthService: OAuthService) { 
  }

  async getUser(): Promise<void> {
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.loadDiscoveryDocument().then( () => {
      this.oAuthService.tryLoginImplicitFlow().then( () => {
        if(!this.oAuthService.hasValidAccessToken()){
          this.oAuthService.initLoginFlow();
          console.log("HOLA")
        } else {
          this.oAuthService.loadUserProfile().then( (userprofile) => {
            const profile: UserInfo = JSON.parse(JSON.stringify(userprofile));
            this.userProfile = profile;
          });
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  singOut() {
    alert("Cerrar sesión!");
    this.oAuthService.logOut();
  }
}
