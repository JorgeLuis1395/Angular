import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./rojo.css']
})
export class AppComponent {
  // Interpolacion
  title = 'Web';
  usuario ={
    nombre:'Jorge',
    apellido:'Carrillo'
  };
  arregloNumeros = [1,3,6,7,3];
  mostrarTitulo = true;
  imagenUrl = 'http://4everstatic.com/immagini/850xX/animali/selvatici/gatti,-belve,-tigre-bianca-146726.jpg';
  imagenWidh = 300;
  html = `
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenUrl}" alt="">
`;
  aumentarWidth(evento){
    console.log(evento)
    this.imagenWidh += 10;
  }
  restarWidth(evento){
    console.log(evento)
    this.imagenWidh -= 10;
  }

}

