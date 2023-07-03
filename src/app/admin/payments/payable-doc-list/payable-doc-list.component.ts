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

// import { ContractsService } from 'src/app/admin/contracts/contracts.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payable-doc-list',
  templateUrl: './payable-doc-list.component.html',
  styleUrls: ['./payable-doc-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ PaymentsService ]
})
export class PayableDocListComponent {
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
        this.paymentService.getAllPayableDocuments(this.curCOMId, this.account.periorty)
        .subscribe(docs => this.documentsAll = docs);
    }
// ===========================================================
public removeDocument(contractId: number){
  // if(confirm(this.askToDeletedMsg)) {    
  //   this.paymentService.deleteDocument(contractId).subscribe(docs => this.getDocuments());
  // }
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    maxWidth: "400px",
    data: {
      title: this.deletedTitleMsg,
      message: this.askToDeletedMsg
    }
  }); 
  dialogRef.afterClosed().subscribe(dialogResult => { 
    if(dialogResult){
      this.paymentService.deleteDocument(contractId).subscribe(docs => this.getDocuments());
    } 
  }); 
}
// ===========================================================
// ===============================================================
    public onPageChanged(event){
        this.page = event;
        this.getDocuments();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoNewDocument(){
  this.router.navigate(["/payments/payable-add/"]);
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
