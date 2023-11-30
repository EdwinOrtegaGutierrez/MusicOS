import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { StoreComponent } from './routes/store/store.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { StoreGenerosComponent } from './routes/store/store-generos/store-generos.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './routes/login/login.component';
import { NavLoginComponent } from './components/navbar/nav-login/nav-login.component';
import { NavLogoutComponent } from './components/navbar/nav-logout/nav-logout.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CarritoComponent } from './routes/carrito/carrito.component';
import { PurchaseOrderComponent } from './routes/purchase-order/purchase-order.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    AboutUsComponent,
    PurchaseOrderComponent,
    StoreGenerosComponent,
    TestComponent,
    LoginComponent,
    NavLoginComponent,
    NavLogoutComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    /*
    this.oauthService.configure({
      clientId: '652639111593-5rsu4pi7mn1s718n46ivn3cknl1vc8ev.apps.googleusercontent.com',
      issuer: 'https://accounts.google.com',
      redirectUri: window.location.origin,
      responseType: 'code',
      scope: 'openid profile email',
    });
    */
  }
}
