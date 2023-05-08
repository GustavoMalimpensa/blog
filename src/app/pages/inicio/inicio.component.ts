import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
   eu = "./assets/img/eu.png"

  constructor() { }

  ngOnInit(): void {
  }

}
