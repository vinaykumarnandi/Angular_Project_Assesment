import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
})
export class ShowUsersComponent implements OnInit{
  users: User[] = [];
  updateUserData = new User();

  constructor(
    private router: Router,
    private projectService: UserService,
    private dataService: SharedDataService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];

  ngOnInit() {
    this.getAllUsers();
  }

  addUser() {
    this.router.navigate(['/home/user/create']);
  }

  getAllUsers() {
    this.projectService.getAllUserDetails().subscribe((data) => {
      this.users = data;
       this.dataService.sendUserListData(this.users);
       this.changeDetectorRefs.detectChanges();
    });
  }

  updateSelectedUserRows(rowData: any) {
    this.updateUserData.Id = rowData.id;
    this.updateUserData.FirstName = rowData.firstName;
    this.updateUserData.LastName = rowData.lastName;
    this.updateUserData.Email = rowData.email;
    this.dataService.sendUserData(this.updateUserData);
    this.router.navigate(['/home/user/update/' + rowData.id]);
  }
}
