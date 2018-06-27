import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SeleccionComponent } from './netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    SeleccionComponent
  ],
  imports: [ //Modulos
    BrowserModule, FormsModule
  ],
  providers: [], // servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
