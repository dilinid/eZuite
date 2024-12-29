import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from "./components/title-bar/title-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";

@Component({
  selector: 'app-root',
  imports: [ TitleBarComponent, FooterComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eZuite';
}
