import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ShowProjectsComponent } from './components/show-projects/show-projects.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';

const routes: Routes = [
  { path: 'show', component: ShowProjectsComponent },
  { path: 'create', component: CreateProjectComponent },
  { path: 'update/:id', component: UpdateProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
