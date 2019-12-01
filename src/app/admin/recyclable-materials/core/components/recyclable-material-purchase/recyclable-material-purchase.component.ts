import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialService } from 'src/app/core/services/material.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recyclable-material-purchase',
  templateUrl: './recyclable-material-purchase.component.html',
  styleUrls: ['./recyclable-material-purchase.component.scss']
})
export class RecyclableMaterialPurchaseComponent implements OnInit {
  public purchaseFG: FormGroup;
  public material: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private materialService: MaterialService,
    public dialogRef: MatDialogRef<RecyclableMaterialPurchaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.material = data.info;
  }

  reset(){
    this.purchaseFG = this.fb.group({
      fecha: ['',[Validators.required]],
      tipo_de_pago: ['',[Validators.required]],
      monto_total: ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.reset();
  }

  onSubmit(){
    if(this.purchaseFG.valid){
      let purchase: any = Object.assign({},this.purchaseFG.value);
      let data = {
        userId: this.material.usuario.idUsuario,
        materialId : this.material.idMaterialRreciclado
      }
      this.materialService.createPurchase(purchase, data).subscribe(
        (response: any)=>{
          this.router.navigate(['/purchases']);
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
