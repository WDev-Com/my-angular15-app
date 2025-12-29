import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  /*
  ngOnInit(): void {
    this.loadUsers();
  }*/
  ngOnInit(): void {
     this.users = [
      {
        userID: 1,
        username: 'Rushikesh',
        email: 'rushikesh@gmail.com',
        contactNumber: '9876543210',
        address: 'Pune, Maharashtra',
        role: 'ADMIN',
        userStatus: 'Active'
      },
      {
        userID: 2,
        username: 'Amit',
        email: 'amit@gmail.com',
        contactNumber: '9123456780',
        address: 'Mumbai',
        role: 'USER',
        userStatus: 'Active'
      },
      {
        userID: 3,
        username: 'Sneha',
        email: 'sneha@gmail.com',
        contactNumber: '9988776655',
        address: 'Nagpur',
        role: 'USER',
        userStatus: 'Inactive'
      }
    ];
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => this.users = res,
      error: (err) => console.error(err)
    });
  }

  changeStatus(user: User) {
    if (user.role.toUpperCase() === 'ADMIN') return;

    this.userService.changeUserStatus(user.userID).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(user: User) {
    if (user.role.toUpperCase() === 'ADMIN') return;

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(user.userID).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  isAdmin(user: User): boolean {
    return user.role?.toUpperCase() === 'ADMIN';
  }
}
