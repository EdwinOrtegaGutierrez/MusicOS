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
import { GenerosComponent } from './routes/generos/generos.component';
import { StoreGenerosComponent } from './routes/store/store-generos/store-generos.component';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './routes/login/login.component';
import { NavLoginComponent } from './components/navbar/nav-login/nav-login.component';
import { NavLogoutComponent } from './components/navbar/nav-logout/nav-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StoreComponent,
    AboutUsComponent,
    GenerosComponent,
    StoreGenerosComponent,
    TestComponent,
    LoginComponent,
    NavLoginComponent,
    NavLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
