import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './modules/layout/components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './modules/layout/components/login-layout/login-layout.component';
import { MainContentComponent } from './modules/layout/components/main-content/main-content.component';
import { ShowProjectsComponent } from './modules/project/components/show-projects/show-projects.component';
import { ShowTasksComponent } from './modules/task/components/show-tasks/show-tasks.component';
import { ShowUsersComponent } from './modules/user/components/show-users/show-users.component';

const routes: Routes = [
  { path:'', component : LoginLayoutComponent},
  { path: 'home', component: HomeLayoutComponent,
    children:[
      {path:'', redirectTo:'/home/user', pathMatch: 'full'},
      { path:'user', component:ShowUsersComponent},
      { path:'project', component:ShowProjectsComponent},
      { path:'task', component:ShowTasksComponent}
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
