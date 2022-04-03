import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ShowTasksComponent } from './components/show-tasks/show-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShowTasksComponent,
    UpdateTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[
    ShowTasksComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ]
})
export class TaskModule { }
