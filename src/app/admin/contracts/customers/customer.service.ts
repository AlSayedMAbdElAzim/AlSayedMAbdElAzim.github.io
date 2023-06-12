import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { Customer } from 'src/app/models/customer';
import { RelativeCustomer } from 'src/app/models/RelativeCustomer';
import { ApiConstant } from 'src/app/constants/api-constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;

  constructor(private _HttpClient: HttpClient,
    private globalServ: GlobalService) { }

// ======================================================================
  getCustomers(comId: number, periorty: number): Observable<any> {
    return this._HttpClient.get(this.baseUrl + this.secondPartUrl + 'contracts/customer/customersOnly?M='+comId+'&C='+periorty , this.globalServ.getAuthHeaders());
  }
// =======================================================================
  getOneCustomer(id: number): Observable<any> {
    return this._HttpClient.get<Customer>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + id  , this.globalServ.getAuthHeaders());
  }
  // =================add new customer====================== File
  addCustomer(newCus: Customer,fileToUploade: File,fileIDPicToUploade: File): Observable<Customer> {
 var URL=this.baseUrl + this.secondPartUrl + 'contracts/customer/';
 const formData:FormData=new FormData();
 if(fileToUploade!==null){
  formData.append('CUSPic',fileToUploade);

 }
 if(fileIDPicToUploade){
  formData.append('CUSIDPic',fileIDPicToUploade);
}

 if(newCus.CUSCode!==null)
 {
  formData.append('CUSCode',newCus.CUSCode.toString());

 }
//  if(newCus.City_CTTKeyField!==null)
//  {
//   formData.append('City_CTTKeyField',newCus.City_CTTKeyField.toString());

//  }
//  if(newCus.Country_CTTKeyField!==null)
//  {
//   formData.append('Country_CTTKeyField',newCus.Country_CTTKeyField.toString());

//  }
//  if(newCus.Governorate_CTTKeyField )
//  {
//   formData.append('Governorate_CTTKeyField',newCus.Governorate_CTTKeyField .toString());

//  }
//  if(newCus.Group_CTTKeyField)
//  {
//   formData.append('Group_CTTKeyField',newCus.Group_CTTKeyField.toString());

//  }
//  if(newCus.Area_CTTKeyField){
//   formData.append('Area_CTTKeyField',newCus.Area_CTTKeyField.toString());

//  }
 if(newCus.CUSBirthDate)
 { formData.append('CUSBirthDate',newCus.CUSBirthDate.toString()); }

 if(newCus.CUSNationalIDStartDate)
{ formData.append('CUSNationalIDStartDate',newCus.CUSNationalIDStartDate.toString()); }
if(newCus.CUSNationalIDEndDate)
{ formData.append('CUSNationalIDEndDate',newCus.CUSNationalIDEndDate.toString()); }
formData.append('CUSNationalIDType',newCus.CUSNationalIDType);
formData.append('CUSNationalID',newCus.CUSNationalID);
 formData.append('CUSName',newCus.CUSName);

 formData.append('CUSGuarantor',newCus.CUSGuarantor);
 formData.append('CUSJobName',newCus.CUSJobName);

 formData.append('CUSFacebook',newCus.CUSFacebook);
 formData.append('CUSTwitter',newCus.CUSTwitter);
 formData.append('CUSGoogle',newCus.CUSGoogle);

 formData.append('CUSMobile',newCus.CUSMobile);
 formData.append('CUSActive',newCus.CUSActive.toString() );
 formData.append('RowDelete',newCus.RowDelete.toString());

 formData.append('CUSEmail',newCus.CUSEmail);
 
 formData.append('CUSGender',newCus.CUSGender);

 if(newCus.current_building){
  formData.append('current_building', newCus.current_building.toString() );
}
if(newCus.current_unit){
  formData.append('current_unit', newCus.current_unit.toString() );
}

 formData.append('CUSSelfType',newCus.CUSSelfType);
 formData.append('CUSAddress',newCus.CUSAddress);
 formData.append('CUSAddressDescription',newCus.CUSAddressDescription);

console.log("=====URL:: " + URL) ;
console.log(formData) ;
console.log("===============before Post==============");

// var object = {};
//   formData.forEach((value, key) => object[key] = value);
//   var jsonStr = JSON.stringify(object);

    // return this._HttpClient.post(URL, newCus, this.globalServ.getAuthHeaders() );
    // return this._HttpClient.post<Customer>(URL, formData, this.globalServ.getAuthHeaders())
    return this._HttpClient.post<Customer>(URL, formData, this.globalServ.getAuthHeaders_for_files())
  }
