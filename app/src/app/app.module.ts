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
<<<<<<< HEAD
import { CarritoComponent } from './routes/carrito/carrito.component';
import { AjustesComponent } from './routes/ajustes/ajustes.component';

=======
import { LoginComponent } from './routes/login/login.component';
>>>>>>> f3586fbf7414fbda098a16485543b57588b120c6


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
<<<<<<< HEAD
    CarritoComponent,
    AjustesComponent,
    NavbarComponent,
=======
    LoginComponent
>>>>>>> f3586fbf7414fbda098a16485543b57588b120c6
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
