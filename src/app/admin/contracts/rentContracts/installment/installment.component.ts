import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

// import { CodetabletreeService } from 'src/app/services/codetabletree.service';
import { ContractsService } from 'src/app/admin/contracts/contracts.service' ;

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
// import { CodeTableTree } from 'src/app/models/codetabletree';
import { Installments } from 'src/app/models/installments';

import { LocalService } from 'src/app/services/local.service';
import { NavigationEnd, ActivatedRoute } from '@angular/router';
import { CodeTableTreeConstants } from 'src/app/constants/app-constant';

import { InstallmentDialogComponent } from '../installment-dialog/installment-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
declare let $ : any;

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {
  public contractInstallmentsArray:Installments[] = [];
  
  public page: any;
  public count = 6;

  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription;
  private arguToComponent: any;
  public settings:Settings;

  private sub: any;
  public id:any;
  constructor(private localStore: LocalService,
              private global: GlobalService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private _contractService:ContractsService,
              public snackBar: MatSnackBar,
              public translateService: TranslateService,
              private fb:FormBuilder,
              public dialog: MatDialog,
              public appSettings:AppSettings) {
                this.settings = this.appSettings.settings;
  }

  // =================Start New version========================
  installmentForDisplay: Installments = {
    id:undefined  ,
    COMId:undefined  ,
    INSCode:undefined  ,
    contract_KeyField:undefined  ,
    branch_KeyField:undefined  ,
    owner_KeyField:undefined  ,
    build_KeyField:undefined  ,
    unit_KeyField:undefined  ,
    customer_KeyField:undefined  ,
    INSContractTyps:undefined  ,
    INSStatus:undefined  ,
    INSValue:undefined  ,
    INSDueDate:undefined  ,
    INSPayedValue:undefined  ,
    INSPayDate:undefined  ,
    INSPersonPayName:undefined  ,
    INSNotes:undefined  ,
    EntryDate:undefined  ,
    EntryUser:undefined  ,
    RowConfirm:undefined  ,
    RowStatus:undefined  ,
    RowDelete:undefined      
  };
    //========================//
    Insta: Installments;
    contract_KeyField: number;
    branch_KeyField: number;
    owner_KeyField: number;
    build_KeyField: number;
    unit_KeyField: number;
    customer_KeyField: number;
    //===============================//
    ngOnInit() {
      this.userSUb = this.global.user.subscribe(
        me => { this.account = me; }
      );
      if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
        this.global.me = JSON.parse(this.localStore.getItem('account'));
        this.prepareMsgLanguage() ;  //  for translation

        this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية العقد====
          if(params['id']){
            this.id = +params['id'];
            this.getInstallmentsPerContract(this.curCOMId, this.account.periorty, this.id);
            //==================Get Contract Data=================================
            this._contractService.getOneContract(this.id ).subscribe(
              responseInstallment => {
                this.contract_KeyField = responseInstallment.id;
                this.branch_KeyField = responseInstallment.branch_KeyField;
                this.owner_KeyField = responseInstallment.owner_KeyField;
                this.build_KeyField = responseInstallment.build_KeyField;
                this.unit_KeyField = responseInstallment.unit_KeyField;
                this.customer_KeyField = responseInstallment.customer_KeyField;
              },              
            );
            //====================================================================
          }
          else{ this.Insta = new Installments(); }
        });

      } else {
        this.router.navigate(['/sign-in']);
      }
  // ======================================================================
    }
  // ===================================================
  public onPageChanged(event){
    this.page = event;
    window.scrollTo(0,0);
  }
  // =====================================================
  public openCategoryDialog(data:any){

    const dialogRef = this.dialog.open(InstallmentDialogComponent, {
      data: { 
        cttRow: data,
        contract: this.contract_KeyField,
        branch: this.branch_KeyField,
        owner: this.owner_KeyField,
        build: this.build_KeyField,
        unit: this.unit_KeyField,
        customer: this.customer_KeyField
       },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    // dialogRef.afterClosed().subscribe(cttRow => {
    //   if(cttRow){
    //     this.snackBar.open('تم تعديل الكود', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    //     this.snackBar.open('خطأ في تعديل الكود', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    //         }            
    //     else{
    //       this.snackBar.open('تم إضافة الكود', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    //       this.snackBar.open('خطأ في إضافة الكود', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    //     }
    //     } );
    dialogRef.afterClosed().subscribe((result) => {
      console.log("=====result.event:: " + result.event) ;
      if(result.event == 'Cancel'){            
      }else if(result.event == 'Patch'){            
        this.mapFormvalue_to_InstallmentClass(result.data);
        this.updateInstallment(this.installmentForDisplay) ;
      }else if(result.event == 'Post'){            
        this.mapFormvalue_to_InstallmentClass(result.data);
        this.addInstallment(this.installmentForDisplay) ;
      }
    });
  }
// =======================================================================================
public addInstallment(insta:Installments){
  console.log("====inside addInstallment== ===");
  this._contractService.addInstallments(insta).subscribe(instadata => 
    this.getInstallmentsPerContract(this.curCOMId, this.account.periorty, this.id)
    );
}
// =========================================================================================
public updateInstallment(insta:Installments){
  console.log("====inside updateInstallment=====");
  this._contractService.editInstallments(insta).subscribe(instadata => 
    this.getInstallmentsPerContract(this.curCOMId, this.account.periorty, this.id)
    );
}
// ==========================================================================================
// =================================================================
mapFormvalue_to_InstallmentClass(formValue: any)
{
  // 'en-GB'  'en-US'
  console.log("====formValue.dueDate:: "+formValue.dueDate);
  if (formValue.dueDate != null){
    const instDueDate = new DatePipe('en-GB').transform(formValue.dueDate, 'dd/MM/yyyy')
    var lastDate = new Date(new DatePipe('en-GB').transform(new Date(formValue.dueDate), 'yyyy/MM/dd') ) ;    
    this.installmentForDisplay.INSDueDate= instDueDate; 
   }
  if (formValue.payDate != null){
    const instPayDate = new DatePipe('en-GB').transform(formValue.payDate, 'dd/MM/yyyy')
    var lastDate2 = new Date(new DatePipe('en-GB').transform(new Date(formValue.payDate), 'yyyy/MM/dd') ) ;    
    this.installmentForDisplay.INSPayDate= instPayDate;  }
  
    this.installmentForDisplay.id= formValue.id;

    this.installmentForDisplay.INSCode = formValue.INSCode;
    this.installmentForDisplay.INSContractTyps = formValue.INSContractTyps;
    this.installmentForDisplay.INSStatus = formValue.INSStatus;
    this.installmentForDisplay.INSValue = formValue.INSValue;
    this.installmentForDisplay.INSPayedValue = formValue.INSPayedValue;
    this.installmentForDisplay.INSDueDate = formValue.dueDate;
    this.installmentForDisplay.INSPayDate = formValue.payDate;
    this.installmentForDisplay.INSPersonPayName = formValue.INSPersonPayName;
    this.installmentForDisplay.INSNotes = formValue.INSNotes;
    this.installmentForDisplay.RowConfirm = formValue.RowConfirm;
    this.installmentForDisplay.RowDelete = formValue.RowDelete;
    this.installmentForDisplay.RowStatus = formValue.RowStatus;
    this.installmentForDisplay.contract_KeyField = formValue.contract_KeyField;
    this.installmentForDisplay.branch_KeyField = formValue.branch_KeyField;
    this.installmentForDisplay.owner_KeyField = formValue.owner_KeyField;
    this.installmentForDisplay.build_KeyField = formValue.build_KeyField;
    this.installmentForDisplay.unit_KeyField = formValue.unit_KeyField;
    this.installmentForDisplay.customer_KeyField = formValue.customer_KeyField;
    
}
// ===============================================================
// =============================================================================
getInstallmentsPerContract(comId: number, periorty: number, id: number) {
  this._contractService.getInstallmentsPerContract(comId, periorty, id ).subscribe(
    responseInstallment => {
      this.contractInstallmentsArray = responseInstallment;
    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ==============================================================
remove(codeId) {
  if(confirm(this.askToDeletedMsg)) {

    this._contractService.deleteInstallment(codeId)
    .subscribe(() =>
    {
      this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      this.getInstallmentsPerContract(this.curCOMId,this.account.periorty,codeId)
    })

  }

}
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