// ========================================================================
addOneCustomer(oneCustomer: Customer): Observable<any> {
  console.log("=====addOneCustomer:: ") ;
  console.log(oneCustomer) ;
  console.log("===============addOneCustomer Post==============");
  return this._HttpClient.post(this.baseUrl + this.secondPartUrl + 'contracts/customer/', oneCustomer, this.globalServ.getAuthHeaders_for_files() );
}
// ========================================================================
  addRelCustomer(newRelCus:RelativeCustomer,fileToUploade:File, fileIDPicToUploade:File): Observable<Customer> {
    var URL=this.baseUrl + this.secondPartUrl + 'contracts/customer/';
    const formData:FormData=new FormData();
    if (fileToUploade) {
      formData.append('CUSPic',fileToUploade); }
    if(fileIDPicToUploade){
      formData.append('CUSIDPic',fileIDPicToUploade);
    }
    if(newRelCus.City_CTTKeyField){
      formData.append('City_CTTKeyField',newRelCus.City_CTTKeyField.toString()); }
    if(newRelCus.Country_CTTKeyField){
        formData.append('Country_CTTKeyField',newRelCus.Country_CTTKeyField.toString()); }
      if(newRelCus.Governorate_CTTKeyField ){
        formData.append('Governorate_CTTKeyField',newRelCus.Governorate_CTTKeyField .toString()); }
      if(newRelCus.Group_CTTKeyField){
        formData.append('Group_CTTKeyField',newRelCus.Group_CTTKeyField.toString()); }
      if(newRelCus.Area_CTTKeyField){
        formData.append('Area_CTTKeyField',newRelCus.Area_CTTKeyField.toString()); }
      if(newRelCus.CUSBirthDate){
        formData.append('CUSBirthDate',newRelCus.CUSBirthDate.toString()); }
      if(newRelCus.Related_CUSKeyField){
        formData.append('Related_CUSKeyField',newRelCus.Related_CUSKeyField.toString()); }
      
        if(newRelCus.CUSNationalIDStartDate)
        { formData.append('CUSNationalIDStartDate',newRelCus.CUSNationalIDStartDate.toString()); }
        if(newRelCus.CUSNationalIDEndDate)
        { formData.append('CUSNationalIDEndDate',newRelCus.CUSNationalIDEndDate.toString()); }
        formData.append('CUSNationalIDType',newRelCus.CUSNationalIDType);
        formData.append('CUSNationalID',newRelCus.CUSNationalID);
    
      formData.append('CUSGuarantor',newRelCus.CUSGuarantor);
      formData.append('CUSJobName',newRelCus.CUSJobName);

      formData.append('CUSFacebook',newRelCus.CUSFacebook);
      formData.append('CUSTwitter',newRelCus.CUSTwitter);
      formData.append('CUSGoogle',newRelCus.CUSGoogle);

    formData.append('CUSName',newRelCus.CUSName);
    formData.append('CUSMobile',newRelCus.CUSMobile);
    formData.append('CUSActive',newRelCus.CUSActive.toString() );
    formData.append('RowDelete',newRelCus.RowDelete.toString());

    formData.append('CUSEmail',newRelCus.CUSEmail);
    formData.append('CUSGender',newRelCus.CUSGender);

    if(newRelCus.current_building){
      formData.append('current_building', newRelCus.current_building.toString() );
    }
    if(newRelCus.current_unit){
      formData.append('current_unit', newRelCus.current_unit.toString() );
    }

    formData.append('CUSSelfType',newRelCus.CUSSelfType);
    formData.append('CUSAddress',newRelCus.CUSAddress);
    formData.append('CUSAddressDescription',newRelCus.CUSAddressDescription);


       return this._HttpClient.post<Customer>(URL, formData , this.globalServ.getAuthHeaders_for_files())
     }
