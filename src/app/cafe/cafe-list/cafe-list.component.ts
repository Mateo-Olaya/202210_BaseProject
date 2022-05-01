import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  cuentaBlend: number = 0;
  cuentaOrigen: number = 0;

    constructor(private cafeService: CafeService) { }

  getCafes() {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
      this.contarBlend();
    });
  }

  contarBlend(): void {

    let list: string[] = [];


    this.cafes.forEach(element => {
      if(element.tipo == "Blend") {
        list.push(element.tipo);
        this.cuentaBlend += 1;
      }
      if(element.tipo == "Café de Origen") {
        list.push(element.tipo);
        this.cuentaOrigen += 1;
      }
    })

   }

  ngOnInit() {
    this.getCafes();
  }

}
