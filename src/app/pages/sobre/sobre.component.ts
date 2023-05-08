import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']

})
export class SobreComponent implements OnInit {

  eupequeno = './assets/img/eupequeno.jpg'
  udemy = './assets/img/udemy.png'
  sesi = './assets/img/sesi.png'
  senai ='./assets/img/senai.png'
  uniararas ='./assets/img/uniararas.jpg'
  claretiano = './assets/img/claretiano.png'
  footer = './footer/footer.component.css'
  constructor() { }

  ngOnInit(): void {
  }

}
