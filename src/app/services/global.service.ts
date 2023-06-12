import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/models/user';
import { LocalService } from 'src/app/services/local.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  isUserLoggedIn: boolean ;
  private userSource= new BehaviorSubject<User>(new User());
  user = this.userSource.asObservable();

  constructor(private localStore: LocalService) {}
// ============================================================
  set me(user: User) {
    // localStorage.setItem('account', JSON.stringify(user));
    this.localStore.setItem('account', JSON.stringify(user));
    this.userSource.next(user);
  }
// ============================================================
  getAuthHeaders() {
    const token = this.localStore.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Token ' + token } ) ;
    return { headers: httpHeaders} ;
  }
// ============================================================
getAuthHeaders_for_files() {
  const token = this.localStore.getItem('token');
  // const httpHeaders = new HttpHeaders(
  //   {'Content-Type': 'application/json; charset=utf-8',
  //     'Authorization': 'Token ' + token } ) ;

  const httpHeaders = new HttpHeaders({
        "Accept": "*/*",
        "Authorization": 'Token ' + token,
      });

  return { headers: httpHeaders} ;
}
// ============================================================
  set userLoggedIn(indecator: boolean){
    this.isUserLoggedIn = indecator
  }
// ============================================================  
}
