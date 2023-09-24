import { SobreComponent } from './pages/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ExpComponent } from './pages/exp/exp.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [

  { path: '', component: InicioComponent , title:'Portifólio - Inicio'},
  { path: 'Sobre', component: SobreComponent , title:'Portifólio - Sobre'},
  { path: 'Experiência', component: ExpComponent , title: 'Portifólio - Experiência'},
  { path: 'Contato' , component: ContatoComponent, title: 'Portifólio - Contato'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
