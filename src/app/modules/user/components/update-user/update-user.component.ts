import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  subscription?: Subscription;
  
  constructor(private router: Router, private userService: UserService, 
    private dataService: SharedDataService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  user : User = new User;
  
  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.dataService.userData.subscribe(response => {
      this.user = response;
      this.changeDetectorRefs.detectChanges();
    });
  }

  onSubmit(formvalue: NgForm){
    this.userService.updateUser(this.user);
    this.router.navigate(['/home/user']);
  }
  
  cancel(){
    this.router.navigate(['/home/user']);
  }
}
