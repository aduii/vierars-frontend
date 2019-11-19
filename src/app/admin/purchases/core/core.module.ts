import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form.component';
import { PurchaseTableComponent } from './components/purchase-table/purchase-table.component';

@NgModule({
  declarations: [
    PurchaseFormComponent,
    PurchaseTableComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    PurchaseFormComponent,
    PurchaseTableComponent
  ],
  entryComponents: [
    PurchaseFormComponent
  ]
})
export class CoreModule { }
