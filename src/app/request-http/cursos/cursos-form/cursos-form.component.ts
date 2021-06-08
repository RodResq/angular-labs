import {Component, OnInit} from '@angular/core';
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
    // this.activatedRouter.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap(id => this.cursoService.loadById(id))
    //   ).subscribe(curso => this.updateForm(curso));

    const curso  = this.activatedRouter.snapshot.data['curso'];
    console.log(curso);
    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      console.log('submit');

      this.cursoService.save(this.form.value).subscribe(
        success => {
          this.location.back();
          console.log(success);
        },
        error => console.log('update executado')
      );

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
