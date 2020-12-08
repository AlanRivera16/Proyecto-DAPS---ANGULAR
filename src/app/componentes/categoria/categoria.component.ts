import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  category: any[]=[];
  ngOnInit(): void {
    this.cafServ.getParaCatg().subscribe((data:any)=>{
      this.category=data['categorias'];
      console.log(this.category);
    });
  }

}
