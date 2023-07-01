import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';

import { AppSettings, Settings } from 'src/app/app.settings';
// import { Units } from 'src/app/models/units' ;
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
                // public dialog: MatDialog,
                public paymentService:PaymentsService,
                private router: Router,
                private global: GlobalService,
                private localStore: LocalService,
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

          //this.prepareMsgLanguage() ;  //  for translation
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
public removeDocument(contractId: number){
  this.paymentService.deleteDocument(contractId).subscribe(user => this.getDocuments());
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
  this.router.navigate(["/payments/receivable-add/"]);
}

}

// this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
