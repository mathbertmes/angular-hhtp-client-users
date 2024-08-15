import { Component, Input } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  @Input() userDetails = { name: '', email: '', password: '' };
    
    constructor(public restApi: RestApiService,
        public router: Router) {}
    ngOnInit() {}
    addUser(dataUser: any) {
        this.restApi.createUser(this.userDetails)
            .subscribe((data: {}) => {
                this.router.navigate(['/user-list']);
            });
    }
}
