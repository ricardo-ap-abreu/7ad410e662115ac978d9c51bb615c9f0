import { Component, OnInit } from '@angular/core';
import { SideNavToogle } from '../../models/sidenav/interfaces/side-nav-toggle.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  value: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  hasSocialNumber(value: any) {
    this.value = value;
  }

  goToAdmission(): void {}
}
