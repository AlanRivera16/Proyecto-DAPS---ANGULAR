import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from 'src/app/services/cafeteria.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(private cafServ: CafeteriaService) { }

  product : any[] = [];
  ngOnInit(): void {
    this.cafServ.getParaProduct().subscribe((data:any)=>{
      this.product=data['productos'];
      console.log(this.product);
    });
  }

}
