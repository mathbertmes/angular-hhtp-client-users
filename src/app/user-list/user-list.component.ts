import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  Users: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    return this.restApi.getUsers()
        .subscribe((data: {}) => {
            this.Users = data;
        });
  }
  deleteUser(id: any) {
    // Alert for the user to confirm the action.
    if (window.confirm('Are you sure, you want to delete?')) {
        this.restApi.deleteUser(id)
            .subscribe(data => {
                // After deleting a user,
                // load again the list.
                this.loadUsers();
            });
    }
  }
}
