import {Component, OnDestroy, OnInit} from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-danger">
    </app-poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(valor => this.valor = valor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido.`)
  }

}
