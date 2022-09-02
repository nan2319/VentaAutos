import {Routes, RouterModule, Router } from "@angular/router";
import { ListaAutosComponent } from "./autos/lista-autos/lista-autos.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { InicioComponent } from "./inicio/inicio.component";

const rutas: Routes = [
  {path: "autos", component: ListaAutosComponent},
  //{path: "autos/:id", component: DetalleAutosComponent},
  {path: "inicio", component: InicioComponent},
  {path: "clientes", component: ClientesComponent},

  {path: "", redirectTo: "inicio", pathMatch:"full"},
  //{path: "**", redirectTo: "inicio" pathMatch:"full"},
];

export const routing = RouterModule.forRoot(rutas);