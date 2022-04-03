import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from 'src/app/models/Project.model ';
import { UserTask } from 'src/app/models/Task.model ';
import { User } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private loginSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userdataSource: BehaviorSubject<User> = new BehaviorSubject<User>(new User);
  private taskdataSource: BehaviorSubject<UserTask> = new BehaviorSubject<UserTask>(new UserTask);
  private projectdataSource: BehaviorSubject<Project> = new BehaviorSubject<Project>(new Project);
  private userListSource: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private projectListSource: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([]);
  private taskListSource: BehaviorSubject<UserTask[]> = new BehaviorSubject<UserTask[]>([]);
  
  loginData: Observable<string> = this.loginSource.asObservable();
  userData: Observable<User> = this.userdataSource.asObservable();
  taskData: Observable<UserTask> = this.taskdataSource.asObservable();
  projectData: Observable<Project> = this.projectdataSource.asObservable();
  userListData: Observable<User[]> = this.userListSource.asObservable();
  projectListData: Observable<Project[]> = this.projectListSource.asObservable();
  taskListData: Observable<UserTask[]> = this.taskListSource.asObservable();

  sendLoginData(loginData: string) {
    this.loginSource.next(loginData);
  }

  sendUserData(userData: User) {
    this.userdataSource.next(userData);
  }

  sendTaskData(taskData: UserTask) {
    this.taskdataSource.next(taskData);
  }

  sendProjectData(projectData: Project) {
    this.projectdataSource.next(projectData);
  }

  sendUserListData(userListData: User[]){
    this.userListSource.next(userListData);
  }

  sendProjectListData(projectListData: Project[]){
    this.projectListSource.next(projectListData);
  }

  sendTaskListData(taskListData: UserTask[]){
    this.taskListSource.next(taskListData);
  }
}
