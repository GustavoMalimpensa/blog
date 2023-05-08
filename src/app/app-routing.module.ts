import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [

  { path: '', component: InicioComponent , title:'Portifólio - Inicio'},
  { path: 'Sobre', component: SobreComponent , title:'Portifólio - Sobre'},
  { path: 'Projetos', component: ProjectsComponent , title:'Portifólio- Projetos'},
  { path: 'Experiência', component: ExpComponent , title: 'Portifólio - Experiência'},
  { path: 'Contato' , component: ContatoComponent, title: 'Portifólio - Contato'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
