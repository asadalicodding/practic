import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  list = [
    {
      name: 'Dashboard',
      path: '/dashboard'
    },
    {
      name: 'ADD',
      path: '/add/addDocument'
    },
    {
      name: 'Display',
      path: '/display'
    }
  ]
}