// ========================================================================
  editCustomer(oneCustomer: Customer, fileToUploade: File, fileIDPicToUploade: File): Observable<any> {
    console.log("editCustomer:: " + fileToUploade) ;
    var id = oneCustomer.id;
    // let formData: any = new FormData();
    const formData:FormData=new FormData();
    if(fileToUploade){
      formData.append('CUSPic',fileToUploade);
    }
    if(fileIDPicToUploade){
      formData.append('CUSIDPic',fileIDPicToUploade);
    }

    if(oneCustomer.City_CTTKeyField)
    { formData.append('City_CTTKeyField',oneCustomer.City_CTTKeyField.toString()); }
    if(oneCustomer.Country_CTTKeyField)
    { formData.append('Country_CTTKeyField',oneCustomer.Country_CTTKeyField.toString()); }
    if(oneCustomer.Governorate_CTTKeyField)
    { formData.append('Governorate_CTTKeyField',oneCustomer.Governorate_CTTKeyField .toString()); }
    // if(oneCustomer.Group_CTTKeyField)
    // {
    //   formData.append('Group_CTTKeyField',oneCustomer.Group_CTTKeyField.toString());
    // }
    if(oneCustomer.Area_CTTKeyField)
    { formData.append('Area_CTTKeyField',oneCustomer.Area_CTTKeyField.toString()); }
    if(oneCustomer.CUSBirthDate)
    { formData.append('CUSBirthDate',oneCustomer.CUSBirthDate.toString()); }

    if(oneCustomer.current_building){
      formData.append('current_building', oneCustomer.current_building.toString() );
    }
    if(oneCustomer.current_unit){
      formData.append('current_unit', oneCustomer.current_unit.toString() );
    }

    if(oneCustomer.CUSNationalIDStartDate)
    { formData.append('CUSNationalIDStartDate',oneCustomer.CUSNationalIDStartDate.toString()); }
    if(oneCustomer.CUSNationalIDEndDate)
    { formData.append('CUSNationalIDEndDate',oneCustomer.CUSNationalIDEndDate.toString()); }

    formData.append('CUSNationalIDType',oneCustomer.CUSNationalIDType);
    formData.append('CUSNationalID',oneCustomer.CUSNationalID);
    
    formData.append('CUSGuarantor',oneCustomer.CUSGuarantor);
    formData.append('CUSJobName',oneCustomer.CUSJobName);

    formData.append('CUSFacebook',oneCustomer.CUSFacebook);
    formData.append('CUSTwitter',oneCustomer.CUSTwitter);
    formData.append('CUSGoogle',oneCustomer.CUSGoogle);

    formData.append('CUSFirstName',oneCustomer.CUSFirstName);
    formData.append('CUSLastName',oneCustomer.CUSLastName);
    formData.append('CUSMobile',oneCustomer.CUSMobile);
    formData.append('CUSActive',oneCustomer.CUSActive.toString());
    formData.append('RowDelete',oneCustomer.RowDelete.toString());

    formData.append('CUSEmail',oneCustomer.CUSEmail);
    formData.append('CUSHomePhone',oneCustomer.CUSHomePhone);
    formData.append('CUSWorkPhone',oneCustomer.CUSWorkPhone);

    formData.append('CUSGender',oneCustomer.CUSGender);
    formData.append('CUSSelfType',oneCustomer.CUSSelfType);
    formData.append('CUSAddress',oneCustomer.CUSAddress);
    // formData.append('CUSAddressDescription',oneCustomer.CUSAddressDescription);
  //     console.log("=====Form Data=====");
  //     console.log(formData);
  // var object = {};
  // formData.forEach((value, key) => object[key] = value);
  // var jsonStr = JSON.stringify(object);
  // console.log("=====jsonStr Data=====");
  // console.log(jsonStr);

    // return this._HttpClient.put<void>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + id + "/", oneCustomer , this.globalServ.getAuthHeaders());
    return this._HttpClient.put<any>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + id + "/", formData , this.globalServ.getAuthHeaders_for_files());
  }
