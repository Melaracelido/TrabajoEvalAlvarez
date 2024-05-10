import { Component } from '@angular/core';
//importamos interfaz animales
import { Animales } from 'src/app/models/animales';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //propiedad puiblica -> tipo array
 public info: Animales[]

 //Inicializar 
 constructor(){
  this.info = [
     {
      id: "",
      nombre: "perro",
      raza:"Chiquito",
      edad: 0,
      imagen:"https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/04/bichon-maltes.jpg",
      alt:"Perro Chiquito",
     },
     {
      id: "",
      nombre: "perro",
      raza:"Marron y Blanco",
      edad: 0,
      imagen:"https://thumbs.dreamstime.com/z/perro-tonto-del-ordenador-37139253.jpg",
      alt:"perro en la compu",
     },
     {
      id: "",
      nombre: "gato",
      raza:"naranja",
      edad: 0,
      imagen:"https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/12/22/5fe1e18e7de57.jpeg",
      alt:"gato naranja re pancho en la compu",
     }
    ]
  }
}
