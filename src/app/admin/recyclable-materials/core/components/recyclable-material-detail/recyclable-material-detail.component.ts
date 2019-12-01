import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'recyclable-material-detail',
  templateUrl: './recyclable-material-detail.component.html',
  styleUrls: ['./recyclable-material-detail.component.scss']
})
export class RecyclableMaterialDetailComponent implements OnInit {
  public recyclableMaterial: any;
  public recyclableMaterialId: number;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recyclableMaterialId = params.id;
      if(this.recyclableMaterialId) this.getRecyclableMaterial();
    });
  }

  getRecyclableMaterial(){
    this.materialService.getMaterialById(this.recyclableMaterialId).subscribe(
      (response: any)=>{
        this.recyclableMaterial = response;
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

}
