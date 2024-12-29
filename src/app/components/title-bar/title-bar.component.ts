import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';

@Component({
  selector: 'app-title-bar',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {

}
