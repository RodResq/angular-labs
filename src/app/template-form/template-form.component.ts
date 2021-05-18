import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'usuario',
    email: 'usuario@email.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: any) {
    console.log(f);

    console.log(this.usuario);
  }

  isValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.isValidTouched(campo),
      'has-feedback': this.isValidTouched(campo)
    }
  }
}
