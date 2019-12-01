import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule as AppCoreModule } from '../../../core/core.module';
import { SharedModule as AppSharedModule } from '../../../shared/shared.module';
import { RecyclableMaterialFormComponent } from './components/recyclable-material-form/recyclable-material-form.component';
import { RecyclableMaterialTableComponent } from './components/recyclable-material-table/recyclable-material-table.component';
import { RecyclableMaterialDetailComponent } from './components/recyclable-material-detail/recyclable-material-detail.component';

@NgModule({
  declarations: [
    RecyclableMaterialFormComponent,
    RecyclableMaterialTableComponent,
    RecyclableMaterialDetailComponent
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
    RecyclableMaterialFormComponent
  ]
})
export class CoreModule { }
