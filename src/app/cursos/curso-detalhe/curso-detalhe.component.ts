import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

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

}
