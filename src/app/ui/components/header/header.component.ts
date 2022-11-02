import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Nova admissão cooperado';
  name: string = 'viacredi';

  constructor() {}

  ngOnInit(): void {}
}
