import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { environment } from 'src/environments/environment';

import { PayDocument } from 'src/app/models/paymentDocument' ;


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;
  curCOMId: number = environment.comid;
  constructor(private http: HttpClient,
    private globalServ: GlobalService) { }

  // =================================================================
  getAllReceivableDocuments(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/paydoc/PayDocsPerSpec/?type=R&M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // ================================================================
  getAllPayableDocuments(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/paydoc/PayDocsPerSpec/?type=P&M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // ================================================================
  deleteDocument(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'contracts/paydoc/' + id , this.globalServ.getAuthHeaders());
  }
  // =======================================================================
  getOneDocs(id: number): Observable<PayDocument> {
    return this.http.get<PayDocument>(this.baseUrl + this.secondPartUrl + 'contracts/paydoc/' + id  , this.globalServ.getAuthHeaders());
  }
  // ================================================================
  // ========================================================================== 
  addDoc(docData: any ): Observable<any> {
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/paydoc/';
    return this.http.post<any>(URL, docData, this.globalServ.getAuthHeaders_for_files())
  }
  // ===========================================================================
  editDoc(docData: any ): Observable<any> {
    var id = docData.id;
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/paydoc/'+ id + "/";    
    return this.http.patch<any>(URL, docData, this.globalServ.getAuthHeaders_for_files())
  }
// =================================================================
}
