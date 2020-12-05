import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes

import {  LibrosComponent   } from './componentes/libros/libros.component'
import {  HomeComponent   } from './componentes/shared/home/home.component'
import {  NavbarComponent   } from './componentes/shared/navbar/navbar.component'
import {  PrestamosComponent   } from './componentes/prestamos/prestamos.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component'

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    PrestamosComponent,
    HomeComponent,
    NavbarComponent,
    AcercadeComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
