import { Component, OnInit } from '@angular/core';
import { SideNavToogle } from '../../models/sidenav/interfaces/side-nav-toggle.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hasSocialNumber(): boolean {
    return false;
  }

  goToAdmission(): void {
    console.log('teste');
  }
}
