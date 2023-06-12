import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstant } from 'src/app/constants/api-constant';
import { GlobalService } from 'src/app/services/global.service';

// new ApiConstant().api_constant
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  baseUrl: string = new ApiConstant().api_Ip;

  constructor(private _HttpClient: HttpClient,
              private globalServ: GlobalService) { }
  // =========================================================================
  getAllStaff():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}users/customemp`, this.globalServ.getAuthHeaders());
  }
  // =========================================================================
  getOneUserbyId(id:number): Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}users/customemp/${id}`, this.globalServ.getAuthHeaders());
  }
  // =========================================================================
  deleteOneUser(id:number):Observable<any>
  {
    let url=`${this.baseUrl}users/customemp/${id}`;
    console.log(url)
    return this._HttpClient.delete(`${this.baseUrl}users/customemp/${id}`, this.globalServ.getAuthHeaders());
  }
  // =========================================================================
}
