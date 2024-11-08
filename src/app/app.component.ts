import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GendersService } from './services/genders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: any = [];
  gendersList: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _gendersService: GendersService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getGenders();
  }
  
  private getUsers() {
    this._usersService.getUsers().subscribe((userListResponse) => this.usersList = userListResponse)
    
  }
  
  private getGenders() {
    this._gendersService.getGenders().subscribe((gendersListResponse) => this.gendersList = gendersListResponse)
  }
}
