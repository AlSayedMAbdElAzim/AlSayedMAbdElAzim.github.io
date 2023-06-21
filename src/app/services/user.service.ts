import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { User } from 'src/app/models/user';
import { oneUser } from 'src/app/models/userForEdit';
import { Employee } from 'src/app/models/employee';
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
  // ==================================================================getAuthHeaders_for_files
  registerUser(userData: any): Observable<any> {
    // return this.http.post(this.baseUrl + 'users/registerdataentry/' , userData );
    // return this.http.post(this.baseUrl + 'users/registerdataentry/' , {username:userData.value['username'], password:userData.value['password'], email:userData.value['email'], first_name:userData.value['first_name']} );
    return this.http.post(this.baseUrl + 'users/registerdataentry/' , {username:userData.value['username'], password:userData.value['password'], email:userData.value['email'], first_name:userData.value['first_name']}, this.globalServ.getAuthHeaders_for_files() );
  }
  // // ==================================================================
  // registerUser(userData: User): Observable<any> {
  //   console.log(this.baseUrl + 'users/registerdataentry/' + userData) ;
  //   return this.http.post(this.baseUrl + 'users/registerdataentry/' , userData );
  // }
  // ==================================================================
editUser(userData: oneUser):Observable<any>{
  return this.http.patch(`${this.baseUrl}users/customemp/${userData.id}/`,userData, this.globalServ.getAuthHeaders_for_files());
  // return this.http.patch(`${this.baseUrl}users/allempuser/${userData.id}/`,userData, this.globalServ.getAuthHeaders_for_files());
  }
  // ===================================================================
  // =================add Employee===============================
  addEmployee(userData: Employee,fileToUploade: File ): Observable<Employee> {
    var URL=this.baseUrl + 'users/allempuser/' ;

    const formData:FormData=new FormData();
    if(fileToUploade){ formData.append('userPicture',fileToUploade); }

    if(userData.UserCode)
    { formData.append('UserCode',userData.UserCode.toString()); }

    formData.append('username',userData.username);
    formData.append('password',userData.password);
    formData.append('first_name',userData.first_name);
    formData.append('last_name',userData.last_name);
    formData.append('gender',userData.gender);

    if(userData.UserBirthDate)
    { formData.append('UserBirthDate',userData.UserBirthDate.toString()); }

    formData.append('userJobName',userData.userJobName);
    if(userData.is_superuser){formData.append('is_superuser',userData.is_superuser.toString());}
    if(userData.is_staff){formData.append('is_staff',userData.is_staff.toString());}
    if(userData.is_active){formData.append('is_active',userData.is_active.toString());}
    formData.append('is_employee',userData.is_employee);

    formData.append('email',userData.email);
    formData.append('UserMobile',userData.UserMobile);
    formData.append('userAddress',userData.userAddress);

    formData.append('RowDelete',userData.RowDelete.toString());

    return this.http.post<Employee>(URL, formData, this.globalServ.getAuthHeaders_for_files())

    }
   // ========================================================================
  // =================edit Employee===============================
  editEmployee(userData: Employee,fileToUploade: File ): Observable<Employee> {
    var id = userData.id;
    var URL=this.baseUrl + 'users/allempuser/'+ id + "/";

    const formData:FormData=new FormData();
    if(fileToUploade){ formData.append('userPicture',fileToUploade); }

    if(userData.UserCode)
    { formData.append('UserCode',userData.UserCode.toString()); }

    formData.append('username',userData.username);
    // formData.append('password',userData.password);
    formData.append('first_name',userData.first_name);
    formData.append('last_name',userData.last_name);
    formData.append('gender',userData.gender);

    if(userData.UserBirthDate)
    { formData.append('UserBirthDate',userData.UserBirthDate.toString()); }

    formData.append('userJobName',userData.userJobName);
    if(userData.is_superuser){formData.append('is_superuser',userData.is_superuser.toString());}
    if(userData.is_staff){formData.append('is_staff',userData.is_staff.toString());}
    if(userData.is_active){formData.append('is_active',userData.is_active.toString());}
    formData.append('is_employee',userData.is_employee);

    formData.append('email',userData.email);
    formData.append('UserMobile',userData.UserMobile);
    formData.append('userAddress',userData.userAddress);

    formData.append('RowDelete',userData.RowDelete.toString());

    return this.http.patch<Employee>(URL, formData, this.globalServ.getAuthHeaders_for_files())

    }
   // ========================================================================
  // ==================================================================
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/customuser', this.globalServ.getAuthHeaders() );
  }
  // ==================================================================
  getAllStaff():Observable<any>
  {
    return this.http.get(`${this.baseUrl}users/customemp`, this.globalServ.getAuthHeaders());
  }
  // =========================================================================
  getGroups(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/groups', this.globalServ.getAuthHeaders() );
  }
  // ==================================================================
  // =========================================================================
  deleteOneUser(id:number):Observable<any>
  {
    // let url=`${this.baseUrl}users/customemp/${id}`;
    // console.log(url)
    return this.http.delete(`${this.baseUrl}users/customemp/${id}`, this.globalServ.getAuthHeaders());
  }
  // =========================================================================
}