// ==============================================================================
  editRelCustomer(oneRelCustomer: RelativeCustomer,fileToUploade:File, fileIDPicToUploade:File): Observable<void> {

    var id = oneRelCustomer.id;
    const formData:FormData=new FormData();
    if(fileToUploade){
        formData.append('CUSPic',fileToUploade); }
    if(fileIDPicToUploade){
      formData.append('CUSIDPic',fileIDPicToUploade);
    }

    if(oneRelCustomer.City_CTTKeyField){
        formData.append('City_CTTKeyField',oneRelCustomer.City_CTTKeyField.toString()); }
    if(oneRelCustomer.Country_CTTKeyField){
        formData.append('Country_CTTKeyField',oneRelCustomer.Country_CTTKeyField.toString()); }
    if(oneRelCustomer.Governorate_CTTKeyField ){
        formData.append('Governorate_CTTKeyField',oneRelCustomer.Governorate_CTTKeyField .toString()); }
    if(oneRelCustomer.Group_CTTKeyField){
        formData.append('Group_CTTKeyField',oneRelCustomer.Group_CTTKeyField.toString()); }
    if(oneRelCustomer.Area_CTTKeyField){
        formData.append('Area_CTTKeyField',oneRelCustomer.Area_CTTKeyField.toString()); }
    if(oneRelCustomer.CUSBirthDate){
        formData.append('CUSBirthDate',oneRelCustomer.CUSBirthDate.toString()); }

    if(oneRelCustomer.Related_CUSKeyField){
      formData.append('Related_CUSKeyField',oneRelCustomer.Related_CUSKeyField.toString());
    }
    if(oneRelCustomer.CUSCode){ formData.append('CUSCode',oneRelCustomer.CUSCode.toString()); }

    if(oneRelCustomer.CUSNationalIDStartDate)
    { formData.append('CUSNationalIDStartDate',oneRelCustomer.CUSNationalIDStartDate.toString()); }
    if(oneRelCustomer.CUSNationalIDEndDate)
    { formData.append('CUSNationalIDEndDate',oneRelCustomer.CUSNationalIDEndDate.toString()); }
    formData.append('CUSNationalIDType',oneRelCustomer.CUSNationalIDType);
    formData.append('CUSNationalID',oneRelCustomer.CUSNationalID);

    formData.append('CUSGuarantor',oneRelCustomer.CUSGuarantor);
    formData.append('CUSJobName',oneRelCustomer.CUSJobName);

    formData.append('CUSFacebook',oneRelCustomer.CUSFacebook);
    formData.append('CUSTwitter',oneRelCustomer.CUSTwitter);
    formData.append('CUSGoogle',oneRelCustomer.CUSGoogle);

    formData.append('CUSName',oneRelCustomer.CUSName);
    formData.append('CUSMobile',oneRelCustomer.CUSMobile);
    formData.append('CUSActive',oneRelCustomer.CUSActive.toString());
    formData.append('RowDelete',oneRelCustomer.RowDelete.toString());

    formData.append('CUSEmail',oneRelCustomer.CUSEmail);
    formData.append('CUSGender',oneRelCustomer.CUSGender);

    if(oneRelCustomer.current_building){
      formData.append('current_building', oneRelCustomer.current_building.toString() );
    }
    if(oneRelCustomer.current_unit){
      formData.append('current_unit', oneRelCustomer.current_unit.toString() );
    }

    formData.append('CUSSelfType',oneRelCustomer.CUSSelfType);
    formData.append('CUSAddress',oneRelCustomer.CUSAddress);
    formData.append('CUSAddressDescription',oneRelCustomer.CUSAddressDescription);

    return this._HttpClient.put<void>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + id + "/", formData , this.globalServ.getAuthHeaders_for_files());
  }
// ========================================================================
  deleteCustomer(id: number): Observable<void> {

    return this._HttpClient.delete<void>(this.baseUrl + this.secondPartUrl + 'contracts/customer/' + id , this.globalServ.getAuthHeaders());
  }
// ===========================================================================
  getRelatedCustomer(comId: number, periorty: number,id:number): Observable<Customer>
{
  return this._HttpClient.get<Customer>(this.baseUrl + this.secondPartUrl + 'contracts/customer/customerPerSpec/?M='+comId+'&C='+periorty+'&customer='+ id , this.globalServ.getAuthHeaders());
}
// =============================================================================
}
