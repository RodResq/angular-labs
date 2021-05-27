import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient) { }

  ngOnInit(): void {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });**/
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.isValidTouched(campo),
      'has-feedback': this.isValidTouched(campo)
    }
  }

  isValidTouched(campo) {
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(tap(res => res))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados)
        this.resetar();
      }, (error) => alert(error.message));
  }

  resetar() {
    this.formulario.reset()
  }
}
