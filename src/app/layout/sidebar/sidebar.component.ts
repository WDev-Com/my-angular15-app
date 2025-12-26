import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() isOpen = false;
  @Input() role: 'admin' | 'user' = 'user';

   logout() {
    console.log('Logout clicked from sidebar');
    // later: authService.logout()
  }
}
