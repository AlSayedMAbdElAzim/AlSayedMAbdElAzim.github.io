import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
// import { Units } from 'src/app/models/units' ;
import { RentContract } from 'src/app/models/rentContract' ;
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ContractsService } from 'src/app/admin/contracts/contracts.service' ;
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';

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
                // public dialog: MatDialog,
                public contractService:ContractsService,
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
  this.contractService.deleteContract(contractId).subscribe(user => this.getContracts());
}
// ===========================================================
    public onPageChanged(event){
        this.page = event;
        this.getContracts();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoNewContract(){
  this.router.navigate(["/contracts/contract-add/"]);
}

}

// this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
