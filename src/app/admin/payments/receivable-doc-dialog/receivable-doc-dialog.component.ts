import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/global.service';
import { CompanyService } from 'src/app/admin/atlas/company/company.service';
import { LocalService } from 'src/app/services/local.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Company } from 'src/app/models/company';
import { environment } from 'src/environments/environment';
import { ApiConstant } from 'src/app/constants/api-constant';
import { ActivatedRoute } from '@angular/router';

import { PaymentsService } from 'src/app/admin/payments/payments.service' ;
import { CustomerService } from 'src/app/admin/contracts/customers/customer.service' ;
import { ContractsService } from 'src/app/admin/contracts/contracts.service';
import { PayDocument } from 'src/app/models/paymentDocument' ;
import { DatePipe } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-receivable-doc-dialog',
  templateUrl: './receivable-doc-dialog.component.html',
  styleUrls: ['./receivable-doc-dialog.component.scss']
})
export class ReceivableDocDialogComponent {


  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription ;
  public docData_Form:UntypedFormGroup;

  private sub: any;
  public id:any;

  constructor(private activatedRoute: ActivatedRoute,
              private localStore: LocalService,
              private _companyService:CompanyService,
              private global: GlobalService,
              private router:Router,
              public snackBar: MatSnackBar,
              public docsService:PaymentsService,
              public tenantsService:CustomerService,
              private contractService: ContractsService,
              public translateService: TranslateService,
              private fb:FormBuilder) {

    }
// ===============================================
payDocForDisplay: PayDocument;
// ==================================================================
  ngOnInit() {
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account') ) {
      this.global.me = JSON.parse(this.localStore.getItem('account') );
    // ========================================================================
    // this.prepareMsgLanguage() ;  //  for translation
    // ========================================================================
    this.getTenants();
    this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية السند====

      if(params['id']){
        this.id = +params['id'];
        this.getDocById(this.id);
      }
      else{ this.payDocForDisplay = new PayDocument(); }

      // ==================================================
    this.docData_Form = this.fb.group({
      id: null,
      PDOCode: null,
      PDOValue: {value:null, disabled: this.id},
      PDODocDate: null,
      PDODocType: "R",
      PDODocClassType: "A",
      PDOPrintedCode: null,
      PDODocSecondPerson: null,
      PDONotes: null,
      
      contract_KeyField: null,
      branch_KeyField: null,
      owner_KeyField: null,
      build_KeyField: null,
      unit_KeyField: null,
      installment_KeyField: null,
      customer_KeyField: null,
      
    });
    // ========================================================================

    });
    // =======================================================================

    } else {
      this.router.navigate(['/sign-in']);
    }

  }
