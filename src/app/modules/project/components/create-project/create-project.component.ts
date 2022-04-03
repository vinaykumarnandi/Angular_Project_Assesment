import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project.model ';
import { ProjectService } from '../../services/project.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  project: Project = new Project();

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {}

  onSubmit(formvalue: any) {
    this.project.Name = formvalue.projectName;
    this.project.Detail = formvalue.projectDetails;
    this.projectService.saveProject(this.project);
    this.router.navigate(['/home/project']);
  }

  cancel() {
    this.router.navigate(['/home/project']);
  }
}
