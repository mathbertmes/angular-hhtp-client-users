import { Routes } from '@angular/router';
import { UserCreateComponent } from
    './user-create/user-create.component';
import { UserEditComponent } from
    './user-edit/user-edit.component';
import { UserListComponent } from
    './user-list/user-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-create' },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
];
