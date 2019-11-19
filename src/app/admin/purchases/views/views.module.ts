import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { PurchaseListViewComponent } from './purchase-list-view/purchase-list-view.component';
import { EditPurchaseViewComponent } from './edit-purchase-view/edit-purchase-view.component';


@NgModule({
  declarations: [
    PurchaseListViewComponent,
    EditPurchaseViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
