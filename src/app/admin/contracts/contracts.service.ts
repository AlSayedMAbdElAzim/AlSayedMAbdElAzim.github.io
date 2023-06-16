import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { environment } from 'src/environments/environment';
import { RentContract } from 'src/app/models/rentContract'

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;
  curCOMId: number = environment.comid;
  constructor(private http: HttpClient,
    private globalServ: GlobalService) { }
  // ================================================================
  getAllOwners(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/owner/allOwners/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getOwnersPerParent(comId: number, periorty: number, parent: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/owner/ownersPerSpec/?M='+comId+'&C='+periorty+"&getrelated=T&owner="+parent, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getAllContracts(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/contract/allRentContracts/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getOneContract(id: number): Observable<RentContract> {
    return this.http.get<RentContract>(this.baseUrl + this.secondPartUrl + 'contracts/contract/' + id  , this.globalServ.getAuthHeaders());
  }
  // ================================================================
  deleteContract(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'contracts/contract/' + id , this.globalServ.getAuthHeaders());
  }
// ===========================================================================
    // =================add new Contracts===============================
    addContract(contract: RentContract ): Observable<RentContract> {
      var URL=this.baseUrl + this.secondPartUrl + 'contracts/contract/';
      const formData:FormData=new FormData();
      
      if(contract.Related_RCOKeyField)
      { formData.append('Related_RCOKeyField',contract.Related_RCOKeyField.toString()); }

      if(contract.RCOCode)
      { formData.append('RCOCode',contract.RCOCode.toString()); }

      if(contract.RCOSubCode)
      { formData.append('RCOSubCode',contract.RCOSubCode.toString()); }

      if(contract.RCODate)
      { formData.append('RCODate',contract.RCODate.toString()); }
      if(contract.RCOStartDate)
      { formData.append('RCOStartDate',contract.RCOStartDate.toString()); }
      if(contract.RCOEndDate)
      { formData.append('RCOEndDate',contract.RCOEndDate.toString()); }

      formData.append('RCOContractStatus',contract.RCOContractStatus);

      if(contract.branch_KeyField)
      { formData.append('branch_KeyField',contract.branch_KeyField.toString()); }      
      if(contract.build_KeyField)
      { formData.append('build_KeyField',contract.build_KeyField.toString()); }
      if(contract.unit_KeyField)
      { formData.append('unit_KeyField',contract.unit_KeyField.toString()); }

      if(contract.owner_KeyField)
      { formData.append('owner_KeyField',contract.owner_KeyField.toString()); }
      if(contract.owner_representative_KeyField)
      { formData.append('owner_representative_KeyField',contract.owner_representative_KeyField.toString()); }
      if(contract.customer_KeyField)
      { formData.append('customer_KeyField',contract.customer_KeyField.toString()); }
      if(contract.customer_representative_KeyField)
      { formData.append('customer_representative_KeyField',contract.customer_representative_KeyField.toString()); }
      
      if(contract.RCOContractValue){formData.append('RCOContractValue',contract.RCOContractValue.toString());}
      if(contract.RCOPayEveryMonthesNo){formData.append('RCOPayEveryMonthesNo',contract.RCOPayEveryMonthesNo.toString());}
      if(contract.RCOMonthValue){formData.append('RCOMonthValue',contract.RCOMonthValue.toString());}
      if(contract.RCOInsuranceValue){formData.append('RCOInsuranceValue',contract.RCOInsuranceValue.toString());}
      if(contract.RCOSeekingValue){formData.append('RCOSeekingValue',contract.RCOSeekingValue.toString());}
      
      if(contract.RCOMonthlyExpense){formData.append('RCOMonthlyExpense',contract.RCOMonthlyExpense.toString());}
      if(contract.RCOOtherValue){formData.append('RCOOtherValue',contract.RCOOtherValue.toString());}
      if(contract.RCOMonthlyElectricValue){formData.append('RCOMonthlyElectricValue',contract.RCOMonthlyElectricValue.toString());}
      if(contract.RCOMonthlyWaterValue){formData.append('RCOMonthlyWaterValue',contract.RCOMonthlyWaterValue.toString());}
      if(contract.RCOMonthlyGasValue){formData.append('RCOMonthlyGasValue',contract.RCOMonthlyGasValue.toString());}
      
      formData.append('RCOExpenseDesc',contract.RCOExpenseDesc);
      formData.append('RCOElectricCounterReading',contract.RCOElectricCounterReading);      
      formData.append('RCOWaterCounterReading',contract.RCOWaterCounterReading);
      formData.append('RCOGasCounterReading',contract.RCOGasCounterReading);
      
      formData.append('RCOActive',contract.RCOActive.toString() );
      formData.append('RowDelete',contract.RowDelete.toString());
      
      return this.http.post<RentContract>(URL, formData, this.globalServ.getAuthHeaders_for_files())
      }
     // ========================================================================
  // =================add new Contracts===============================
  editContract(contract: RentContract ): Observable<RentContract> {
    var id = contract.id;
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/contract/'+ id + "/";
    const formData:FormData=new FormData();
    
    if(contract.Related_RCOKeyField)
    { formData.append('Related_RCOKeyField',contract.Related_RCOKeyField.toString()); }

    if(contract.RCOCode)
    { formData.append('RCOCode',contract.RCOCode.toString()); }

    if(contract.RCOSubCode)
    { formData.append('RCOSubCode',contract.RCOSubCode.toString()); }

    if(contract.RCODate)
    { formData.append('RCODate',contract.RCODate.toString()); }
    if(contract.RCOStartDate)
    { formData.append('RCOStartDate',contract.RCOStartDate.toString()); }
    if(contract.RCOEndDate)
    { formData.append('RCOEndDate',contract.RCOEndDate.toString()); }

    formData.append('RCOContractStatus',contract.RCOContractStatus);

    if(contract.branch_KeyField)
    { formData.append('branch_KeyField',contract.branch_KeyField.toString()); }      
    if(contract.build_KeyField)
    { formData.append('build_KeyField',contract.build_KeyField.toString()); }
    if(contract.unit_KeyField)
    { formData.append('unit_KeyField',contract.unit_KeyField.toString()); }

    if(contract.owner_KeyField)
    { formData.append('owner_KeyField',contract.owner_KeyField.toString()); }
    if(contract.owner_representative_KeyField)
    { formData.append('owner_representative_KeyField',contract.owner_representative_KeyField.toString()); }
    if(contract.customer_KeyField)
    { formData.append('customer_KeyField',contract.customer_KeyField.toString()); }
    if(contract.customer_representative_KeyField)
    { formData.append('customer_representative_KeyField',contract.customer_representative_KeyField.toString()); }
    
    if(contract.RCOContractValue){formData.append('RCOContractValue',contract.RCOContractValue.toString());}
    if(contract.RCOPayEveryMonthesNo){formData.append('RCOPayEveryMonthesNo',contract.RCOPayEveryMonthesNo.toString());}
    if(contract.RCOMonthValue){formData.append('RCOMonthValue',contract.RCOMonthValue.toString());}
    if(contract.RCOInsuranceValue){formData.append('RCOInsuranceValue',contract.RCOInsuranceValue.toString());}
    if(contract.RCOSeekingValue){formData.append('RCOSeekingValue',contract.RCOSeekingValue.toString());}
    
    if(contract.RCOMonthlyExpense){formData.append('RCOMonthlyExpense',contract.RCOMonthlyExpense.toString());}
    if(contract.RCOOtherValue){formData.append('RCOOtherValue',contract.RCOOtherValue.toString());}
    if(contract.RCOMonthlyElectricValue){formData.append('RCOMonthlyElectricValue',contract.RCOMonthlyElectricValue.toString());}
    if(contract.RCOMonthlyWaterValue){formData.append('RCOMonthlyWaterValue',contract.RCOMonthlyWaterValue.toString());}
    if(contract.RCOMonthlyGasValue){formData.append('RCOMonthlyGasValue',contract.RCOMonthlyGasValue.toString());}
    
    formData.append('RCOExpenseDesc',contract.RCOExpenseDesc);
    formData.append('RCOElectricCounterReading',contract.RCOElectricCounterReading);      
    formData.append('RCOWaterCounterReading',contract.RCOWaterCounterReading);
    formData.append('RCOGasCounterReading',contract.RCOGasCounterReading);
    
    formData.append('RCOActive',contract.RCOActive.toString() );
    formData.append('RowDelete',contract.RowDelete.toString());
    
    return this.http.put<RentContract>(URL, formData, this.globalServ.getAuthHeaders_for_files())
    
    }
   // ========================================================================
}
