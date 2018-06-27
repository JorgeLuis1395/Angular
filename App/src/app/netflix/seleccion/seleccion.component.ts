import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {
  //
  @Input()contador;
  @Output() cambioElContador = new EventEmitter();
  @Input()imagen: string;
  @Input()texto: string;
  @Output() selecciono: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('Constructor')
  }
  aumentarContador(){
    this.contador = this.contador+1;
    this.cambioElContador.emit(this.contador)
  }
  seleccionoUsuario() {
    console.log('Selecciono', this.texto);
    this.selecciono.emit(this.texto);
  }

  ngOnInit() {

    console.log('onInit');
    console.log('contador:', this.contador)
  }
  ngOnChanges(cambios){
    console.log('onChanges', cambios)
  }
  ngOnDestroy(){
    console.log('onDestroy')
  }
}
