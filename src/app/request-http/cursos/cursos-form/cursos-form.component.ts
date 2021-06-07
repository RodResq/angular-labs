import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CursosService} from '../cursos-lista/cursos.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursoService: CursosService,
    private location: Location,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.cursoService.loadById(id).subscribe(
          curso => this.updateForm(curso)
        )
      }
    )
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log('onSubmit');
    if(this.form.valid) {
      console.log(this.form.value);
      this.cursoService.create(this.form.value).subscribe(
        success => {
          this.location.back();
          console.log(success);
        },
        error => console.error(error),
        () => console.log('Complete executado')
      )
    }
  }

  onCancel() {
    this.submitted = false;
    console.log('onCancel');
  }

  hasError(nome: string) {
    return this.form.get(nome).errors;
  }

  updateForm(curso) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }
}
