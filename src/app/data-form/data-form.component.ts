import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {EstadoBr} from '../shared/models/estado-br.model';
import {DropdownService} from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  estadosBr: EstadoBr[]

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropDownService: DropdownService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

    this.dropDownService.getEstadosBr()
      .subscribe(dados => console.log(dados));
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.isValidTouched(campo),
      'has-feedback': this.isValidTouched(campo)
    }
  }

  isValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  onSubmit() {
    console.log(this.formulario.value);
    if(this.formulario.valid){
      this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(tap(res => res))
        .pipe(map(res => res))
        .subscribe(dados => {
          console.log(dados)
          this.resetar();
        }, (error) => alert(error.message));
    }
    else {
      console.log('formulario invalido');
      this.verificaValidacoesFormulario(this.formulario);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty()
      if(controle instanceof FormGroup) {
        this.verificaValidacoesFormulario(controle);
      }
    })
  }

  resetar() {
    this.formulario.reset()
  }

  verficaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');
    if(cep != '') {
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {
        this.resetForm();
        this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados) => {
            this.populaDadosForm(dados)
          });
      };
    }
  }

  populaDadosForm(dados) {
    //Para setar um conjunto de campos e melhor ultilizar o patchValue
    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
    //Para setar um campo em especifico e melhor ultilizar o setValue
    this.formulario.get('nome').setValue('Rodrigo');
  }

  resetForm() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }

}
