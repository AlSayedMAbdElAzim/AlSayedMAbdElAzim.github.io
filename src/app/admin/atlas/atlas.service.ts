import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AtlasService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;
  curCOMId: number = environment.comid;

  constructor(private http: HttpClient,
    private globalServ: GlobalService) { }
    // ================================================================
    getAllBranch(comId: number, periorty: number): Observable<any> {
      return this.http.get(this.baseUrl + this.secondPartUrl + 'atlas/branch/allBranches/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
    }
    // =================================================================

}
