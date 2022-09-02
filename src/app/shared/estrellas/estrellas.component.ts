import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'estrellas',
  templateUrl: './estrellas.component.html',
  
})
export class EstrellasComponent implements OnInit, OnChanges {

  faStar=faStar;
  
  estrellasCalificacion: any[]=[];

  @Input() calificacion: number=0;
  @Output() starsClick= new EventEmitter<string>();
  
  onClick(estrellas:number):void{
    this.starsClick.emit("Calificacion: "+ estrellas);
  }
  constructor() { }

  ngOnInit():void{
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.estrellasCalificacion=[];
      for(var i=1; i<=this.calificacion;i++){
        this.estrellasCalificacion.push(1);
      }
  }

}
