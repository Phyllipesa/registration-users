import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true
    }
  ]
})
/*
  A diretiva é adicionada ao Formulário e não ao item do formulário, pois o item do formulário
  não possui acesso ao valor do outro item do formulário.
  A diretiva é adicionada ao Formulário para que possa acessar os valores dos itens do formulário
  e realizar a validação.
*/
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {

    if (!control.value.confirmacaoSenha) return null;

    const passwordConfirmationControl = control.get('confirmacaoSenha');

    if (control.value.senha !== control.value.confirmacaoSenha) {
      passwordConfirmationControl?.setErrors({ 'invalidPasswordConfirmation': true });
      return { 'invalidPasswordConfirmation': true };
    }

    return null;
  }
}