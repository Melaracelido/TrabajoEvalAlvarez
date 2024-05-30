import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//vistas del modulo 
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// COMPONENTES DE ANGULAR
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    
    CommonModule,
    AutentificacionRoutingModule,
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    //anuglar
    FormsModule,
  ],
  exports: [
    RegistroComponent,
    InicioSesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class AutentificacionModule { }
