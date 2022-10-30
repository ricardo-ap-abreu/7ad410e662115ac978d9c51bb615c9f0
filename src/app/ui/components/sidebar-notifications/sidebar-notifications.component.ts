import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar-notifications',
  templateUrl: './sidebar-notifications.component.html',
  styleUrls: ['./sidebar-notifications.component.scss'],
})
export class SidebarNotificationsComponent implements OnInit {
  items = this._formBuilder.group({
    know: false,
    about: false,
    documentation: false,
  });

  showFiller = false;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
