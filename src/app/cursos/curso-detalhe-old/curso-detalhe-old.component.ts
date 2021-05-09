import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso-detalhe-old',
  templateUrl: './curso-detalhe-old.component.html',
  styleUrls: ['./curso-detalhe-old.component.css']
})
export class CursoDetalheOldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTranslationMaps(rhyme): any {
    const rhymes = {
      "apples and pears": "Stairs",
      "hampstead heath": "Teeth",
      "loaf of bread": "Head",
      "pork pies": "Lies",
      "whistle and flute": "Suit",
    };
    return rhymes[rhyme.toLowerCase()] ?? 'Rhyme not found';
  }

  calculo(num1: number, num2: number, acao: string): any {
    const acoes =  {
      soma: (a, b) => a + b,
      subtracao: (a, b) => a - b,
      multiplicacao: (a, b) => a * b,
      divisao: (a, b) => a /b,
    };

    return acoes[acao]?.(num1, num2) ?? 'Calculo nao reconhecido'
  }

}
