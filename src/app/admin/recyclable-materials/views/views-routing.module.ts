import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecyclableMaterialListViewComponent } from './recyclable-material-list-view/recyclable-material-list-view.component';
import { EditRecyclableMaterialViewComponent } from './edit-recyclable-material-view/edit-recyclable-material-view.component';

const routes: Routes = [
  {
    path: '',
    component: RecyclableMaterialListViewComponent
  },
  {
    path: 'edit/:id',
    component: EditRecyclableMaterialViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
