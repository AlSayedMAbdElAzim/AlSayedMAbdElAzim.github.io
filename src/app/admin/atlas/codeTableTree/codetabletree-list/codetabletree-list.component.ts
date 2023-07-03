import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { CodetabletreeService } from 'src/app/services/codetabletree.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { CodeTableTree } from 'src/app/models/codetabletree';
import { LocalService } from 'src/app/services/local.service';
import { NavigationEnd, ActivatedRoute } from '@angular/router';
import { CodeTableTreeConstants } from 'src/app/constants/app-constant';
import { CodetabletreeDialogComponent } from '../codetabletree-dialog/codetabletree-dialog.component';

import { AppSettings, Settings } from 'src/app/app.settings';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

declare let $ : any;

@Component({
  selector: 'app-codetabletree-list',
  templateUrl: './codetabletree-list.component.html',
  styleUrls: ['./codetabletree-list.component.scss']
})
export class CodetabletreeListComponent implements OnInit {
  public currentRowCTTArray: CodeTableTree[] = [];
  public allCTTArray:CodeTableTree[] = [];
  public parentsCTTArray:CodeTableTree[] = [];
  public relatedCTTArray:CodeTableTree[] = [];
  public levelOneCTTArray:CodeTableTree[] = [];

  public page: any;
  public count = 6;

  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription;
  private arguToComponent: any;
  public settings:Settings;

  constructor(private localStore: LocalService,
              private global: GlobalService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private _codesService:CodetabletreeService,
              public snackBar: MatSnackBar,
              public translateService: TranslateService,
              private fb:FormBuilder,
              public dialog: MatDialog,
              public appSettings:AppSettings) {
                this.settings = this.appSettings.settings;
  }

  // =================Start New version========================
    //========================//
    parentID: number ;
    parentCTT ;
    relatedCTT ;
    //===============================//
    ngOnInit() {
      this.userSUb = this.global.user.subscribe(
        me => { this.account = me; }
      );
      if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
        this.global.me = JSON.parse(this.localStore.getItem('account'));

        this.prepareMsgLanguage() ;  //  for translation

      } else {
        this.router.navigate(['/sign-in']);
      }

  // ======================================================================
  this.activatedRoute.data.subscribe(argumentSend => {
    this.parentCTT = argumentSend.parentCTT ;
    this.relatedCTT = argumentSend.relatedCTT ;

    this.getCodeTableTreePerParent(this.curCOMId, this.account.periorty);
    this.getAllCodeTableTree(this.curCOMId, this.account.periorty);
    this.getCodeTableTreeLevelOne(this.curCOMId, this.account.periorty);

    if ( this.parentCTT ){
      this.getCodeTableTreePerCode(this.curCOMId, this.account.periorty);
    }
    if ( this.relatedCTT ){
      this.getCodeTableTreePerRelated(this.curCOMId, this.account.periorty );
    }
  })
    }
  // ===================================================
  public onPageChanged(event){
    this.page = event;
    window.scrollTo(0,0);
  }
  // =====================================================
  public openCategoryDialog(data:any){

    const dialogRef = this.dialog.open(CodetabletreeDialogComponent, {
      data: {
        cttRow: data,
        parentID: this.parentID,
        parentCTTValue: this.parentCTT,
        relatedCTTValue: this.relatedCTT,
        parentCTT: this.levelOneCTTArray,
        relatedCTT: this.relatedCTTArray
      },
      panelClass: ['theme-dialog'],
      autoFocus: false,
      direction: (this.settings.rtl) ? 'rtl' : 'ltr'
    });
    dialogRef.afterClosed().subscribe(cttRow => {
      if(cttRow){
        const index: number = this.allCTTArray.findIndex(x => x.id == cttRow.id);
        if(index !== -1){
            this._codesService.editCode(cttRow, cttRow.id)
            .subscribe(res=>{
              this.snackBar.open('تم تعديل الكود', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
              this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)
            },error=>{
              this.snackBar.open('خطأ في تعديل الكود', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
            }
            )
        }
        else{
          let maxId=Math.max.apply(Math, this.allCTTArray.map(function(o){return o.id;}))

          cttRow.id = maxId + 1;
          this._codesService.addCodeTableTree(cttRow)
          .subscribe(res=>{
            this.snackBar.open('تم إضافة الكود', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
            this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)

        },error=>{
          this.snackBar.open('خطأ في إضافة الكود', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
        )

        }

      }
    });
  }
// =============================================================================
getAllCodeTableTree(comId: number, periorty: number) {
  this._codesService.getAllCodeTableTree(comId, periorty ).subscribe(
    responseMainCat => {
      this.allCTTArray = responseMainCat;
    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ==============================================================
getCodeTableTreeLevelOne(comId: number, periorty: number) {
  this._codesService.getLevelOne(comId, periorty ).subscribe(
    responseMainCat => {
      this.levelOneCTTArray = responseMainCat;
    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ==============================================================
getCodeTableTreePerCode(comId: number, periorty: number) {
  this._codesService.getRowPerCode(comId, periorty, this.parentCTT ).subscribe(
    responseMainCat => {
      this.parentID = responseMainCat[0]['id'] ;
      this.currentRowCTTArray = responseMainCat;

    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ==============================================================
getCodeTableTreePerParent(comId: number, periorty: number) {
  this._codesService.getSubForParent(comId, periorty, this.parentCTT ).subscribe(
    responseMainCat => {
      this.parentsCTTArray = responseMainCat;
    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ==============================================================
getCodeTableTreePerRelated(comId: number, periorty: number) {
  this._codesService.getSubForParent(comId, periorty, this.relatedCTT ).subscribe(
    responseMainCat => {
      this.relatedCTTArray = responseMainCat;
    },
    error => {
      this.snackBar.open( this.errorRetrieveMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// =============================================================================
remove(codeId) {
  // if(confirm(this.askToDeletedMsg)) {    
  // }
  // -----------------------------------------
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    maxWidth: "400px",
    data: {
      title: this.deletedTitleMsg,
      message: this.askToDeletedMsg
    }
  }); 
  dialogRef.afterClosed().subscribe(dialogResult => { 
    if(dialogResult){
      this._codesService.deleteCode(codeId)
    .subscribe(() =>
    {
      this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)
    })
    } 
  });

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
