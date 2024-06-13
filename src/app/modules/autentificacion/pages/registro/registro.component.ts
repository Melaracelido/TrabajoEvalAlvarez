import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// Servucui de autentificacion
import { AuthService } from '../../service/auth.service';
// Servicio de rutas que otorga
import { Router } from '@angular/router';


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

//referrenciams los servicios
constructor(
  public servicioAuth: AuthService,
  public servicioRutas: Router,
){}

//registro
Registrar(){
  /*const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.uid,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password,
  this.coleccionusuarios.push(credenciales);
  por consola
  console.log(credenciales);
  console.log(this.coleccionusuarios)
  }*/

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }

    //Constante respuesta guarfa una respuesta
    const respuesta = this.servicioAuth.Registrar(credenciales.email, credenciales.password)
    // el metodo then nos devuoleve las respuesta esperada por la promesa
    .then(respuesta => {
    alert('Ha agregado un usuariop con exito:)')

    // Accedemosa servicio de rutas -> metodo navigate
    // metodo navigate = permite dirigirnos a diferentes vistas
    this.servicioRutas.navigate(['/Inicio'])
   })
  }
  //enviamos los nuevos registros 

  LimpiarInputs(){
  const inputs = {
    uid: this.usuarios.uid='',
    nombre: this.usuarios.uid='',
    apellido: this.usuarios.apellido='',
    email: this.usuarios.email='',
    rol: this.usuarios.rol='',
    password: this.usuarios.password='',
  }
 }
}