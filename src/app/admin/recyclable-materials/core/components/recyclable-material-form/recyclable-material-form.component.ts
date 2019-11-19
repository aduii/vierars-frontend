import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'recyclable-material-form',
  templateUrl: './recyclable-material-form.component.html',
  styleUrls: ['./recyclable-material-form.component.scss']
})
export class RecyclableMaterialFormComponent implements OnInit {
  public recyclableMaterialFG: FormGroup;
  public recyclableMaterialId: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  reset(){
    this.recyclableMaterialFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      weight: ['',[Validators.required]],
      price: ['',[Validators.required]],
      status: []
    });
    this.recyclableMaterialId = null;
  }


  ngOnInit() {
    this.reset();
    this.route.params.subscribe((params: Params) => {
      this.recyclableMaterialId = params.id;
      if(this.recyclableMaterialId) this.getRecyclableMaterial();
    });
  }

  getRecyclableMaterial(){
    /* this.userService.getUserById(this.userId).subscribe(
      (response: any)=>{
        this.userFG.patchValue(response.data);
      },
      (error: any)=>{
        console.log('error', error);
      }
    ) */
  }

  onSubmit(){
    if(this.recyclableMaterialFG.valid){
      let recyclableMaterial: any = Object.assign({},this.recyclableMaterialFG.value);
      let request: Observable<any>;

      if(!recyclableMaterial.id){
        //request = this.userService.createUser(user)
      } else {
        //request = this.userService.updateUser(user)
      }

      request.subscribe(
        (response: any)=>{
          if (!recyclableMaterial.id) console.log('refresh list');
          if (recyclableMaterial.id) this.router.navigate(['/recyclable-materials']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.recyclableMaterialFG.value);
    }
  }
}
