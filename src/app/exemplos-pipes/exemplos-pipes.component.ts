import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms (English Edition)',
    rating: 4.54321,
    numeroPaginas: 218,
    preco: 44.90,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  // Util para pegar valores do servidor.
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincorno'), 2000);
  });

  livros: string[] = ['Java', 'Angular'];

  filtro: string;

  constructor() { }

  ngOnInit(): void {
  }

  obterCursos() {
    if(this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livro;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }




}
