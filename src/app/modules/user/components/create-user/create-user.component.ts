import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User;
  constructor(private router: Router, private userService: UserService,
    private changeDetectorRefs: ChangeDetectorRef) { }
  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/home/user']);
  }

  onSubmit(formvalue: any){
    this.user.FirstName = formvalue.firstName;
    this.user.LastName = formvalue.lastName;
    this.user.Email = formvalue.email;
    this.userService.saveUser(this.user);
    this.router.navigate(['/home/user']);
  }

}
