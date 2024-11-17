import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidatorDirective,
      multi: true
    }
  ]
})
/**
 *  Password strength validator directive
 * 
 *  This directive is used to validate the password strength.
 *  It uses the zxcvbn library to validate the password strength.
 * 
 *  @param control: AbstractControl
 *  @returns {ValidationErrors | null} - Returns null if the password strength is valid,
 *  otherwise returns an object with the invalidPasswordStrenght property set to true
 */
export class PasswordStrengthValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;

    const result = zxcvbn(control.value);
    const PASSWORD_IS_WEAK_OR_MEDIUM = result.score !== 4;

    if (PASSWORD_IS_WEAK_OR_MEDIUM) {
      return { 'invalidPasswordStrenght': true };
    }
    return null;
  }
}
