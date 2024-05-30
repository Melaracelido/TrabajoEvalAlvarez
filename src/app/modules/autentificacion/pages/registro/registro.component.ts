import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from 'src/app/models/usuario'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  //
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

// coleccion de usuarios
coleccionusuarios: Usuario[] = [];
//registro
Registrar(){
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.uid,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password,

  }
  //enviamos los nuevos registros 
  this.coleccionusuarios.push(credenciales);

  // por consola
  console.log(credenciales);
  console.log(this.coleccionusuarios)
}
}
