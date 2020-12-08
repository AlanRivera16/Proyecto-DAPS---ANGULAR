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
  ngOnInit(): void {
    this.obtenerUsr();
  }

  obtenerUsr(){
    this.cafServ.getParaUser().then((data:any)=>{
      this.users=data['usuarios'];
      console.log(this.users);
    }).catch( error=>{
      console.log('Algo falló')
    })
  }

}
