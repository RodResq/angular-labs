import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {EstadoBr} from '../shared/models/estado-br.model';
import {DropdownService} from '../shared/services/dropdown.service';
import {ConsultaCepService} from '../shared/services/consulta-cep.service';
import {Observable} from 'rxjs';
import {ValueConverter} from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

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
    private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      frameworks: this.buildFrameworks(),
    });

    // this.dropDownService.getEstadosBr()
    //   .subscribe(dados => this.estadosBr =dados);
    this.estados = this.dropDownService.getEstadosBr();

    this.cargos = this.dropDownService.getCargos();

    this.tecnologias = this.dropDownService.getTecnologias();

    this.newsLetterOp = this.dropDownService.getNewsletter();
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values);
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

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });

    console.log(valueSubmit);

    if(this.formulario.valid){
      this.httpClient.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
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
