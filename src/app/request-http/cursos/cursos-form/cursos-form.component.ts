import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log('onSubmit');
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }

  onCancel() {
    this.submitted = false;
    console.log('onCancel');
  }

  hasError(nome: string) {
    return this.form.get(nome).errors;
  }
}
