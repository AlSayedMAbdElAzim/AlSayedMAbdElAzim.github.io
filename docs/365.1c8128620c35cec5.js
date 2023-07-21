"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[365],{5726:(_,U,d)=>{d.d(U,{v:()=>S});var p=d(5521),r=d(4650),l=d(529),c=d(7465);class S{constructor(t,e){this._HttpClient=t,this.globalServ=e,this.baseUrl=(new p.P).api_Ip,this.secondPartUrl=(new p.P).api_constant}getCustomers(t,e){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/customersOnly?M="+t+"&C="+e,this.globalServ.getAuthHeaders())}getCustomersPerBranch(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/customerPerSpec?M="+t+"&C="+e+"&branch="+i,this.globalServ.getAuthHeaders())}getCustomerPerUser(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/customerPerSpec?M="+t+"&C="+e+"&isuser="+i,this.globalServ.getAuthHeaders())}getCustomersPerParent(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/customerPerSpec?M="+t+"&C="+e+"&getrelated=T&customer="+i,this.globalServ.getAuthHeaders())}getOneCustomer(t){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/"+t,this.globalServ.getAuthHeaders())}getOneCustomerDocs(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customerdocs/CustomersDocsPerSpec?M="+t+"&C="+e+"&customer="+i,this.globalServ.getAuthHeaders())}getStatementsPerCustomers(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/statements/StatementsPerSpec?M="+t+"&C="+e+"&tenant="+i,this.globalServ.getAuthHeaders())}addCustomerDocs(t,e){var i=this.baseUrl+this.secondPartUrl+"contracts/customerdocs/";const n=new FormData;return null!==e&&n.append("CUDPic",e),null!==t&&n.append("customer_KeyField",t.toString()),this._HttpClient.post(i,n,this.globalServ.getAuthHeaders_for_files())}addCustomer(t,e,i){var n=this.baseUrl+this.secondPartUrl+"contracts/customer/";const a=new FormData;return null!==e&&a.append("CUSPic",e),i&&a.append("CUSIDPic",i),null!==t.CUSCode&&a.append("CUSCode",t.CUSCode.toString()),t.CUSBirthDate&&a.append("CUSBirthDate",t.CUSBirthDate.toString()),t.CUSNationalIDStartDate&&a.append("CUSNationalIDStartDate",t.CUSNationalIDStartDate.toString()),t.CUSNationalIDEndDate&&a.append("CUSNationalIDEndDate",t.CUSNationalIDEndDate.toString()),a.append("CUSNationalIDType",t.CUSNationalIDType),a.append("CUSNationalID",t.CUSNationalID),a.append("CUSName",t.CUSName),a.append("CUSGuarantor",t.CUSGuarantor),a.append("CUSJobName",t.CUSJobName),a.append("CUSFacebook",t.CUSFacebook),a.append("CUSTwitter",t.CUSTwitter),a.append("CUSGoogle",t.CUSGoogle),a.append("CUSMobile",t.CUSMobile),a.append("CUSActive",t.CUSActive.toString()),a.append("RowDelete",t.RowDelete.toString()),a.append("CUSEmail",t.CUSEmail),a.append("CUSGender",t.CUSGender),t.current_building&&a.append("current_building",t.current_building.toString()),t.current_unit&&a.append("current_unit",t.current_unit.toString()),t.current_branch&&a.append("current_branch",t.current_branch.toString()),a.append("CUSSelfType",t.CUSSelfType),a.append("CUSAddress",t.CUSAddress),a.append("CUSAddressDescription",t.CUSAddressDescription),this._HttpClient.post(n,a,this.globalServ.getAuthHeaders_for_files())}addOneCustomer(t){return console.log("=====addOneCustomer:: "),console.log(t),console.log("===============addOneCustomer Post=============="),this._HttpClient.post(this.baseUrl+this.secondPartUrl+"contracts/customer/",t,this.globalServ.getAuthHeaders_for_files())}addRelCustomer(t,e,i){var n=this.baseUrl+this.secondPartUrl+"contracts/customer/";const a=new FormData;return e&&a.append("CUSPic",e),i&&a.append("CUSIDPic",i),t.City_CTTKeyField&&a.append("City_CTTKeyField",t.City_CTTKeyField.toString()),t.Country_CTTKeyField&&a.append("Country_CTTKeyField",t.Country_CTTKeyField.toString()),t.Governorate_CTTKeyField&&a.append("Governorate_CTTKeyField",t.Governorate_CTTKeyField.toString()),t.Group_CTTKeyField&&a.append("Group_CTTKeyField",t.Group_CTTKeyField.toString()),t.Area_CTTKeyField&&a.append("Area_CTTKeyField",t.Area_CTTKeyField.toString()),t.CUSBirthDate&&a.append("CUSBirthDate",t.CUSBirthDate.toString()),t.Related_CUSKeyField&&a.append("Related_CUSKeyField",t.Related_CUSKeyField.toString()),t.CUSNationalIDStartDate&&a.append("CUSNationalIDStartDate",t.CUSNationalIDStartDate.toString()),t.CUSNationalIDEndDate&&a.append("CUSNationalIDEndDate",t.CUSNationalIDEndDate.toString()),a.append("CUSNationalIDType",t.CUSNationalIDType),a.append("CUSNationalID",t.CUSNationalID),a.append("CUSGuarantor",t.CUSGuarantor),a.append("CUSJobName",t.CUSJobName),a.append("CUSFacebook",t.CUSFacebook),a.append("CUSTwitter",t.CUSTwitter),a.append("CUSGoogle",t.CUSGoogle),a.append("CUSName",t.CUSName),a.append("CUSMobile",t.CUSMobile),a.append("CUSActive",t.CUSActive.toString()),a.append("RowDelete",t.RowDelete.toString()),a.append("CUSEmail",t.CUSEmail),a.append("CUSGender",t.CUSGender),t.current_building&&a.append("current_building",t.current_building.toString()),t.current_unit&&a.append("current_unit",t.current_unit.toString()),a.append("CUSSelfType",t.CUSSelfType),a.append("CUSAddress",t.CUSAddress),a.append("CUSAddressDescription",t.CUSAddressDescription),this._HttpClient.post(n,a,this.globalServ.getAuthHeaders_for_files())}editCustomer(t,e,i){console.log("editCustomer:: "+e);var n=t.id;const a=new FormData;return e&&a.append("CUSPic",e),i&&a.append("CUSIDPic",i),t.City_CTTKeyField&&a.append("City_CTTKeyField",t.City_CTTKeyField.toString()),t.Country_CTTKeyField&&a.append("Country_CTTKeyField",t.Country_CTTKeyField.toString()),t.Governorate_CTTKeyField&&a.append("Governorate_CTTKeyField",t.Governorate_CTTKeyField.toString()),t.Area_CTTKeyField&&a.append("Area_CTTKeyField",t.Area_CTTKeyField.toString()),t.CUSBirthDate&&a.append("CUSBirthDate",t.CUSBirthDate.toString()),t.current_building&&a.append("current_building",t.current_building.toString()),t.current_unit&&a.append("current_unit",t.current_unit.toString()),t.current_branch&&a.append("current_branch",t.current_branch.toString()),t.CUSNationalIDStartDate&&a.append("CUSNationalIDStartDate",t.CUSNationalIDStartDate.toString()),t.CUSNationalIDEndDate&&a.append("CUSNationalIDEndDate",t.CUSNationalIDEndDate.toString()),a.append("CUSNationalIDType",t.CUSNationalIDType),a.append("CUSNationalID",t.CUSNationalID),a.append("CUSGuarantor",t.CUSGuarantor),a.append("CUSJobName",t.CUSJobName),a.append("CUSFacebook",t.CUSFacebook),a.append("CUSTwitter",t.CUSTwitter),a.append("CUSGoogle",t.CUSGoogle),a.append("CUSFirstName",t.CUSFirstName),a.append("CUSLastName",t.CUSLastName),a.append("CUSMobile",t.CUSMobile),a.append("CUSActive",t.CUSActive.toString()),a.append("RowDelete",t.RowDelete.toString()),a.append("CUSEmail",t.CUSEmail),a.append("CUSHomePhone",t.CUSHomePhone),a.append("CUSWorkPhone",t.CUSWorkPhone),a.append("CUSGender",t.CUSGender),a.append("CUSSelfType",t.CUSSelfType),a.append("CUSAddress",t.CUSAddress),this._HttpClient.put(this.baseUrl+this.secondPartUrl+"contracts/customer/"+n+"/",a,this.globalServ.getAuthHeaders_for_files())}editRelCustomer(t,e,i){var n=t.id;const a=new FormData;return e&&a.append("CUSPic",e),i&&a.append("CUSIDPic",i),t.City_CTTKeyField&&a.append("City_CTTKeyField",t.City_CTTKeyField.toString()),t.Country_CTTKeyField&&a.append("Country_CTTKeyField",t.Country_CTTKeyField.toString()),t.Governorate_CTTKeyField&&a.append("Governorate_CTTKeyField",t.Governorate_CTTKeyField.toString()),t.Group_CTTKeyField&&a.append("Group_CTTKeyField",t.Group_CTTKeyField.toString()),t.Area_CTTKeyField&&a.append("Area_CTTKeyField",t.Area_CTTKeyField.toString()),t.CUSBirthDate&&a.append("CUSBirthDate",t.CUSBirthDate.toString()),t.Related_CUSKeyField&&a.append("Related_CUSKeyField",t.Related_CUSKeyField.toString()),t.CUSCode&&a.append("CUSCode",t.CUSCode.toString()),t.CUSNationalIDStartDate&&a.append("CUSNationalIDStartDate",t.CUSNationalIDStartDate.toString()),t.CUSNationalIDEndDate&&a.append("CUSNationalIDEndDate",t.CUSNationalIDEndDate.toString()),a.append("CUSNationalIDType",t.CUSNationalIDType),a.append("CUSNationalID",t.CUSNationalID),a.append("CUSGuarantor",t.CUSGuarantor),a.append("CUSJobName",t.CUSJobName),a.append("CUSFacebook",t.CUSFacebook),a.append("CUSTwitter",t.CUSTwitter),a.append("CUSGoogle",t.CUSGoogle),a.append("CUSName",t.CUSName),a.append("CUSMobile",t.CUSMobile),a.append("CUSActive",t.CUSActive.toString()),a.append("RowDelete",t.RowDelete.toString()),a.append("CUSEmail",t.CUSEmail),a.append("CUSGender",t.CUSGender),t.current_building&&a.append("current_building",t.current_building.toString()),t.current_unit&&a.append("current_unit",t.current_unit.toString()),a.append("CUSSelfType",t.CUSSelfType),a.append("CUSAddress",t.CUSAddress),a.append("CUSAddressDescription",t.CUSAddressDescription),this._HttpClient.put(this.baseUrl+this.secondPartUrl+"contracts/customer/"+n+"/",a,this.globalServ.getAuthHeaders_for_files())}deleteCustomer(t){return this._HttpClient.delete(this.baseUrl+this.secondPartUrl+"contracts/customer/"+t,this.globalServ.getAuthHeaders())}getRelatedCustomer(t,e,i){return this._HttpClient.get(this.baseUrl+this.secondPartUrl+"contracts/customer/customerPerSpec/?M="+t+"&C="+e+"&customer="+i,this.globalServ.getAuthHeaders())}}S.\u0275fac=function(t){return new(t||S)(r.LFG(l.eN),r.LFG(c.U))},S.\u0275prov=r.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"})},2887:(_,U,d)=>{d.d(U,{$:()=>o});var p=d(5412),r=d(4650),l=d(1576),c=d(4859),S=d(3081);class o{constructor(e,i){this.dialogRef=e,this.data=i}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}o.\u0275fac=function(e){return new(e||o)(r.Y36(p.so),r.Y36(p.WI))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-confirm-dialog"]],decls:13,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,i){1&e&&(r.TgZ(0,"h1",0),r._uU(1),r.qZA(),r.TgZ(2,"div",1)(3,"p"),r._uU(4),r.qZA()(),r.TgZ(5,"div",2)(6,"div",3)(7,"button",4),r.NdJ("click",function(){return i.onDismiss()}),r._uU(8),r.ALo(9,"translate"),r.qZA(),r.TgZ(10,"button",5),r.NdJ("click",function(){return i.onConfirm()}),r._uU(11),r.ALo(12,"translate"),r.qZA()()()),2&e&&(r.xp6(1),r.Oqu(null==i.data?null:i.data.title),r.xp6(3),r.Oqu(null==i.data?null:i.data.message),r.xp6(4),r.Oqu(r.lcZ(9,4,"BTN.NO")),r.xp6(3),r.Oqu(r.lcZ(12,6,"BTN.YES")))},dependencies:[l.xw,l.Wh,c.lW,p.uh,p.xY,p.H8,S.X$]})}}]);