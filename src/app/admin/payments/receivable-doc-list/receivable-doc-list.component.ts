import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';
import { PayDocument } from 'src/app/models/paymentDocument' ;
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { PaymentsService } from 'src/app/admin/payments/payments.service' ;
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';

import { InstallmentComponent } from 'src/app/admin/contracts/rentContracts/installment/installment.component';
import { ContractsService } from 'src/app/admin/contracts/contracts.service';
import { TranslateService } from '@ngx-translate/core';

import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-receivable-doc-list',
  templateUrl: './receivable-doc-list.component.html',
  styleUrls: ['./receivable-doc-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ PaymentsService ]
})
export class ReceivableDocListComponent {
    public documentsAll: PayDocument[];
    public searchText: string;
    public page:any;
    public settings: Settings;

    curCOMId: number = environment.comid;
    account: User = new User();
    userSUb: Subscription;

    public count = 4;

    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public paymentService:PaymentsService,
                private router: Router,
                private global: GlobalService,
                private localStore: LocalService,
                private contractService: ContractsService,
                public translateService: TranslateService,
                public snackBar: MatSnackBar){
        this.settings = this.appSettings.settings;
    }
// ===============================================================
    ngOnInit() {
        this.userSUb = this.global.user.subscribe(
          me => { this.account = me; }
        );
        if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
          this.global.me = JSON.parse(this.localStore.getItem('account'));
          
          this.prepareMsgLanguage() ;  //  for translation
          
          this.getDocuments();


        } else {
          this.router.navigate(['/sign-in']);
        }
    }
// ================================================================
    public getDocuments(): void {
        this.documentsAll = null; //for show spinner each time
        this.paymentService.getAllReceivableDocuments(this.curCOMId, this.account.periorty)
        .subscribe(builds => this.documentsAll = builds);
    }
// ===========================================================
oneDocValue ;
curInstallmentValue;
curInstallmentPayedValue;
public removeDocument(contractId: number){
  // if(confirm(this.askToDeletedMsg)) {    
  // }
  // ------------------------
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    maxWidth: "400px",
    data: {
      title: this.deletedTitleMsg,
      message: this.askToDeletedMsg
    }
  }); 
  dialogRef.afterClosed().subscribe(dialogResult => { 
    if(dialogResult){
      this.paymentService.getOneDocs(contractId).subscribe(doc => {
        if (doc.installment_KeyField != null){
          this.oneDocValue = doc.PDOValue ;
          this.contractService.getOneInstallment(doc.installment_KeyField).subscribe(insta => {
            this.curInstallmentValue = insta['INSValue'] ;
            this.curInstallmentPayedValue = insta['INSPayedValue'] ;
            if(this.curInstallmentValue == null) {this.curInstallmentValue = 0.0 ;}
            if(this.curInstallmentPayedValue == null) {this.curInstallmentPayedValue = 0.0 ;}
  
            this.manageInstallmetPayedValue(doc.installment_KeyField, this.curInstallmentValue, this.curInstallmentPayedValue, this.oneDocValue)
          });
        
        }
      });
      this.paymentService.deleteDocument(contractId).subscribe(docs => this.getDocuments());
    } 
  });
  // -------------------------
}
// ===========================================================
// =================================================================================
insStatus ;
manageInstallmetPayedValue(installmentId: number, installmentValue: number, installmentPayedValue: number, docPayedValue: number){
  if(installmentPayedValue == null){installmentPayedValue = 0.0}
  if(docPayedValue == null){docPayedValue = 0.0}
  if(installmentValue == null){installmentValue = 0.0}
  let totalPayed = +installmentPayedValue - +docPayedValue ;

  // console.log("===installmentPayedValue:: "+ installmentPayedValue);
  // console.log("===docPayedValue:: "+ docPayedValue);
  // console.log("===totalPayed:: "+ totalPayed);
  if ( (totalPayed) <= 0 ) { totalPayed = 0 ;}
  if ( (totalPayed) == 0 ){ this.insStatus = 'N' ;}
  else { this.insStatus = 'T' ;}

  let installData = {
    id: installmentId,
    INSStatus: this.insStatus,
    INSPayedValue: totalPayed
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
// ===============================================================
    public onPageChanged(event){
        this.page = event;
        this.getDocuments();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoNewDocument(){
  this.router.navigate(["/payments/receivable-add/"]);
}
// ====================================================================
errorRetrieveMsg ;
askToDeletedMsg ;
deletedMsg ;
deletedTitleMsg;
prepareMsgLanguage(){
  this.translateService.get('MESSAGE.RETRIEVE_ERROR', ).subscribe((res: string) => {
    this.errorRetrieveMsg = res ;  });
  this.translateService.get('MESSAGE.SURE_DELETE', ).subscribe((res: string) => {
    this.askToDeletedMsg = res ;  });
  this.translateService.get('MESSAGE.DELETED', ).subscribe((res: string) => {
    this.deletedMsg = res ;  });
  this.translateService.get('MESSAGE.ConfirmAction', ).subscribe((res: string) => {
    this.deletedTitleMsg = res ;  });

}
// ====================================================================
}

// this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
