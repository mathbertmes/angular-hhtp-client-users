import { Component } from '@angular/core';
import { RestApiService } from "../rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  userData: any = {};
  id: string = "";

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];

    this.restApi.getUser(this.id)
        .subscribe((data: {}) => {
            this.userData = data;
        });
    
  }

  updateUser() {
    if (window.confirm('Are you sure, you want to update?')) {
        this.restApi.updateUser(this.id, this.userData)
            .subscribe(data => {
                this.router.navigate(['/user-list'])
            });
    }
  }
}
