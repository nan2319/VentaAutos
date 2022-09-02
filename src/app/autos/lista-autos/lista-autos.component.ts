import { Component, OnInit } from "@angular/core";
import {Auto} from "src/app/datos/auto";
import { faStar } from "@fortawesome/free-solid-svg-icons";


@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html",
    styleUrls: ['./lista-autos.component.css']
})


export class ListaAutosComponent implements OnInit {
    tituloListaAutos: string = "Lista de Automóviles";
    listaAutos: Auto[] = [];
    muestraImagen: boolean = false;
    
    anchoImagen = 120;
    margenImagen: boolean=false;
    
    private _filtro: string = "";
    listaAutosFiltrados: Auto[] = [];

    get filtro(): string{
        return this._filtro;
    }
    set filtro(filtrarPor: string){
        filtrarPor = filtrarPor.toLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter((auto: Auto)=>auto.marca.toLowerCase().includes(filtrarPor) );
        console.log(filtrarPor);
    }

    faStar = faStar;

    onClickCalificacion(mensaje:string):void{
        alert("Dieron click en la calificacion: "+mensaje);
    }

    constructor(){ }

    ngOnInit():void{
       this.listaAutos= [
            {id:"1", 
                marca:"Kia", 
                modelo:"Rio Lx-Sedan", 
                anio:"2019", 
                color:"Azul brillante", 
                kilometros: 58000, 
                precio:280500, 
                calificacion:4, 
                imagenUrl:"assets/imagenAutos/auto1.jpg"
            },
            {id:"2", 
                marca:"Mazda", 
                modelo:"CX5 I-Sport", 
                anio:"2023", 
                color:"Blanco aprelado mica", 
                kilometros: 10000, 
                precio:543900, 
                calificacion:5, 
                imagenUrl:"assets/imagenAutos/auto2.jpg"
            },
            {id:"3", 
                marca:"Renault", 
                modelo:"Kwid Outsider", 
                anio:"2021", 
                color:"Rojo brillante", 
                kilometros: 30000, 
                precio:249900, 
                calificacion:4, 
                imagenUrl:"assets/imagenAutos/auto3.jpg"
            },
            {id:"4", 
                marca:"Suzuki", 
                modelo:"Swift GLS", 
                anio:"2021", 
                color:"Gris acero", 
                kilometros: 65000, 
                precio:284900, 
                calificacion:3, 
                imagenUrl:"assets/imagenAutos/auto4.jpg"
            },
            {id:"5", 
                marca:"Volkswagen", 
                modelo:"Tiguan Trendline Plus", 
                anio:"2020", 
                color:"Plata silice", 
                kilometros: 1050, 
                precio:548990, 
                calificacion:5, 
                imagenUrl:"assets/imagenAutos/auto5.jpeg"
            },
    ];
    this.listaAutosFiltrados = this.listaAutos;
    }

    toggleImage(): void {
        this.muestraImagen = !this.muestraImagen;
    }
}
