import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { MaterialService } from './material.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiService,
    UserService,
    AuthService,
    MaterialService
  ]
})
export class ServicesModule { }
