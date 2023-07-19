import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavegacaoComponent } from './pages/navegacao/navegacao.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ExpComponent } from './pages/exp/exp.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavegacaoComponent,
    ContatoComponent,
    ExpComponent,
    InicioComponent,
    ProjectsComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
  
}

const firebaseConfig = {
  // Firebase configuration
};
