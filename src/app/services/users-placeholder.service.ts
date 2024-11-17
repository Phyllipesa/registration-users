import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderListResponse } from '../types/users-placeholder-list-response';

@Injectable({
  providedIn: 'root'
})
/**
 *  @description Service to get the list of users from the placeholder API
 */
export class UsersPlaceholderService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  /**
   *  getUsersPlaceholders - Get the list of users from the placeholder API
   * 
   * @returns Observable<UsersPlaceholderListResponse> - Observable with the list of users
   */
  getUsersPlaceholders(): Observable<UsersPlaceholderListResponse> {
    return this._httpClient.get<UsersPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users');
  }
}
