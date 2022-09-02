import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    ClientesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


