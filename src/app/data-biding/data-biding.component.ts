import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styles: [
    `
      .highloght {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBidingComponent implements OnInit {

  url: string = 'http:///loaine.training'
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  nomeCurso: string = 'Angular';

  valorInicial: number = 10;

  pessoa: any = {
      nome: 'def',
      idade: 20
  }

  constructor() { }

  ngOnInit(): void {
    console.log('aqui');
    
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Me click!")
  }

  onkeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(value: any) {
    this.valorSalvo = value
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event: any) {
    console.log(event);
  }
}
