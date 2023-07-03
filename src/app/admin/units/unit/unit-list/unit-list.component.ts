import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
// import { Building } from 'src/app/models/building' ;
import { Units } from 'src/app/models/units' ;
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
// import { UnitsService } from '../../units.service';
import { UnitsService } from 'src/app/admin/units/units.service';
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UnitsService ]
})
export class UnitListComponent {

    public unitsAll: Units[];
    public searchText: string;
    public page:any;
    public settings: Settings;

    curCOMId: number = environment.comid;
    account: User = new User();
    userSUb: Subscription;

    public count = 4;

    constructor(public appSettings:AppSettings,
                // public dialog: MatDialog,
                public unitsService:UnitsService,
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
          this.getUnits();


        } else {
          this.router.navigate(['/sign-in']);
        }
    }
// ================================================================
    public getUnits(): void {
        this.unitsAll = null; //for show spinner each time
        this.unitsService.getAllUnits(this.curCOMId, this.account.periorty)
        .subscribe(builds => this.unitsAll = builds);
    }
// ===========================================================
public removeUnit(unitId: number){
  if(confirm(this.askToDeletedMsg)) {
    this.unitsService.deleteUnit(unitId).subscribe(user => this.getUnits());
  }
}
// ===========================================================
    public onPageChanged(event){
        this.page = event;
        this.getUnits();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoNewUnit(){
  this.router.navigate(["/units/unit-add/"]);
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

// this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
