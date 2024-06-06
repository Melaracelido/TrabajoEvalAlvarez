import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
hide = true;

public coleccionUsuarioLocal: Usuario[];
//usamos un constructor para las credenciales correctas
  constructor(){
this.coleccionUsuarioLocal=[
     {
        uid:'',
        nombre:'',
        apellido:'',
        email:'',
        rol:'',
        password:'',
      }
    ]
  };

 //importampos la interfaz de usuario
 usuarios: Usuario = {
    uid: '',
    nombre: '',
   apellido: '',
    email: '',
    rol: '',
    password: '',
  };

  //creamos una coleccion de usuarios de tipo arrays
  coleccionInicioSesion: Usuario [] = []

  //creamos la funcion para el registro de usuarios
  IniciarSesion(){
    const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.uid,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password,
    }

    for(let i = 0; i < this.coleccionUsuarioLocal.length; i ++){
      const orden = this.coleccionUsuarioLocal[i];
      if (orden.email === credenciales.email && orden.password === credenciales.password ){
        alert ("Ha iniciado sesión")
      } else {
        alert ("No ha iniciado sesión")  
      }
    }
  }
}