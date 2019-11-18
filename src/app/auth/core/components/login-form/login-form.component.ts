import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;
  public loading: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  reset(){
    this.loading = false;
    this.loginFG = this.fb.group({
      role: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }
  onLogin(){
    const userLogged = Object.assign({}, this.loginFG.value);
    localStorage.setItem('userLogged', JSON.stringify(userLogged));
    if(this.loginFG.valid) this.router.navigateByUrl('/');
    //delete up
    if(this.loginFG.valid){
      const loginRequest = {
        code: this.loginFG.value.code,
        email: this.loginFG.value.email,
        password: this.loginFG.value.password
      }

      this.loading = true;
      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            //localStorage.setItem('userLogged', JSON.stringify(response.data));
            this.router.navigateByUrl('/');
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
