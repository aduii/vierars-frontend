import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseFormComponent } from '../purchase-form/purchase-form.component';
import { MaterialService } from 'src/app/core/services/material.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss']
})
export class PurchaseTableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fecha', 'tipo', 'monto'];
  dataSource = new MatTableDataSource<User>();
  user: User;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private materialService: MaterialService
  ) {}

  getData(){
    this.user = JSON.parse(localStorage.getItem('userLogged'));
    let request: Observable<any>;

    if(this.user.tipo == 0){
      request = this.materialService.getSales();
    } else {
      request = this.materialService.getPurchases();
    }

    request.subscribe(
      (response: any)=>{
        this.dataSource = response;
        this.dataSource.paginator = this.paginator;
      },
      (error: any)=>{
        console.log('error', error);
      }
    );
  }

  ngOnInit() {
    this.getData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PurchaseFormComponent, {
      width: '50%',
      data: {
        type: 'create',
        info: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }
}
