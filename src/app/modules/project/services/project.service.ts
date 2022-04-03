import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { Project } from 'src/app/models/Project.model ';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProjectDetails(): Observable<Project[]> {
    return this.http.get<Project[]>(`http://localhost:28811/api/Project`);
  }

  saveProject(project: Project) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    };
    return this.http
      .post<Project>(`http://localhost:28811/api/Project`, project, { headers })
      .subscribe((data) => data);
  }

  updateProject(project: Project) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    };
    return this.http
      .put<Project>(
        `http://localhost:28811/api/Project?id=` + project.Id,
        project,
        { headers }
      )
      .subscribe((data) => data);
  }
}
