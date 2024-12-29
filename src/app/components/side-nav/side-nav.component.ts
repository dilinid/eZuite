import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserTableComponent } from "../user-table/user-table.component";

@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule, MatListModule, MatSidenavModule, UserTableComponent], 
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

}
