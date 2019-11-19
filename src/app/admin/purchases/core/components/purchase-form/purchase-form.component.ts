import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {
  public purchaseFG: FormGroup;
  public purchaseId: number;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  reset(){
    this.purchaseFG = this.fb.group({
      id: [],
      date: ['',[Validators.required]],
      paymentType: ['',[Validators.required]],
      amount: ['',[Validators.required]],
      recyclableMaterialId: ['',[Validators.required]],
      status: []
    });
    this.purchaseId = null;
  }

  ngOnInit() {
    this.reset();
    this.route.params.subscribe((params: Params) => {
      this.purchaseId = params.id;
      if(this.purchaseId) this.getPurchase();
    });
  }

  getPurchase(){
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
    if(this.purchaseFG.valid){
      let purchase: any = Object.assign({},this.purchaseFG.value);
      let request: Observable<any>;

      if(!purchase.id){
        //request = this.userService.createUser(user)
      } else {
        //request = this.userService.updateUser(user)
      }

      request.subscribe(
        (response: any)=>{
          if (!purchase.id) console.log('refresh list');
          if (purchase.id) this.router.navigate(['/purchases']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.purchaseFG.value);
    }
  }
}
