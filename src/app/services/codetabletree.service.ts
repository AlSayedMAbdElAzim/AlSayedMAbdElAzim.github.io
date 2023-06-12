import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalService } from 'src/app/services/global.service';
import { CodeTableTree } from 'src/app/models/codetabletree';
import { ApiConstant } from 'src/app/constants/api-constant';


@Injectable({
  providedIn: 'root'
})
export class CodetabletreeService {

  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;
  curCOMId: number = environment.comid;

  constructor(private http: HttpClient,
              private globalServ: GlobalService) { }
// ================================================================
  getAllCodeTableTree(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/allCodes/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
    // return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree', this.globalServ.getAuthHeaders() );
  }
// =================================================================
  addCodeTableTree(oneCode: CodeTableTree): Observable<any> {
    return this.http.post(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/', oneCode, this.globalServ.getAuthHeaders() );
  }

  editCode(oneCode: CodeTableTree, id: number): Observable<any> {
    return this.http.put(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/' + id + '/', oneCode, this.globalServ.getAuthHeaders() );
  }

  deleteCode(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/' + id + '/', this.globalServ.getAuthHeaders() );
  }

  getOneCode(id: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/' + id + '/', this.globalServ.getAuthHeaders() );
  }

  getLevelOne(comId: number, rowConfirm: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/levelone/?M='+comId+'&C='+rowConfirm, this.globalServ.getAuthHeaders() );
  }
// ================================================================
  getRowPerCode(comId: number, rowConfirm: number, codeCTT: string): Observable<any> {
    console.log("====*****==== :: "+String(parent) )
    var pUrl=this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/subcodes/?M='+comId+'&C='+rowConfirm+'&withlevelone=T&cttcode='+ codeCTT;
    console.log(pUrl)
    return this.http.get(pUrl, this.globalServ.getAuthHeaders() );
  }
// ==================================================================
  getSubForParent(comId: number, rowConfirm: number, parent: string): Observable<any> {
    // console.log("====*****==== :: "+String(parent) )
    var pUrl=this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/subcodes/?M='+comId+'&C='+rowConfirm+'&parent='+ parent;
    // console.log(pUrl)
    return this.http.get(pUrl, this.globalServ.getAuthHeaders() );
  }
// ==================================================================
  getSubForParentAndRelated(comId: number, rowConfirm: number, parent: string, related: number): Observable<any> {
    var url=this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/subcodes/?M='+comId+'&C='+rowConfirm+'&parent='+parent+'&related='+related;
  console.log(url)
    return this.http.get(url, this.globalServ.getAuthHeaders() );
  }
// ===================================================================
  // getSubForParentWAndRelated(comId: number, rowConfirm: number, parent: string): Observable<any> {
  //   return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/codetabletree/subcodes/?M='+comId+'&C='+rowConfirm+'&parent='+parent, this.globalServ.getAuthHeaders() );
  // }
}