// ===============================================================
getDocById(id:number)
{
  this.docsService.getOneDocs(id).subscribe( (oneDoc:PayDocument)=>
  {
    this.fillForm(oneDoc);
    this.payDocForDisplay = oneDoc;
  } )
}
// ================================================================
s_docDate: any;
fillForm(contract: PayDocument){
  // ==========================================================
  if (contract.PDODocDate != null){
    this.s_docDate= contract.PDODocDate;
    }
  // ==============================================================
  this.docData_Form.patchValue({
    id: contract.id,
    contract_KeyField: contract.contract_KeyField,
    branch_KeyField: contract.branch_KeyField,
    owner_KeyField: contract.owner_KeyField,
    build_KeyField: contract.build_KeyField,
    unit_KeyField: contract.unit_KeyField,
    installment_KeyField: contract.installment_KeyField,
    
    customer_KeyField: contract.customer_KeyField,
    PDOCode: contract.PDOCode,
    PDOValue: contract.PDOValue,
    PDODocType: contract.PDODocType,
    PDODocDate: contract.PDODocDate,
    PDODocClassType: contract.PDODocClassType,
    PDOPrintedCode: contract.PDOPrintedCode,
    
    PDODocSecondPerson: contract.PDODocSecondPerson,
    PDONotes: contract.PDONotes,      
  });
}
// ===============================================================
// ===============================================================
readCustumer(event){
  // console.log("====Selected readCustumer:: " + event.value) ;
  this.tenantsService.getOneCustomer(event.value).subscribe
      (tenant => {
        console.log("==tenantName:: "+ tenant['CUSName']);
        this.docData_Form.patchValue({
          PDODocSecondPerson: tenant['CUSName']
         });
      }  );
  this.getCustomerInstallmentsNotPayed(this.curCOMId, this.account.periorty, event.value);
}
// ===============================================================
curOwnerId ;
curContract;
curBranch;
curBuild;
curUnit;
curInstallment;
curDocValue = 0.0;
curDocPayedValue = 0.0;
// ===============================================================
AllNotPayedInstallments=[]
getCustomerInstallmentsNotPayed(comId: number, periorty: number, customer: number)
{
  this.contractService.getInstallmentsPerCustomer_Payed(comId, periorty, customer,"F").subscribe(
    responseInstallments => {
      
    this.AllNotPayedInstallments = responseInstallments;
    //===get value from first Row put it in field DocValue===
    this.curOwnerId = responseInstallments[0]['owner_KeyField'] ;
    this.curContract = responseInstallments[0]['contract_KeyField'] ;
    this.curBranch = responseInstallments[0]['branch_KeyField'] ;
    this.curBuild = responseInstallments[0]['build_KeyField'] ;
    this.curUnit = responseInstallments[0]['unit_KeyField'] ;
    this.curInstallment = responseInstallments[0]['id'] ;
    // '', ''
    this.curDocValue = responseInstallments[0]['INSValue'] ;
    this.curDocPayedValue = responseInstallments[0]['INSPayedValue'] ;
    if(this.curDocValue == null) {this.curDocValue = 0.0 ;}
    if(this.curDocPayedValue == null) {this.curDocPayedValue = 0.0 ;}
    
    this.docData_Form.patchValue({      
      contract_KeyField: this.curContract ,
      branch_KeyField: this.curBranch ,
      build_KeyField: this.curBuild ,
      unit_KeyField: this.curUnit ,
      owner_KeyField: this.curOwnerId ,
      installment_KeyField: this.curInstallment ,
      PDOValue: ( this.curDocValue - this.curDocPayedValue )
    }) ;


    },
    error => {
      this.snackBar.open('خطأ في استرجاع الأقساط', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// =========================================================
// ==========================================================
  AllTenants=[]
  public getTenants(): void {
    this.AllTenants = null;
    this.tenantsService.getCustomers(this.curCOMId, this.account.periorty).subscribe
    (tenants => this.AllTenants = tenants);
  }
// ===============================================================
newCompanyData:Company;
mappingFormValue_ToPayDocClass()
{
  const curPayDocDate = new DatePipe('en-GB').transform(this.docData_Form.value.PDODocDate, 'dd/MM/yyyy')

  this.payDocForDisplay.id=this.docData_Form.value.id;
  this.payDocForDisplay.contract_KeyField=this.docData_Form.value.contract_KeyField;
  this.payDocForDisplay.branch_KeyField=this.docData_Form.value.branch_KeyField;
  this.payDocForDisplay.owner_KeyField=this.docData_Form.value.owner_KeyField;
  this.payDocForDisplay.build_KeyField=this.docData_Form.value.build_KeyField;
  this.payDocForDisplay.unit_KeyField=this.docData_Form.value.unit_KeyField;
  this.payDocForDisplay.installment_KeyField=this.docData_Form.value.installment_KeyField;
  this.payDocForDisplay.customer_KeyField=this.docData_Form.value.customer_KeyField;
  if (this.docData_Form.value.PDODocDate != null){
    this.payDocForDisplay.PDODocDate= curPayDocDate;  }
  this.payDocForDisplay.PDOCode=this.docData_Form.value.PDOCode;
  this.payDocForDisplay.PDOValue=this.docData_Form.value.PDOValue;
  this.payDocForDisplay.PDODocType=this.docData_Form.value.PDODocType;
  this.payDocForDisplay.PDODocClassType=this.docData_Form.value.PDODocClassType;
  this.payDocForDisplay.PDOPrintedCode=this.docData_Form.value.PDOPrintedCode;
  this.payDocForDisplay.PDODocSecondPerson=this.docData_Form.value.PDODocSecondPerson;
  this.payDocForDisplay.PDONotes=this.docData_Form.value.PDONotes;
}
// =================================================================================
insStatus ;
manageInstallmetPayedValue(installmentId: number, installmentValue: number, installmentPayedValue: number, docPayedValue: number, curPayDocDate: any){
  if(installmentPayedValue == null){installmentPayedValue = 0.0}
  if(docPayedValue == null){docPayedValue = 0.0}
  if(installmentValue == null){installmentValue = 0.0}
  let totalPayed = +installmentPayedValue + +docPayedValue ;

  // console.log("===installmentPayedValue:: "+ installmentPayedValue);
  // console.log("===docPayedValue:: "+ docPayedValue);
  // console.log("===totalPayed:: "+ totalPayed);

  if ( (totalPayed) < installmentValue ){ this.insStatus = 'T' ;}
  else { this.insStatus = 'P' ;}

  let installData = {
    id: installmentId,
    INSStatus: this.insStatus,
    INSPayedValue: totalPayed,
    INSPayDate: curPayDocDate,
    INSPersonPayName: this.payDocForDisplay.PDODocSecondPerson
  }
  console.log("===installData:: " + installData );
  this.contractService.editInstallments(installData).subscribe( installment => {
    console.log("==installment after Update:: "+ installment);
  },
  error=>{
    console.log(error);
  }
   );
}
// =================================================================================
saveEditDocData(rowId)
{
  const curPayDocDate2 = new DatePipe('en-GB').transform(this.docData_Form.value.PDODocDate, 'dd/MM/yyyy')
this.mappingFormValue_ToPayDocClass();
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
  this.docsService.addDoc(this.payDocForDisplay).subscribe(
    res=>{
      console.log("----Will Call manageInstallmetPayedValue") ;
      this.manageInstallmetPayedValue(this.curInstallment, this.curDocValue, this.curDocPayedValue, this.payDocForDisplay.PDOValue, curPayDocDate2) ;
    this.snackBar.open('تم إضافة بيانات المستند', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["payments/receivable-list"]);
    } ,
    error=>{
      this.snackBar.open(' خطأ في اضافه مستند', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  )
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====

  this.docsService.editDoc(this.payDocForDisplay)
  .subscribe(res=>{
    this.snackBar.open('تم تعديل بيانات المستند', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["payments/receivable-list"]);
  },
  error=>{
    this.snackBar.open(' خطأ في تعديل بيانات مستند', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
  }
  )
  }

}
// ==========================================================
// ====================================================================
errorRetrieveMsg ;
askToDeletedMsg ;
deletedMsg ;
prepareMsgLanguage(){
  this.translateService.get('MESSAGE.RETRIEVE_ERROR', ).subscribe((res: string) => {
    this.errorRetrieveMsg = res ;  });
    this.translateService.get('MESSAGE.SURE_DELETE', ).subscribe((res: string) => {
      this.askToDeletedMsg = res ;  });
      this.translateService.get('MESSAGE.DELETED', ).subscribe((res: string) => {
        this.deletedMsg = res ;  });

}
// ====================================================================

}
