import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// Servucui de autentificacion
import { AuthService } from '../../service/auth.service';
// Servicio de rutas que otorga
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
//importamos paqueteria de informacion
import * as CryptoJs from 'crypto-js'

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
    public servicioAuth: AuthService, // metodos de navegacion
    public servicioRutas: Router, //metodo d navegacion
    public servicioFirestore: FirestoreService, //vincula uid con la coleccion
  ) { }

  //registro
  async Registrar() {
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
      uid: this.usuarios.uid,
      email: this.usuarios.email,
      password: this.usuarios.password,
      rol: this.usuarios.rol,
      apellido: this.usuarios.apellido,
    }
    //enviamos los nuevos registros por medio del metodo credencial
    this.usuarios.password = CryptoJs.SHA256(this.usuarios.password).toString();


    //Constante respuesta guarfa una respuesta
    const respuesta = this.servicioAuth.Registrar(credenciales.email, credenciales.password)
      // el metodo then nos devuoleve las respuesta esperada por la promesa
      .then(respuesta => {
        alert('Ha agregado un usuariop con exito:)')
        // Accedemosa servicio de rutas -> metodo navigate
        // metodo navigate = permite dirigirnos a diferentes vistas
        this.servicioRutas.navigate(['/Inicio'])
      })

    const uid = await this.servicioAuth.obtenerUid();
    this.usuarios.uid = uid;
  }

  //enviamos los nuevos registros 
  async guardarUsuario() {
    this.servicioFirestore.agrgarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error =>', err)
      })

  }
  LimpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.uid = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = '',
    }
  }
}