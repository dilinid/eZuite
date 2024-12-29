import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { tableData } from '../../../assets/data.json';
import { TabGroupComponent } from "../tab-group/tab-group.component";


@Component({
  selector: 'app-user-table',
  imports: [TableModule, TabGroupComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})

export class UserTableComponent {
  displayedColumns: string[] = [
    'first_name', 
    'last_name', 
    'address', 
    'mobile', 
    'email', 
    'department', 
    'designation', 
    'updated' ,
    'number'
  ];

  dataSource = tableData;
}