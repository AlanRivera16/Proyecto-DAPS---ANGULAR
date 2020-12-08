import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  url =  'https://prueba-proyecto-2da-unidad.herokuapp.com/'

  constructor(private http: HttpClient) { }


  //Funciones para Usuarios
  getParaUser(){
    return this.http.get(`${this.url}usuario`).toPromise();
  }




  // Funciones para Productos
  getParaProduct(){
    // const url = 'https://prueba-proyecto-2da-unidad.herokuapp.com/productos';
    // return this.http.get(url);
    return this.http.get(`${this.url}productos`).toPromise();
  }
  postParaProduct(pro:any){
    return this.http.post(`${this.url}productos`,pro).toPromise();
  }



  //Funciones para Categorias
  getParaCatg(){
    return this.http.get(`${this.url}categoria`).toPromise();
  }
}
