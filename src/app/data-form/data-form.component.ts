import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {EstadoBr} from '../shared/models/estado-br.model';
import {DropdownService} from '../shared/services/dropdown.service';
import {ConsultaCepService} from '../shared/services/consulta-cep.service';
import {Observable, of} from 'rxjs';
import {FormValidation} from '../shared/services/form-validation';
import {VerificalEmailService} from './services/verifical-email.service';
import {BaseFormComponent} from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {

  // formulario: FormGroup;
  // estadosBr: EstadoBr[]
  estados: Observable<EstadoBr[]>;
  cargos: any[];
  tecnologias: any[];
  newsLetterOp: any[];
  frameworks =  ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropDownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificarEmailService: VerificalEmailService)
  {
    super();
  }

  ngOnInit(): void {

    // this.verificarEmailService.verficarEmail('email@email.com').subscribe(email => {});

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, FormValidation.equalsTo('email')],
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidation.cepValidators]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      frameworks: this.buildFrameworks(),
    });

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('Status do CEP: ', value)),
        switchMap(status => status === 'VALID' ?
          this.consultaCepService.consultaCEP(
            this.formulario.get('endereco.cep').value) :
            of({})
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados): {});

    // this.dropDownService.getEstadosBr()
    //   .subscribe(dados => this.estadosBr =dados);
    this.estados = this.dropDownService.getEstadosBr();

    this.cargos = this.dropDownService.getCargos();

    this.tecnologias = this.dropDownService.getTecnologias();

    this.newsLetterOp = this.dropDownService.getNewsletter();
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidation.requiredMinCheckbobx(1));
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.isValidTouched(campo),
      'has-feedback': this.isValidTouched(campo)
    }
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    console.log(valueSubmit);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });
    console.log(valueSubmit);

    this.httpClient.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .pipe(tap(res => res))
      .pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados)
        this.resetar();
      }, (error) => alert(error.message));
  }


  onSubmit() {
    if(this.formulario.valid){
      this.submit();
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesFormulario(this.formulario);
    }
  }

  validarEmail(formControl: FormControl) {
    return this.verificarEmailService.verficarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? {emailInvalido: true}: null));
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    if(cep != null && cep !== '')
      this.consultaCepService.consultaCEP(cep).subscribe(dados => this.populaDadosForm(dados));
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

  setCargo() {
    const cargo = {nome: 'Dev', nivel: 'Pleno', desc:'Dev Pleno'};
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel): obj1 === obj2;
  }

  compararTecnologias(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.des === obj2.desc): obj1 === obj2;
  }

  setTecnologias() {
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }
}
