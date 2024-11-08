import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: any = [];

  constructor(
    private readonly _userService: UsersService
  ) {}

  ngOnInit() {
    this._userService.getUsers().subscribe((userListResponse) => this.usersList= userListResponse)
  }
}
