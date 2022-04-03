import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  
  {path: 'show', component: ShowUsersComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'update/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
