import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { SideNavToogle } from '../../models/sidenav/interfaces/side-nav-toggle.interface';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToogle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 767) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screeWidth: this.screenWidth,
      });
    }
  }

  toogleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screeWidth: this.screenWidth,
    });
  }
}
