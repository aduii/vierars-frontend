import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;
  public loading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  reset(){
    this.loading = false;
    this.loginFG = this.fb.group({
      username: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }
  onLogin(){
    if(this.loginFG.valid){
      const loginRequest = Object.assign({}, this.loginFG.value);
      this.loading = true;
      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            if(response){
              localStorage.setItem('userLogged', JSON.stringify(response));
              this.router.navigateByUrl('/');
              this._snackBar.open('Bienvenido! 😊', '', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            } else {
              this._snackBar.open('Usuario no encontrado :(', '', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            }
            this.loading = false;
          },
          (error: any) => {
            this.loading = false;
          }
        );
    } else{
     console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
