import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ImagePath:string;
  anchoImagen = 500;
  
  constructor() { 
  this.ImagePath = './assets/tech-academy.png';
  }
  ngOnInit(): void {
  }

}
