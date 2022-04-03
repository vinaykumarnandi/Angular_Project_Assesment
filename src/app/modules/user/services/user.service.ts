import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUserDetails(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:28811/api/User`);
    }

  saveUser(user: User){
    const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' };
    return this.http.post<User>(`http://localhost:28811/api/User`, user, { headers }).subscribe(data=> data);
  }

  updateUser(user: User){
    const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' };
    return this.http.put<User>(`http://localhost:28811/api/User?id=`+user.Id, user, { headers }).subscribe(data=> data);
  }
}
