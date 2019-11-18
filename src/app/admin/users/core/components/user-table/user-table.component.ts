import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../../../../core/models/user.model';

const ELEMENT_DATA: User[] = [
  {id: 1,  role: 'Usuario', name: 'Hydrogen', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 2,  role: 'Reciclador', name: 'Helium', lastName: 'Jimenez', email: 'email@gmail.com', status: true},
  {id: 3,  role: 'Usuario', name: 'Lithium', lastName: 'Monterrey', email: 'email@gmail.com', status: true},
  {id: 4,  role: 'Usuario', name: 'Beryllium', lastName: 'De la piedra', email: 'email@gmail.com', status: true},
  {id: 5,  role: 'Reciclador', name: 'Boron', lastName: 'Toribio', email: 'email@gmail.com', status: true},
  {id: 6,  role: 'Reciclador', name: 'Carbon', lastName: 'Caravedo', email: 'email@gmail.com', status: true},
  {id: 7,  role: 'Reciclador', name: 'Nitrogen', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 8,  role: 'Usuario', name: 'Oxygen', lastName: 'Liao', email: 'email@gmail.com', status: true},
  {id: 9,  role: 'Reciclador', name: 'Fluorine', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 10, role: 'Usuario', name: 'Neon', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 11, role: 'Reciclador', name: 'Sodium', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 12, role: 'Reciclador', name: 'Magnesium', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 13, role: 'Reciclador', name: 'Aluminum', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 14, role: 'Usuario', name: 'Silicon', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 15, role: 'Reciclador', name: 'Phosphorus', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 16, role: 'Reciclador', name: 'Sulfur', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 17, role: 'Usuario', name: 'Chlorine', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 18, role: 'Reciclador', name: 'Argon', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 19, role: 'Usuario', name: 'Potassium', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
  {id: 20, role: 'Reciclador', name: 'Calcium', lastName: 'Ruiz', email: 'email@gmail.com', status: true},
];

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'email', 'role', 'status', 'options'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
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
