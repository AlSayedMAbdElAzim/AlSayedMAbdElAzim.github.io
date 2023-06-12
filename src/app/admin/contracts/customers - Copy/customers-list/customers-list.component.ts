import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { Tenant, TenantProfile, TenantContacts, TenantSocial, TenantSettings } from 'src/app/models/customerForDisplay';
import { UsersService } from 'src/app/admin/users/users.service';
import { CustomersDialogComponent } from '../customers-dialog/customers-dialog.component';
import { Customer } from 'src/app/models/customer' ;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]  
})
export class CustomersListComponent implements OnInit {

    public users: Tenant[];
    public curTenant: Customer ;
    public searchText: string;
    public page:any;
    public settings: Settings;
    constructor(public appSettings:AppSettings, 
                public dialog: MatDialog,
                public usersService:UsersService){
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {
        // this.getTenants();     
        this.initializeCustomer() ;    
    }

    public getTenants(): void {
        this.users = null; //for show spinner each time
        this.usersService.getTenants().subscribe(users => this.users = users);    
    }
    public addTenant(user:Tenant){
      console.log("====inside addTenant== for this.curTenant===");
      
      this.fromUserToCustomer(user);
      console.log(this.curTenant) ;
        this.usersService.addTenant(user).subscribe(user => this.getTenants());
    }
    public updateTenant(user:Tenant){
        console.log("====inside updateTenant=====");
        this.usersService.updateTenant(user).subscribe(user => this.getTenants());
    }
    public deleteTenant(user:Tenant){
       this.usersService.deleteUser(user.id).subscribe(user => this.getTenants());
    }


    public onPageChanged(event){
        this.page = event;
        this.getTenants();
        window.scrollTo(0,0); 
    }

    public openTenantDialog(user: Tenant){
        let dialogRef = this.dialog.open(CustomersDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe((user: Tenant) => {
            if (user) {
                (user.id) ? this.updateTenant(user) : this.addTenant(user);
            }
        });
    }

    // --------------------------------------------------------------------
    // --------------------------------------------------------------------
    public initializeCustomer(){      
      this.curTenant.id =null ;
      this.curTenant.Userid =null ;
      this.curTenant.COMId =null ;
      this.curTenant.RowConfirm =null ;
      this.curTenant.RowDelete =null ;
      this.curTenant.RowStatus =null ;
      this.curTenant.CUSLangtitude =null ;
      this.curTenant.CUSAltitude =null ;
      this.curTenant.CUSNotes =null ;
      this.curTenant.EntryUser =null ;
      this.curTenant.Related_CUSKeyField =null ;
      this.curTenant.CUSCode =null ;
      this.curTenant.CUSName =null ;
      this.curTenant.CUSPic =null ;
      this.curTenant.CUSGender =null ;
      this.curTenant.CUSBirthDate =null ;
      this.curTenant.CUSMobile =null ;
      this.curTenant.CUSEmail =null ;
      this.curTenant.CUSActive =null ;
      this.curTenant.CUSAddress =null ;
      this.curTenant.CUSAddressDescription =null ;
      this.curTenant.Country_CTTKeyField =null ;
      this.curTenant.Governorate_CTTKeyField =null ;
      this.curTenant.City_CTTKeyField =null ;
      this.curTenant.Area_CTTKeyField =null ;
      this.curTenant.Group_CTTKeyField =null ;
      this.curTenant.CUSusername =null ;
      this.curTenant.CUSFirstName =null ;
      this.curTenant.CUSLastName =null ;
    }
    // --------------------------------------------------------------------
    public fromUserToCustomer(user: Tenant){
      // this.initializeCustomer() ;
      this.curTenant.id = user.id ;

      // this.curTenant.Userid = user.
      // this.curTenant.COMId = user.
      // this.curTenant.RowConfirm = user.
      this.curTenant.RowDelete = user.settings.isDeleted ? 1 : 0 ;
      // this.curTenant.RowStatus = user.
      // this.curTenant.CUSLangtitude = user.
      // this.curTenant.CUSAltitude = user.
      // this.curTenant.CUSNotes = user.
      // this.curTenant.EntryUser = user.
      // this.curTenant.Related_CUSKeyField = user.
      this.curTenant.CUSCode = user.code ;
      // this.curTenant.CUSName = user.
      // this.curTenant.CUSPic = user.profile.image ;
      this.curTenant.CUSGender = user.profile.gender ;
      this.curTenant.CUSBirthDate = user.profile.birthday ;
      this.curTenant.CUSMobile = user.contacts.phone;
      this.curTenant.CUSEmail = user.contacts.email;
      this.curTenant.CUSActive = user.settings.isActive? 'T' : 'F' ;
      this.curTenant.CUSAddress = user.contacts.address;
      // this.curTenant.CUSAddressDescription = user.
      // this.curTenant.Country_CTTKeyField = user.
      // this.curTenant.Governorate_CTTKeyField = user.
      // this.curTenant.City_CTTKeyField = user.
      // this.curTenant.Area_CTTKeyField = user.
      // this.curTenant.Group_CTTKeyField = user.
      this.curTenant.CUSusername = user.username ;
      this.curTenant.CUSFirstName = user.profile.name ;
      this.curTenant.CUSLastName = user.profile.surname ;
    }


}