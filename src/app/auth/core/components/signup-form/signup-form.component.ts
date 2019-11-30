import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;
  public loading: boolean;
  public distritos: any[];

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router,) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      tipo: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      districtId: ['',[Validators.required]],
    });
    this.distritos = [];
  }

  getDistritos(){
    this.authService.getDistricts().subscribe(
      (response: any) =>{
        this.distritos = response;
        console.log('distri', this.distritos);
      }
    );
  }

  ngOnInit() {
    this.reset();
    this.getDistritos();
  }

  onSignup(){
    if(this.signupFG.valid){
      const signupRequest = Object.assign({}, this.signupFG.value);
      this.loading = true;
      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            this.router.navigateByUrl('/auth');
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
