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
      nombre: "Vans",
      raza:"knu skool",
      edad: 0,
      imagen:"https://www.newyorkstore.com.py/files/pro_22187_e.jpg",
      alt:"Vans Knu Skool classic black",
     },
     {
      id: "",
      nombre: "Adidas",
      raza:"Ozmillen",
      edad: 0,
      imagen:"https://dynamic.zacdn.com/_3wqD9FzYhKMylyuENmqXsPMlC0=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/adidas-4984-4197053-2.jpg",
      alt:"Adidas Ozmillen color Beige",
     },
     {
      id: "",
      nombre: "Puma",
      raza:"Suede",
      edad: 0,
      imagen:"https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa5ba7529/products/PU389462-01/PU389462-01-6.JPG",
      alt:"Puma Suede Archive Remastered",
     }
    ]
  }
}
