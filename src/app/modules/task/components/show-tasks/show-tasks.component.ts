import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/Project.model ';
import { UserTask } from 'src/app/models/Task.model ';
import { TaskStatus } from 'src/app/models/TaskStatus.model';
import { User } from 'src/app/models/User.model';
import { ProjectService } from 'src/app/modules/project/services/project.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css'],
})
export class ShowTasksComponent implements OnInit, OnChanges {
  tasks: UserTask[] = [];
  updateTaskData = new UserTask();

  projectList: Project[] = [];
  userList: User[] = [];
  

  subscription?: Subscription;
  subscription2?: Subscription;
  subscription3?: Subscription;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private dataService: SharedDataService,
    private userService: UserService,
    private projectService: ProjectService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  displayedColumns: string[] = [
    'id',
    'projectId',
    'status',
    'assignedToUserId',
    'detail',
    'createdOn',
  ];

  ngOnInit() {
    this.getUserAndProjectList();
    this.getAllTasks();
  }

  addTask() {
    this.router.navigate(['/home/task/create']);
  }

  ngOnChanges() {}

  getAllTasks() {
    this.taskService.getAllTaskDetails().subscribe((data) => {
      this.tasks = data;
      this.dataService.sendTaskListData(this.tasks);
      this.changeDetectorRefs.detectChanges();
    });
    
  }

  getUserAndProjectList() {
    //this.subscription2 =
    this.projectService.getAllProjectDetails().subscribe((data) => {
      this.projectList = data;
      this.dataService.sendProjectListData(this.projectList);
      this.changeDetectorRefs.detectChanges();
    });

    //this.subscription3 =
    this.userService.getAllUserDetails().subscribe((data) => {
      this.userList = data;
      this.dataService.sendUserListData(this.userList);
      this.changeDetectorRefs.detectChanges();
    });

  }

  updateSelectedTaskRows(rowData: any) {
    this.updateTaskData.Id = rowData.id;
    this.updateTaskData.AssignedToUserID = rowData.assignedToUserId;
    this.updateTaskData.CreatedOn = rowData.createdOn;
    this.updateTaskData.Detail = rowData.detail;
    this.updateTaskData.ProjectID = rowData.projectId;
    this.updateTaskData.Status = rowData.status;
    this.dataService.sendTaskData(this.updateTaskData);
    this.router.navigate(['/home/task/update/' + rowData.id]);
  }

  ngOnDestroy(): void {
    this.changeDetectorRefs.detectChanges();
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
