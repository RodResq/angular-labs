import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  constructor() {
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
  }

}
