import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseListViewComponent } from './purchase-list-view/purchase-list-view.component';
import { EditPurchaseViewComponent } from './edit-purchase-view/edit-purchase-view.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditPurchaseViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
