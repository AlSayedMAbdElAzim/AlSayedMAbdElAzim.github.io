import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';
import { Tenant, TenantProfile, TenantContacts, TenantSocial, TenantSettings } from 'src/app/models/customerForDisplay';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';
import { Customer } from 'src/app/models/customer' ;
// =======================================================
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CodetabletreeService } from 'src/app/services/codetabletree.service';
import { CustomerService } from '../customer.service';
import { GlobalService } from 'src/app/services/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { DatePipe } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ CustomerService, DatePipe ]
})
export class CustomersListComponent implements OnInit {
    customerDisplayed: Tenant[];
    public users: Customer[];
    public curTenant: Customer = new Customer() ;
    public searchText: string;
    public page:any;
    public settings: Settings;

    curCOMId: number = environment.comid;
    account: User = new User();
    userSUb: Subscription;

    public count = 4;

    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public usersService:CustomerService,
                private router: Router,
                private global: GlobalService,
                private localStore: LocalService,
                public snackBar: MatSnackBar,
                public translateService: TranslateService,
                private datePipe: DatePipe){
        this.settings = this.appSettings.settings;
    }
// ===============================================================
defaultCusImage=new ApiConstant().noImage;

CusImageToUpload:File=null;
handelCUSImgInput(file:FileList)
{
this.CusImageToUpload=file.item(0);
//show image
var CUSImgreader=new FileReader();
CUSImgreader.onload=(event:any)=>{
                                    this.defaultCusImage=event.target.result;
                                  }
CUSImgreader.readAsDataURL(this.CusImageToUpload);
}
// ===============================================================
    ngOnInit() {
        this.userSUb = this.global.user.subscribe(
          me => { this.account = me; }
        );
        if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
          this.global.me = JSON.parse(this.localStore.getItem('account'));

          this.prepareMsgLanguage() ;  //  for translation
          this.getTenants();


        } else {
          this.router.navigate(['/sign-in']);
        }
    }
// ================================================================
    public getTenants(): void {
        this.users = null; //for show spinner each time
        // this.usersService.getTenants().subscribe(users => this.users = users);
        this.usersService.getCustomers(this.curCOMId, this.account.periorty).subscribe(users => this.users = users);
    }
// ===============================================================
    public addTenant(user:Customer){
      console.log("====inside addTenant=====");
      console.log(user) ;
        // // this.usersService.addCustomer(user, this.CusImageToUpload).subscribe(user => this.getTenants());
        this.usersService.addOneCustomer(user).subscribe(user => this.getTenants());
    }
// ===============================================================
    public updateTenant(user:Customer){
        console.log("====inside updateTenant=====");
        console.log(user) ;
        // this.usersService.editCustomer(user, this.CusImageToUpload).subscribe(user => this.getTenants());
        this.usersService.editCustomer(user, this.CusImageToUpload, this.CusImageToUpload).subscribe(user => this.getTenants());
    }
// =================================================================
    public deleteTenant(user:Customer){
      // if(confirm(this.askToDeletedMsg)) {
      //   this.usersService.deleteCustomer(user.id).subscribe(user => this.getTenants());
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
          this.usersService.deleteCustomer(user.id).subscribe(user => this.getTenants());
        } 
      }); 
    }
// ===========================================================
public removeTenant(tenId: number){
  // if(confirm(this.askToDeletedMsg)) {
  //   this.usersService.deleteCustomer(tenId).subscribe(user => this.getTenants());
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
      this.usersService.deleteCustomer(tenId).subscribe(user => this.getTenants());
    } 
  }); 
}
// ===========================================================
    public onPageChanged(event){
        this.page = event;
        this.getTenants();
        window.scrollTo(0,0);
    }
// ===================================================================
gotoTenantDisplay(rowId: number){
  console.log("===**gotoTenantDisplay**=== " + rowId);
  this.router.navigate(["/contracts/tenant-add/"+rowId]);
}
// ===================================================================
gotoNewTenant(){
  this.router.navigate(["/contracts/tenant-add/"]);
}
// ===================================================================
    public openTenantDialog(user: Tenant){
        let dialogRef = this.dialog.open(CustomersDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe((user: Tenant) => {
            if (user) {
              console.log("=====if user True:: ==============");
              console.log(user) ;
              this.curTenant = new Customer() ;
              console.log(this.curTenant) ;
                this.fromUserToCustomer(user);
                console.log(this.curTenant) ;
                (user.id) ? this.updateTenant(this.curTenant) : this.addTenant(this.curTenant);
                // (user.id) ? this.updateTenant(user) : this.addTenant(user);
            }
            else{
              console.log("=====if user False:: ==============");
            }
        });
    }
    // --------------------------------------------------------------------
    // --------------------------------------------------------------------
    public fromUserToCustomer(user: Tenant){
      // this.handelCUSImgInput(user.profile.image[0]) ;
      this.curTenant.id = user.id ;

      // this.curTenant.Userid = user.Userid ;
      // this.curTenant.COMId = user.COMId ;
      // this.curTenant.RowConfirm = user.settings.RowConfirm ;
      this.curTenant.RowDelete = user.settings.isDeleted ? 1 : 0 ;
      // this.curTenant.RowStatus = user.settings.RowStatus ;
      // this.curTenant.CUSLangtitude = user.contacts.CUSLangtitude ;
      // this.curTenant.CUSAltitude = user.contacts.CUSAltitude ;
      // this.curTenant.CUSNotes = user.
      // this.curTenant.EntryUser = user.
      // this.curTenant.Related_CUSKeyField = user.
      this.curTenant.CUSCode = user.code ;

      // this.curTenant.CUSName = user.
      this.curTenant.CUSPic = user.image ; // this.CusImageToUpload ;
      this.curTenant.CUSGender = user.profile.gender ;
      // formatDate(value: user.profile.birthday, format: 'YYYY-MM-DD') ;
      console.log("====Date====");
      console.log(user.profile.birthday);
      // console.log(new Date(this.datePipe.transform(user.profile.birthday, 'YYYY-MM-DD')) );
      this.curTenant.CUSBirthDate = user.profile.birthday ;
      this.curTenant.CUSMobile = user.mobile;
      this.curTenant.CUSEmail = user.contacts.email;
      this.curTenant.CUSActive = user.settings.isActive? 'T' : 'F' ;
      this.curTenant.CUSAddress = user.contacts.address;
      // this.curTenant.CUSAddressDescription = user.
      this.curTenant.Country_CTTKeyField = user.contacts.country ;
      // this.curTenant.Governorate_CTTKeyField = user.
      // this.curTenant.City_CTTKeyField = user.
      // this.curTenant.Area_CTTKeyField = user.
      // this.curTenant.Group_CTTKeyField = user.
      this.curTenant.CUSusername = user.username ;
      this.curTenant.CUSFirstName = user.firstname ;
      this.curTenant.CUSLastName = user.lastname ;
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
