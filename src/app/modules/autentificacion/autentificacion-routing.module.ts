import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from '../inicio/pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
{path:"registro",component:RegistroComponent},
{path:"iniciosesion",component:InicioSesionComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
