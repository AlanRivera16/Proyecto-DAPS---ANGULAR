import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
  selector: 'app-agregarusr',
  templateUrl: './agregarusr.component.html',
  styleUrls: ['./agregarusr.component.css']
})
export class AgregarusrComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  users:any[]=[];
  usuarioss: Usuarios = new Usuarios;
  idActUsr:any

  ngOnInit(): void {
    this.obtenerUsr();
    
  }

  obtenerUsr(){
    this.cafServ.getParaUser().then((data:any)=>{
      this.users=data['usuarios'];
      console.log(this.users);
    }).catch( error=>{
      console.log(error)
    })
  }

  //Funcion para agregar Usuario
  registrarUsr(){
    this.cafServ.postParaUsr(this.usuarioss).then((resp:any)=>{
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })
    console.log(this.usuarioss);
  }
  //Funcion para actualizar Usuario
  actualizarUsr(){
    this.cafServ.putParaUser(this.usuarioss, this.idActUsr).then((data:any)=>{
      this.usuarioss=data;
      console.log(this.usuarioss);
      
    }).catch((error)=>{
      console.log('Algo salió mal', error);
      
    })
  }

  //Función para eliminar Usuarios
  eliminarUsr(){
    this.cafServ.deletParaUser(this.usuarioss, this.idActUsr).then((data:any)=>{
      this.usuarioss=data;
      console.log(this.usuarioss);
      
    }).catch((error)=>{
      console.log('Algo salió mal', error);
      
    })
  }


  //Llamar id
  idAct(idUsr:string){
    this.idActUsr=idUsr;
    console.log(this.idActUsr);
    
  }

}



class Usuarios {
  apellido: string
  email: string
  nombre: string
  password: string
  _id?: string
}
