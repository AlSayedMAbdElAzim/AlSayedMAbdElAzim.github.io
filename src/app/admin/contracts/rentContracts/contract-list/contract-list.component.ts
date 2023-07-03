import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';
import { RentContract } from 'src/app/models/rentContract' ;
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ContractsService } from 'src/app/admin/contracts/contracts.service' ;
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';
import { TranslateService } from '@ngx-translate/core';

import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ ContractsService ]
})
export class ContractListComponent {

    public contractsAll: RentContract[];
    public searchText: string;
    public page:any;
    public settings: Settings;

    curCOMId: number = environment.comid;
    account: User = new User();
    userSUb: Subscription;

    public count = 4;

    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public contractService:ContractsService,
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
          this.getContracts();


        } else {
          this.router.navigate(['/sign-in']);
        }
    }
// ================================================================
    public getContracts(): void {
        this.contractsAll = null; //for show spinner each time
        this.contractService.getAllContracts(this.curCOMId, this.account.periorty)
        .subscribe(builds => this.contractsAll = builds);
    }
// ===========================================================
public removeContract(contractId: number){
  // if(confirm(this.askToDeletedMsg)) {
  //   this.contractService.deleteContract(contractId).subscribe(user => this.getContracts());
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
      this.contractService.deleteContract(contractId).subscribe(user => this.getContracts());    
    } 
  }); 

}
// ===========================================================
public contractInstallments(contractId: number){
  // let dialogRef = this.dialog.open(InstallmentComponent, {
  //   data: contractId
  // });

  // dialogRef.afterClosed().subscribe((result) => {
  // });

}
// ===============================================================
    public onPageChanged(event){
        this.page = event;
        this.getContracts();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoNewContract(){
  this.router.navigate(["/contracts/contract-add/"]);
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
