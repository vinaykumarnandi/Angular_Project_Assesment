import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project.model ';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css'],
})
export class ShowProjectsComponent implements OnInit {
  projects: Project[] = [];
  updateProjectData = new Project();

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private dataService: SharedDataService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  displayedColumns: string[] = [
    'id',
    'projectName',
    'projectDetails',
    'createdOn',
  ];

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjectDetails().subscribe((data) => {
      this.projects = data;
      this.dataService.sendProjectListData(this.projects);
      this.changeDetectorRefs.detectChanges();
    });
  }

  addProject() {
    this.router.navigate(['/home/project/create']);
  }

  updateSelectedProjectRows(rowData: any) {
    this.updateProjectData.Id = rowData.id;
    this.updateProjectData.Name = rowData.name;
    this.updateProjectData.CreatedOn = rowData.createdOn;
    this.updateProjectData.Detail = rowData.detail;
    this.dataService.sendProjectData(this.updateProjectData);
    this.router.navigate(['/home/project/update/' + rowData.id]);
  }
}
