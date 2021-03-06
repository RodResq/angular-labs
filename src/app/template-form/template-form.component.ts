import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ConsultaCepService} from '../shared/services/consulta-cep.service';

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
  constructor(
    private http: HttpClient,
    private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log(dados))
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

    if(cep != null && cep !== '')
      this.consultaCepService.consultaCEP(cep).subscribe(dados => this.populaDadosForm(dados, form));
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
