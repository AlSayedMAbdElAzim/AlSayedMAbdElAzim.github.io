import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { Company } from 'src/app/models/company';
import { ApiConstant } from 'src/app/constants/api-constant';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;

  constructor(private http: HttpClient,
              private globalServ: GlobalService) { }

  getCompanies(periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/company/allCompanies/?C='+periorty, this.globalServ.getAuthHeaders() );
  }

  addCompany(oneCompany: Company): Observable<any> {
    return this.http.post(this.baseUrl + this.secondPartUrl + 'atlas/company/', oneCompany, this.globalServ.getAuthHeaders() );
  }
// --------------------------------------------------------------------------------
  editCompany(oneCompany: Company, id: number,logoUpload:File): Observable<any> {
    const formData:FormData=new FormData();
    if(logoUpload!==null) { formData.append('COMLogo',logoUpload,logoUpload.name); }
    if(oneCompany.COMCode) { formData.append('COMCode',oneCompany.COMCode.toString()); }
    formData.append('COMAraName',oneCompany.COMAraName);
    formData.append('COMEngName',oneCompany.COMEngName);
    formData.append('COMAddress',oneCompany.COMAddress);
    formData.append('COMPhone',oneCompany.COMPhone);
    formData.append('COMMobile',oneCompany.COMMobile);
    formData.append('COMFax',oneCompany.COMFax);
    formData.append('COMDisplayedName',oneCompany.COMDisplayedName);

    // var object = {};
    // formData.forEach((value, key) => object[key] = value);
    // var jsonStr = JSON.stringify(object);

    // return this.http.patch(this.baseUrl + this.secondPartUrl + 'atlas/company/' + id + '/', formData, this.globalServ.getAuthHeaders() ); 
    // return this.http.patch(this.baseUrl + this.secondPartUrl + 'atlas/company/' + id + '/', jsonStr, this.globalServ.getAuthHeaders() );
    return this.http.patch(this.baseUrl + this.secondPartUrl + 'atlas/company/' + id + '/', formData, this.globalServ.getAuthHeaders_for_files() );
  }
// -------------------------------------------------------------------------
  deleteCompany(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + this.secondPartUrl + 'atlas/company/' + id + '/', this.globalServ.getAuthHeaders() );
  }

  getOneCompany(id: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/company/' + id + '/', this.globalServ.getAuthHeaders() );
  }

  getCompany(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/company/allCompanies/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
}
// ==================================================

