import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { User } from 'src/app/models/user';
import { oneUser } from 'src/app/models/userForEdit';
import { ApiConstant } from 'src/app/constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders_auth = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
  baseUrl: string = new ApiConstant().api_Ip;
  secondBaseUrl: string = new ApiConstant().api_constant;

  constructor(private http: HttpClient,
              private globalServ: GlobalService) { }
  // ==================================================================
  resetPassword(curEmail: any): Observable<any> {
    console.log('------Check--***--in Service---Email', curEmail);
    return this.http.post(this.baseUrl + this.secondBaseUrl + 'password/reset/', curEmail);
  }
  // ==================================================================
  login(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users/authenticate/' , {username:userData.value['username'], password:userData.value['password']} );
    // return this.http.post(this.baseUrl + 'authenticate/' , userData, {headers: this.httpHeaders_auth} );
  }
  // ==================================================================
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'users/registerdataentry/' , {username:userData.value['username'], password:userData.value['password'], email:userData.value['email'], first_name:userData.value['first_name']} );
    // return this.http.post(this.baseUrl + 'users/registerdataentry/' , userData );
  }
  // // ==================================================================
  // registerUser(userData: User): Observable<any> {
  //   console.log(this.baseUrl + 'users/registerdataentry/' + userData) ;
  //   return this.http.post(this.baseUrl + 'users/registerdataentry/' , userData );
  // }
  // ==================================================================
editUser(userData: oneUser):Observable<any>{
  return this.http.patch(`${this.baseUrl}users/customemp/${userData.id}/`,userData, this.globalServ.getAuthHeaders());
  }
  // ==================================================================
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/customuser', this.globalServ.getAuthHeaders() );
  }
  // ==================================================================
  getGroups(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/groups', this.globalServ.getAuthHeaders() );
  }
  // ==================================================================
}
