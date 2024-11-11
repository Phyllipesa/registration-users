import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { StatesListResponse } from '../../types/states-list-response';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
passwordStrenghtValue = 0;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrenghtValue = getPasswordStrengthValue(password);
  }
}
