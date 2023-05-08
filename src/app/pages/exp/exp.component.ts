import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {
  sdr = './assets/img/sdr.jpg'
  dimensao = './assets/img/dimensao.png'
  estrutura = './assets/img/estrutura.png'
  hub = './assets/img/hub.png'

  constructor() { }

  ngOnInit(): void {
  }

}
