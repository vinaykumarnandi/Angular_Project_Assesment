import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTask } from 'src/app/models/Task.model ';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTaskDetails(): Observable<UserTask[]> {
    return this.http.get<UserTask[]>(`http://localhost:28811/api/UserTask`);
  }

  saveTask(task: UserTask) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    };
    return this.http
      .post<UserTask>(`http://localhost:28811/api/UserTask`, task, { headers })
      .subscribe((data) => data);
  }

  updateTask(task: UserTask) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    };
    return this.http
      .put<UserTask>(
        `http://localhost:28811/api/UserTask?id=` + task.Id,
        task,
        { headers }
      )
      .subscribe((data) => data);
  }
}
