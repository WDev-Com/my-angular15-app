import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Output() toggleSidebar = new EventEmitter<void>();

  role: 'admin' | 'user' = 'admin';

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout() {
    console.log('Logout clicked');
    // call auth service later
  }
}
