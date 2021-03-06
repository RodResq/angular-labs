import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

export class FormValidation {

  static requiredMinCheckbobx( min= 1) {
    const validator = (formArray: FormArray) => {
      /*const values = formArray.controls;
      let totalChecked = 0;
      for(let i = 0; i < values.length; i++) {
        if(values[i].value) {
          totalChecked += 1;
        }
      }*/
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    }
    return validator;
  }

  static cepValidators(control: FormControl) {
    const cep = control.value;

    if(cep && cep != ''){
      let validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null: { cepInvalido: true};
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if(otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if(!formControl.root || !(<FormGroup>formControl.root).get(otherField)){
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if(!field) {
        throw new Error('É necess[ario informar um campo válido.');
      }

      if(field.value !== formControl.value) {
        return {equalsTo: otherField};
      }

      return null;
    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatorio`,
      'minlength': `${fieldName} precisa ter no minio ${validatorValue.requiredLength} caracteres`,
      'maxlength': `${fieldName} precisa ter no minio ${validatorValue.requiredLength} caracteres`,
      'cepInvalido': 'CEP invalido.'
    };
    return config[validatorName];
  }
}
