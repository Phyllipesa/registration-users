import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true
    }
  ]
})
/**
 *  Directive to validate if the username or email is already in use
 * 
 *  @param propToCheck: 'username' | 'email'
 *  @returns ValidationErrors | null
 */
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propToCheck: 'username' | 'email' = 'username';

  constructor(
    private readonly _usersPlaceholderService: UsersPlaceholderService
  ) { }

  /**
   *  Validate if the username or email is already in use 
   *  by checking if the value is present in the users list
   *  and return an error if it is otherwise return null
   * 
   *  @param control: AbstractControl
   *  @returns ValidationErrors | null
   */
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService
    .getUsersPlaceholders()
    .pipe(
      map((usersListResponse) => {
        const hasUser =  usersListResponse.find(
          (user) => user[this.propToCheck].toLowerCase() === control.value.trim().toLowerCase());
        
        const validatorKey = this.propToCheck === 'username' ? 'invalidUsername' : 'invalidEmail'

        return hasUser ? { [validatorKey]: true } : null;
      })
    )
  }
}
