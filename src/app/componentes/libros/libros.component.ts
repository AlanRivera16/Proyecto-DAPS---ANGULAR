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
  idActPrd:any

  ngOnInit(): void {
    this.obtenerPrd();
    console.log(this.producto);
    this.obtenerIDCat();
    this.obtenerIDUsr();
    
    // this.registrarPrd();
  }
  //Funcion para traer info. de Productos
  obtenerPrd(){
    this.cafServ.getParaProduct().then((data:any)=>{
      this.product=data['productos'];
      console.log(this.product);
    }).catch( error=>{
      console.log('Algo falló')
    })
  }

  //Funcion para agregar Productos
  registrarPrd(){
    this.cafServ.postParaProduct(this.producto).then((resp:any)=>{
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })
    console.log(this.producto);
  }
        //Funcion para obtener el ID de una categoria para nuestro Select de CAT
        obtenerIDCat(){
          this.cafServ.getParaCatg().then((data:any)=>{
            this.category=data['categorias'];
            console.log(this.category);
          }).catch(error => {
            console.log(error);
            
          })
        }
              //Funcion para obtener el ID de un usuario para nuestro Select de USR
              obtenerIDUsr(){
                this.cafServ.getParaUser().then((data:any)=>{
                  this.users=data['usuarios'];
                  console.log(this.users);
                }).catch( error=>{
                  console.log('Algo falló')
                })
              }
    

    //Funcion para actualizar Productos
    actualizarPrd(){
      this.cafServ.putParaProduct(this.producto, this.idActPrd).then((data:any)=>{
        this.producto=data;
        console.log(this.producto);

      }).catch((error)=>{
        console.log('Algo salió mal', error);
      })
    }

    //Funcion para eliminar Producto
    eliminarPrd(){
      this.cafServ.deletParaProduct(this.producto, this.idActPrd).then((data:any)=>{
        this.producto=data;
        console.log(this.producto);

      }).catch((error)=>{
        console.log('Algo salió mal', error);
      })
    }
    
    //Llamar ID
    idAct(idPrd:string){
      this.idActPrd=idPrd;
      console.log(this.idActPrd);
      
    }

}

//Modelo para ngModel
class Producto{
categoria: string
nombre: string
precioU: number
usuario: string
_id?: string
}