import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  isSidebarOpen = false;

  // admin | user (replace with auth service later)
  userRole: 'admin' | 'user' = 'admin';

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
