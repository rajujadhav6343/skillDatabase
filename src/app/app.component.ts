import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Search by Compentency',
      url: '/folder/Compentency',
      icon: 'ribbon',
    },
    { title: 'Search by Role', url: '/folder/Role', icon: 'bulb' },
    { title: 'Search by Employee', url: '/folder/Employee', icon: 'person' },
    {
      title: 'Advanced Search',
      url: '/folder/advanced Search',
      icon: 'search',
    },
    { title: 'Add Compentency', url: '/folder/Add Compentency', icon: 'add' },
  ];

  constructor() {}
}
