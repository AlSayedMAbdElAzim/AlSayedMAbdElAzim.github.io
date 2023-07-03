import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { environment } from 'src/environments/environment';
import { RentContract } from 'src/app/models/rentContract';
import { ContractDocs } from 'src/app/models/rentContractsDocs';

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
  // =======================================================================
  getOneContractDocs(comId: number, periorty: number, id: number): Observable<any> {
    return this.http.get<ContractDocs>(this.baseUrl + this.secondPartUrl + 'contracts/contractdocs/ContractDocsPerSpec?M='+comId+'&C='+periorty+'&rcontract=' + id  , this.globalServ.getAuthHeaders());
  }
  // ================================================================
  deleteContract(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'contracts/contract/' + id , this.globalServ.getAuthHeaders());
  }
  // =======================add Contract Docs=================
addContractDocs(contractId: number, docs: File ): Observable<ContractDocs> {
  var URL=this.baseUrl + this.secondPartUrl + 'contracts/contractdocs/';
  const formData:FormData=new FormData();
  
  if(docs!==null){ formData.append('RCDPic',docs); }
  if(contractId !== null) { formData.append('contract_KeyField',contractId.toString()); }

  return this.http.post<ContractDocs>(URL, formData, this.globalServ.getAuthHeaders_for_files())
}
// ===========================================================================
    // =================add new Contracts===============================
    addContract(contract: any ): Observable<any> {
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
      
      return this.http.post<any>(URL, formData, this.globalServ.getAuthHeaders_for_files())
      }
     // ========================================================================
  // =================add new Contracts===============================
  editContract(contract: any ): Observable<any> {
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
    
    return this.http.put<any>(URL, formData, this.globalServ.getAuthHeaders_for_files())
    
    }
   // ========================================================================
  getInstallmentsPerContract(comId: number, periorty: number, id: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/installment/InstallmentPerSpec/?M='+comId+'&C='+periorty+'&contract='+id, this.globalServ.getAuthHeaders() );
  }
  // ================================================================
  getInstallmentsPerCustomer_Payed(comId: number, periorty: number, customerId: number, payedStatue: string): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/installment/InstallmentPerSpec/?M='+comId+'&C='+periorty+'&payed='+payedStatue+'&customer='+customerId, this.globalServ.getAuthHeaders() );
  }
  // ===============================================================================
  getInstallmentsPerCustomer_All(comId: number, periorty: number, id: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'contracts/installment/InstallmentPerSpec/?M='+comId+'&C='+periorty+'&customer='+id, this.globalServ.getAuthHeaders() );
  }
  // ===============================================================================
  getOneInstallment(id: number): Observable<void> {
    return this.http.get<void>(this.baseUrl + this.secondPartUrl + 'contracts/installment/' + id , this.globalServ.getAuthHeaders());
  }
  // ===============================================================================
  deleteInstallment(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'contracts/installment/' + id , this.globalServ.getAuthHeaders());
  }
  // ========================================================================== 
  addInstallments(installmentData: any ): Observable<any> {
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/installment/';
    // const formData:FormData=new FormData();

    return this.http.post<any>(URL, installmentData, this.globalServ.getAuthHeaders_for_files())
  }
  // ===========================================================================
  // =================add new Installment===============================
  addOneInstallment(insta: any ): Observable<any> {
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/installment/';
    const formData:FormData=new FormData();

    if(insta.contract_KeyField)
      { formData.append('contract_KeyField',insta.contract_KeyField.toString()); }
    if(insta.branch_KeyField)
      { formData.append('branch_KeyField',insta.branch_KeyField.toString()); }
    if(insta.owner_KeyField)
      { formData.append('owner_KeyField',insta.owner_KeyField.toString()); }
    if(insta.build_KeyField)
      { formData.append('build_KeyField',insta.build_KeyField.toString()); }
    if(insta.unit_KeyField)
      { formData.append('unit_KeyField',insta.unit_KeyField.toString()); }
    if(insta.customer_KeyField)
      { formData.append('customer_KeyField',insta.customer_KeyField.toString()); }


    if(insta.INSCode)
      { formData.append('INSCode',insta.INSCode.toString()); }
    if(insta.INSValue)
      { formData.append('INSValue',insta.INSValue.toString()); }
    if(insta.INSPayedValue)
      { formData.append('INSPayedValue',insta.INSPayedValue.toString()); }

    formData.append('INSContractTyps',insta.INSContractTyps);
    formData.append('INSStatus',insta.INSStatus);
    formData.append('INSPersonPayName',insta.INSPersonPayName);
    formData.append('INSNotes',insta.INSNotes);

    formData.append('RowDelete',insta.RowDelete.toString());
    formData.append('RowConfirm',insta.RowConfirm.toString());
    formData.append('RowStatus',insta.RowStatus.toString());
      
    return this.http.post<any>(URL, formData, this.globalServ.getAuthHeaders_for_files())

  }
  // ============================================================================
  // ========================================================================== 
  editInstallments(installmentData: any ): Observable<any> {
    var id = installmentData.id;
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/installment/'+ id + "/";
    
    return this.http.patch<any>(URL, installmentData, this.globalServ.getAuthHeaders_for_files())
  }
  // ===========================================================================
  // =================add new Installment===============================
  editOneInstallment(insta: any ): Observable<any> {
    var id = insta.id;
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/installment/'+ id + "/";
console.log("---editOneInstallment URL:: "+ URL);
    const formData:FormData=new FormData();

    if(insta.INSDueDate)
      { formData.append('INSDueDate',insta.INSDueDate.toString()); }
    if(insta.INSPayDate)
      { formData.append('INSPayDate',insta.INSPayDate.toString()); }

    if(insta.contract_KeyField)
      { formData.append('contract_KeyField',insta.contract_KeyField.toString()); }
    if(insta.branch_KeyField)
      { formData.append('branch_KeyField',insta.branch_KeyField.toString()); }
    if(insta.owner_KeyField)
      { formData.append('owner_KeyField',insta.owner_KeyField.toString()); }
    if(insta.build_KeyField)
      { formData.append('build_KeyField',insta.build_KeyField.toString()); }
    if(insta.unit_KeyField)
      { formData.append('unit_KeyField',insta.unit_KeyField.toString()); }
    if(insta.customer_KeyField)
      { formData.append('customer_KeyField',insta.customer_KeyField.toString()); }


    if(insta.INSCode)
      { formData.append('INSCode',insta.INSCode.toString()); }
    if(insta.INSValue)
      { formData.append('INSValue',insta.INSValue.toString()); }
    if(insta.INSPayedValue)
      { formData.append('INSPayedValue',insta.INSPayedValue.toString()); }

    formData.append('INSContractTyps',insta.INSContractTyps);
    formData.append('INSStatus',insta.INSStatus);
    formData.append('INSPersonPayName',insta.INSPersonPayName);
    formData.append('INSNotes',insta.INSNotes);

    formData.append('RowDelete',insta.RowDelete.toString());
    formData.append('RowConfirm',insta.RowConfirm.toString());
    formData.append('RowStatus',insta.RowStatus.toString());
      
    return this.http.put<any>(URL, formData, this.globalServ.getAuthHeaders_for_files())

  }
  // ============================================================================
  updateCustomerUnitFromContract(customerId: number, current_building: number, unitID: number): Observable<any> {
    let dataToUpdate = {
      current_building: current_building,
      current_unit: unitID
    }
    return this.http.patch<any>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + customerId + "/", dataToUpdate , this.globalServ.getAuthHeaders_for_files());
  }
  // ============================================================================
}
