import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./rojo.css']
})
export class AppComponent {
  // Interpolacion


  mostrarComponente = false;
  contadorDesdePapa = 0;

  arregloUsuarios = [
    {
      id:1,
      imagen:'/assets/perfil.png',
      texto:'tatis1909'
    },
    {
      id:2,
      imagen:'/assets/perfil.png',
      texto:'pedro'
    },
    {
      id:3,
      imagen:'/assets/perfil.png',
      texto:'Jeff'
    },
    {
      id:4,
      imagen:'/assets/perfil.png',
      texto:'Edd'
    },
    {
      id:5,
      imagen:'/assets/perfil.png',
      texto:'Nancy'
    }
  ];
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

