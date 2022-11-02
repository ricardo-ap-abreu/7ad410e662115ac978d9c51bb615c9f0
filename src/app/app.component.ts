import { Component } from '@angular/core';
import { SideNavToogle } from './ui/models/sidenav/interfaces/side-nav-toggle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ailos';

  public isSideNavCollapsed = false;
  public screenWidth = 0;

  onToggleSideNav(data: SideNavToogle): void {
    this.screenWidth = data.screeWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
