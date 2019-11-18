import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  createUser(request: any) {
    return this.apiService.post('api/user', request);
  }

  updateUser(request: any) {
    return this.apiService.put('api/user', request);
  }

  getUsers() {
    return this.apiService.get('api/user/all');
  }

  getUserById(userId: number) {
    return this.apiService.get(`api/user/byId/${userId}`);
  }
}
