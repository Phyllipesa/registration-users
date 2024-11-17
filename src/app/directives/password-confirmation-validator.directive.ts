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
/**
 *  Password confirmation validator directive
 * 
 *  This directive is used to checks if the password and password confirmation match 
 *  
 *  @param control: AbstractControl
 *  @returns {ValidationErrors | null} - Returns null if the password confirmation is valid,
 *    otherwise returns an object with the invalidPasswordConfirmation property set to true
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