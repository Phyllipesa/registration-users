import { NgModule } from '@angular/core';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidatorDirective } from './password-confirmation-validator.directive';



@NgModule({
  declarations: [
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective
  ],
  imports: [
  ],
  exports: [
    CredentialsValidatorDirective,
    EmailPatternValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidatorDirective
  ],
})
export class DirectivesModule { }
