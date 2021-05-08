import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  constructor(private activatedRouter: ActivatedRoute) {
    console.log(this.activatedRouter);
    this.id = this.activatedRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
