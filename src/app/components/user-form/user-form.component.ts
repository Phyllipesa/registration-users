import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { StatesListResponse } from '../../types/states-list-response';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
}
