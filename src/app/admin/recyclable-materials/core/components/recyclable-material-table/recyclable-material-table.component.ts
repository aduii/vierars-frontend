import { Component, OnInit, ViewChild } from '@angular/core';
import { RecyclableMaterialFormComponent } from '../recyclable-material-form/recyclable-material-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialService } from 'src/app/core/services/material.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'recyclable-material-table',
  templateUrl: './recyclable-material-table.component.html',
  styleUrls: ['./recyclable-material-table.component.scss']
})
export class RecyclableMaterialTableComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'peso', 'precio', 'options'];
  dataSource = new MatTableDataSource<User>();
  user: User;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private materialService: MaterialService
  ) {
    this.materialService.listenerRefreshList()
    .subscribe( status => {
      if(status) this.getMaterials();
    })
  }

  getMaterials(){
    this.user = JSON.parse(localStorage.getItem('userLogged'));
    let request: Observable<any>;

    if(this.user.tipo == 0){
      request = this.materialService.geMaterialsByUser()
    } else {
      request = this.materialService.geMaterialsByRecycler()
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
    this.getMaterials();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RecyclableMaterialFormComponent, {
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
