import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { ShowProjectsComponent } from './components/show-projects/show-projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowProjectsComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
  ],
  exports: [
    ShowProjectsComponent,
    UpdateProjectComponent,
    CreateProjectComponent,
  ],
})
export class ProjectModule {}
