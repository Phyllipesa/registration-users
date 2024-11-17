import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailPatternValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailPatternValidatorDirective,
      multi: true
    }
  ]
})
/**
 *  Email pattern validator directive
 * 
 *  This directive is used to validate the email
 *  It uses a regular expression to validate the email pattern
 * 
 *  @param control: AbstractControl
 *  @returns {ValidationErrors | null} - Returns null if the email is valid,
 *  otherwise returns an object with the invalidEmailPattern property set to true
 */
export class EmailPatternValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(control.value);
    return isValid ? null : { 'invalidEmailPattern': true };
  }
}
