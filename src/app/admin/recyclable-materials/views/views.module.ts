import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { EditRecyclableMaterialViewComponent } from './edit-recyclable-material-view/edit-recyclable-material-view.component';
import { RecyclableMaterialListViewComponent } from './recyclable-material-list-view/recyclable-material-list-view.component';
import { DetailRecyclableMaterialViewComponent } from './detail-recyclable-material-view/detail-recyclable-material-view.component';


@NgModule({
  declarations: [
    EditRecyclableMaterialViewComponent,
    RecyclableMaterialListViewComponent,
    DetailRecyclableMaterialViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
