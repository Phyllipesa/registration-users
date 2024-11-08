import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GendersService } from './services/genders.service';
import { BrazilianStatesService } from './services/brazilian-states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: any = [];
  gendersList: any = [];
  statesList: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _gendersService: GendersService,
    private readonly _brazilianStatesService: BrazilianStatesService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getGenders();
    this.getStates();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((userListResponse) => this.usersList = userListResponse)
  }
  
  private getGenders() {
    this._gendersService.getGenders().subscribe((gendersListResponse) => this.gendersList = gendersListResponse)
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => this.statesList = statesListResponse)
  }
}
