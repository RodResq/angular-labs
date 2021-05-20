import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';

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
  constructor(private http: HttpClient) { }

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

  consultaCEP(cep: any) {

    //Nova variável "cep" somente com dígitos.
    var cep = cep.replace(/\D/g, '');

    if(cep != '') {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
          this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe((retorno) => {
              console.log(retorno);
            })
      }
    }

  }


}
