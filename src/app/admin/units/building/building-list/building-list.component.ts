import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { Building } from 'src/app/models/building' ;
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
// import { UnitsService } from '../../units.service';
import { UnitsService } from 'src/app/admin/units/units.service';
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UnitsService ]
})
export class BuildingListComponent {

    public buildings: Building[];
    public curBuild: Building = new Building() ;
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
          this.getBuildings();


        } else {
          this.router.navigate(['/sign-in']);
        }
    }
// ================================================================
    public getBuildings(): void {
        this.buildings = null; //for show spinner each time
        this.unitsService.getAllBuilding(this.curCOMId, this.account.periorty)
        .subscribe(builds => this.buildings = builds);
    }
// ===========================================================
public removeBuild(tenId: number){
  this.unitsService.deleteBuilding(tenId).subscribe(user => this.getBuildings());
}
// ===========================================================
public featuresBuild(tenId: number){
  // this.unitsService.deleteBuilding(tenId).subscribe(user => this.getBuildings());
}
// ===========================================================
    public onPageChanged(event){
        this.page = event;
        this.getBuildings();
        window.scrollTo(0,0);
    }
// // ===================================================================
// gotoTenantDisplay(rowId: number){
//   console.log("===**gotoTenantDisplay**=== " + rowId);
//   this.router.navigate(["/units/building-add/"+rowId]);
// }
// ===================================================================
gotoNewBuild(){
  this.router.navigate(["/units/building-add/"]);
}
// // ===================================================================
//     public openTenantDialog(user: Tenant){
//         let dialogRef = this.dialog.open(BuildingDialogComponent, {
//             data: user
//         });
//         dialogRef.afterClosed().subscribe((user: Tenant) => {
//             if (user) {
//               console.log("=====if user True:: ==============");
//               console.log(user) ;
//               this.curBuild = new Building() ;
//               console.log(this.curBuild) ;
//                 this.fromUserToCustomer(user);
//                 console.log(this.curBuild) ;
//                 (user.id) ? this.updateTenant(this.curBuild) : this.addTenant(this.curBuild);
//                 // (user.id) ? this.updateTenant(user) : this.addTenant(user);
//             }
//             else{
//               console.log("=====if user False:: ==============");
//             }
//         });
//     }
//     // --------------------------------------------------------------------
    // --------------------------------------------------------------------
    // public fromUserToCustomer(user: Tenant){
    //   this.curBuild.id = user.id ;
    //   this.curBuild.RowDelete = user.settings.isDeleted ? 1 : 0 ;
    //   this.curBuild.CUSCode = user.code ;

    //   this.curBuild.CUSPic = user.image ;
    //   this.curBuild.CUSGender = user.profile.gender ;
    //   console.log("====Date====");
    //   console.log(user.profile.birthday);
    //   this.curBuild.CUSBirthDate = user.profile.birthday ;
    //   this.curBuild.CUSMobile = user.mobile;
    //   this.curBuild.CUSEmail = user.contacts.email;
    //   this.curBuild.CUSActive = user.settings.isActive? 'T' : 'F' ;
    //   this.curBuild.CUSAddress = user.contacts.address;
    //   this.curBuild.Country_CTTKeyField = user.contacts.country ;
    //   this.curBuild.CUSusername = user.username ;
    //   this.curBuild.CUSFirstName = user.firstname ;
    //   this.curBuild.CUSLastName = user.lastname ;
    // }
}

// this.snackBar.open(this.deletedMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
