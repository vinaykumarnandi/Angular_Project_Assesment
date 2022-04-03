import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

const routes: Routes = [
  
  {path: 'show', component: ShowTasksComponent},
  {path: 'create', component: CreateTaskComponent},
  {path: 'update/:id', component: UpdateTaskComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
