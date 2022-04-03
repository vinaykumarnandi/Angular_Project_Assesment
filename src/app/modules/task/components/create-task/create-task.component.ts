import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/Project.model ';
import { UserTask } from 'src/app/models/Task.model ';
import { TaskStatus } from 'src/app/models/TaskStatus.model';
import { User } from 'src/app/models/User.model';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { TaskService } from '../../services/task.service';

// interface StatusList {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit, OnDestroy{
  task: UserTask = new UserTask();
  taskStatus : TaskStatus = new TaskStatus();

  taskStatusList: TaskStatus[] = [
    {statusId: 1, statusDescription: "Progress"},
    {statusId: 2, statusDescription: "Finished"},
    {statusId: 3, statusDescription: "Delivered"},
    {statusId: 4, statusDescription: "On Hold"},
    {statusId: 5, statusDescription: "Cancelled"}
  ];
  
  projectList: any = [];
  userList: any = [];
  selectedUser: any;
  selectedProject: any;
  selectedStatus: any;

  subscription1?: Subscription;
  subscription2?: Subscription;

  ngOnDestroy(): void {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }

  // statusList: StatusList[] = [
  //   { value: '1', viewValue: 'Progress' },
  //   { value: '2', viewValue: 'Finished' },
  //   { value: '3', viewValue: 'Delivered' },
  //   { value: '4', viewValue: 'On Hold' },
  //   { value: '5', viewValue: 'Cancelled' },
  // ];

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataService: SharedDataService,
    private changeDetectorRefs : ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.subscription1 = 
    this.dataService.projectListData.subscribe((response) => {
        this.projectList = response;
      });
    this.subscription2 = 
    this.dataService.userListData.subscribe((response) => {
      this.userList = response;
    });
    this.changeDetectorRefs.detectChanges();
  }

  onSubmit(formvalue: any) {
    this.task.AssignedToUserID = formvalue.selectedUserOption;
    this.task.ProjectID = formvalue.selectedProjectOption;
    this.task.Detail = formvalue.detail;
    this.task.Status = formvalue.selectedStatusOption;
    this.taskService.saveTask(this.task);
    this.router.navigate(['/home/task']);
  }

  cancel() {
    this.router.navigate(['/home/task']);
  }
}
