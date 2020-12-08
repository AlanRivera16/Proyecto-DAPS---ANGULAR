import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  constructor(private http: HttpClient) { }

  getParaUser(){
    const url = 'https://prueba-proyecto-2da-unidad.herokuapp.com/usuario';
    return this.http.get(url);
  }
  getParaProduct(){
    const url = 'https://prueba-proyecto-2da-unidad.herokuapp.com/productos';
    return this.http.get(url);
  }
  getParaCatg(){
    const url = 'https://prueba-proyecto-2da-unidad.herokuapp.com/categoria';
    return this.http.get(url);
  }
}
