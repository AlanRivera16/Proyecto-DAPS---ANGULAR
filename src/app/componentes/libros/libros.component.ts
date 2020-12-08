import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  product : any[] = [];
  category : any[] = [];
  users : any[] = [];
  producto: Producto = new Producto;

  ngOnInit(): void {
    this.obtenerPrd();
    console.log(this.producto);
    this.obtenerIDCat();
    this.obtenerIDUsr();
    
    // this.registrarPrd();
  }
  obtenerPrd(){
    this.cafServ.getParaProduct().then((data:any)=>{
      this.product=data['productos'];
      console.log(this.product);
    }).catch( error=>{
      console.log('Algo falló')
    })
  }

  registrarPrd(){
    this.cafServ.postParaProduct(this.producto).then((resp:any)=>{
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })
    console.log(this.producto);
  }
  obtenerIDCat(){
    this.cafServ.getParaCatg().then((data:any)=>{
      this.category=data['categorias'];
      console.log(this.category);
    }).catch(error => {
      console.log(error);
      
    })
  }
  obtenerIDUsr(){
    this.cafServ.getParaUser().then((data:any)=>{
      this.users=data['usuarios'];
      console.log(this.users);
    }).catch( error=>{
      console.log('Algo falló')
    })
  }

}




class Producto{
categoria: string
nombre: string
precioU: number
usuario: string
_id?: string
}