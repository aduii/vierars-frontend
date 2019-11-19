import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('src/app/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'recyclable-materials',
        loadChildren:() => import('src/app/admin/recyclable-materials/recyclable-materials.module').then(m => m.RecyclableMaterialsModule)
      },
      {
        path: 'purchases',
        loadChildren:() => import('src/app/admin/purchases/purchases.module').then(m => m.PurchasesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
