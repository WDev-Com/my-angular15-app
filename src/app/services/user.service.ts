import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = 'https://localhost:5001/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  changeUserStatus(userId: number) {
    return this.http.put(`${this.baseUrl}/change-status/${userId}`, {});
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
}
