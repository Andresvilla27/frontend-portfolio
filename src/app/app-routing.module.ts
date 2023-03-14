import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de.component';
import { EditeducacionComponent } from './componentes/estudios/editeducacion.component';
import { NeweducacionComponent } from './componentes/estudios/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditarSkillComponent } from './componentes/habilidades/editar-skill.component';
import { NuevaSkillComponent } from './componentes/habilidades/nueva-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path: 'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'nuevaskill', component:NuevaSkillComponent},
  {path: 'editarskill/:id', component:EditarSkillComponent},
  {path: 'editaracercade/:id', component:EditarAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
