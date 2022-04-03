import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from '../user/user.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component: LoginLayoutComponent},
  { path: 'home', component: HomeLayoutComponent,
      children:[
        {path: 'user', loadChildren: () => import('../user/user.module').then(m=> m.UserModule) },
        {path: 'project', loadChildren: () => import('../project/project.module').then(m=> m.ProjectModule) },
        {path: 'task', loadChildren: () => import('../task/task.module').then(m=> m.TaskModule) }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
