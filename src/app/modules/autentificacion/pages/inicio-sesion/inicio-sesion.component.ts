import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../service/auth.service';
import { FirestoreService } from 'src/app/modules/shared/service/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,
  ) { }

  usuarioIngresado: Usuario = {
    uid: '',
    nombre: '',
   apellido: '',
    email: '',
    rol: '',
    password: '',
  };


  async IniciarSesion() {
    // const credenciales = {
    // uid: this.usuarios.uid,
    // nombre: this.usuarios.uid,
    // apellido: this.usuarios.apellido,
    // email: this.usuarios.email,
    // rol: this.usuarios.rol,
    // password: this.usuarios.password,



    const credenciales = {
      email: this.usuarioIngresado.email,
      password: this.usuarioIngresado.password,
    }
      const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          alert('¡Se ha logueado con exito!');
          this.servicioRutas.navigate(['/Inicio'])
        })
    .catch(err =>{
      alert('No se pudo iniciar sesión')

      this.LimpiarInputs();
    })
   
  }

  LimpiarInputs(){
    const inputs = {
      email: this.usuarioIngresado.email='',
      password: this.usuarioIngresado.password='',
    }
   }
}

/*public coleccionUsuarioLocal: Usuario[];
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


  //creamos una coleccion de usuarios de tipo arrays
  coleccionInicioSesion: Usuario [] = []

  //creamos la funcion para el registro de usuarios
  

    for(let i = 0; i < this.coleccionUsuarioLocal.length; i ++){
      const orden = this.coleccionUsuarioLocal[i];
      if (orden.email === credenciales.email && orden.password === credenciales.password ){
        alert ("Ha iniciado sesión")
      } else {
        alert ("No ha iniciado sesión")  
      }
    }
  }*/

  