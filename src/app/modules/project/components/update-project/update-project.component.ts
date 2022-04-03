import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/Project.model ';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css'],
})
export class UpdateProjectComponent implements OnInit, OnDestroy{
  project: Project = new Project();

  subscription?: Subscription;

  ngOnDestroy()
  {
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }

  }

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private dataService: SharedDataService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProjectData();
  }

  getProjectData() {
    this.subscription =
    this.dataService.projectData.subscribe((response) => {
      this.project = response;
      this.changeDetectorRefs.detectChanges();
    });
  }

  onSubmit(formvalue: NgForm) {
    //this.project.Name = formvalue.form.value.projectName;
    //this.project.Detail = formvalue.form.value.projectDetails;
    this.projectService.updateProject(this.project);
    this.router.navigate(['/home/project']);
  }

  cancel() {
    this.router.navigate(['/home/project']);
  }
}
