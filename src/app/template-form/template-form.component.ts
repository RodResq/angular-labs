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

  consultaCEP(cep: any, form: any) {

    //Nova variável "cep" somente com dígitos.
    var cep = cep.replace(/\D/g, '');

    if(cep != '') {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.resetForm(form);

        this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => {
            this.populaDadosForm(dados, form)
          })
      }
    }

  }

  populaDadosForm(dados, formulario) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    // }});
    console.log(dados);
    // seta campos especificos do formulario --> importante
    formulario.form.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        complemento: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    })
  }




}
