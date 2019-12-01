import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { RecyclableMaterialFormComponent } from './components/recyclable-material-form/recyclable-material-form.component';
import { RecyclableMaterialTableComponent } from './components/recyclable-material-table/recyclable-material-table.component';
import { RecyclableMaterialDetailComponent } from './components/recyclable-material-detail/recyclable-material-detail.component';
import { RecyclableMaterialPurchaseComponent } from './components/recyclable-material-purchase/recyclable-material-purchase.component';

@NgModule({
  declarations: [
    RecyclableMaterialFormComponent,
    RecyclableMaterialTableComponent,
    RecyclableMaterialDetailComponent,
    RecyclableMaterialPurchaseComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    AppSharedModule
  ],
  exports: [
    RecyclableMaterialFormComponent,
    RecyclableMaterialTableComponent,
    RecyclableMaterialDetailComponent
  ],
  entryComponents: [
    RecyclableMaterialFormComponent,
    RecyclableMaterialPurchaseComponent
  ]
})
export class CoreModule { }
