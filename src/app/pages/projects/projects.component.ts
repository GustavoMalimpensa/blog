import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  portifolio1 = './assets/img/portifolio/portifolio.png'
  pcmb = './assets/img/pcmb/pcmb.png'
  nacio = './assets/img/nacionalidade/nacio.png'
  remember = './assets/img/remember/remember.png'

  constructor() { }

  ngOnInit(): void {
  }

}
