import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTask } from 'src/app/models/Task.model ';
import { ProjectService } from 'src/app/modules/project/services/project.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TaskStatus } from 'src/app/models/TaskStatus.model';

interface StatusList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit, OnDestroy {
  task: UserTask = new UserTask();
  updatedtask: UserTask = new UserTask();
  projectList: any = [];
  userList: any = [];
  selectedUser: any;
  selectedProject: any;
  selectedStatus: any;
  //selectedStatusValue : any;
  detail: any;

  subscription?: Subscription;
  subscription2?: Subscription;
  subscription3?: Subscription;

  taskStatus : TaskStatus = new TaskStatus();

  taskStatusList: TaskStatus[] = [
    {statusId: 1, statusDescription: "Progress"},
    {statusId: 2, statusDescription: "Finished"},
    {statusId: 3, statusDescription: "Delivered"},
    {statusId: 4, statusDescription: "On Hold"},
    {statusId: 5, statusDescription: "Cancelled"}
  ];

  constructor(
    private router: Router,
    private dataService: SharedDataService,
    private taskService: TaskService,
    private projectService: ProjectService,
    private userService: UserService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getTaskData();
    this.subscription2 = 
    this.dataService.projectListData.subscribe(
      (response) => {
        this.projectList = response;
      }
    );
    this.subscription3 = 
    this.dataService.userListData.subscribe((response) => {
      this.userList = response;
    });

    this.changeDetectorRefs.detectChanges();
  }
  
  getTaskData() {
    this.subscription = 
    this.dataService.taskData.subscribe((response) => {
      this.task = response;
      this.selectedUser = this.task.AssignedToUserID;
      this.selectedProject = this.task.ProjectID;
      this.selectedStatus = this.task.Status;
      this.detail = this.task.Detail;
      this.changeDetectorRefs.detectChanges();
    });
  }

  onSubmit(formvalue: NgForm) {
    this.updatedtask.Id = this.task.Id;
    this.updatedtask.AssignedToUserID = this.selectedUser;
    this.updatedtask.ProjectID = this.selectedProject;
    this.updatedtask.Status = this.selectedStatus;
    this.updatedtask.Detail = this.detail;
    this.updatedtask.CreatedOn = this.task.CreatedOn;
    this.taskService.updateTask(this.updatedtask);
    this.router.navigate(['/home/task']);
  }

  cancel() {
    this.router.navigate(['/home/task']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
  }
}
