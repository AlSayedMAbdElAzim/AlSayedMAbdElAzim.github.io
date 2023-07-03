import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { UserService } from 'src/app/services/user.service';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
// import { oneUser } from 'src/app/models/userForEdit' ;
import { Employee } from 'src/app/models/employee';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UserService ]
})
export class EmployeeListComponent implements OnInit {

    public users: Employee[];
    public searchText: string;
    public page:any;
    public count = 6;
    public settings: Settings;
    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public usersService:UserService){
        this.settings = this.appSettings.settings;
    }
// =======================================================
    ngOnInit() {
        this.getUsers();
    }
// ========================================================
    public getUsers(): void {
        this.users = null; //for show spinner each time
        // this.usersService.getUsers().subscribe(users => this.users = users);
        this.usersService.getAllStaff().subscribe(users => this.users = users);
    }
// =======================================================================================
    public addUser(user:Employee, emppic: File){
        console.log("====inside addUser== ===");
        this.usersService.addEmployee(user, emppic).subscribe(user => this.getUsers());
    }
// =========================================================================================
    public updateUser(user:Employee, emppic: File){
        console.log("====inside updateTenant=====");
        this.usersService.editEmployee(user, emppic).subscribe(user => this.getUsers());
    }
// ==========================================================================================
    public deleteUser(user:Employee){
        this.usersService.deleteOneUser(user.id).subscribe(user => this.getUsers());
    }
// =========================================================================================
    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        window.scrollTo(0,0);
    }
// ===========================================================================================
    public openUserDialog(user: Employee){
        let dialogRef = this.dialog.open(EmployeeDialogComponent, {
            data: user
        });
        // dialogRef.afterClosed().subscribe((user: Employee) => {
        //     if (user) {
        //         (user.id) ? this.updateUser(user) : this.addUser(user);
        //     }
        // });
        dialogRef.afterClosed().subscribe((result) => {
          if(result.event == 'Cancel'){            
          }else if(result.event == 'Patch'){            
            this.mapFormvalue_to_EmpClass(result.data);
            this.updateUser(this.unitForDisplay, result.empPic) ;
          }else if(result.event == 'Post'){            
            this.mapFormvalue_to_EmpClass(result.data);
            this.addUser(this.unitForDisplay, result.empPic) ;
          }
        });
    }
// =================================================================
empDeleted: number ;
unitForDisplay: Employee = {
  id : undefined ,
  username :  undefined  ,
  password :  undefined  ,
  UserCode : undefined ,
  first_name :  undefined  ,
  last_name :  undefined  ,
  UserBirthDate :  undefined  ,
  EntryDate :  undefined  ,
  joinedDate :  undefined  ,
  UserMobile : undefined ,
  email : undefined   ,
  is_superuser : undefined ,
  is_staff : undefined ,
  is_active : undefined ,
  is_employee :  undefined  ,
  is_teacher :  undefined  ,
  periorty : undefined ,
  COMId : undefined ,
  branch_KeyField : undefined ,
  userPicture : undefined,
  gender :  undefined  ,
  RowDelete : undefined ,
  LoginFrom :  undefined  ,
  userJobName :  undefined  ,
  userFacebook :  undefined  ,
  userTwitter :  undefined  ,
  userGoogle :  undefined  ,
  userAddress :  undefined
};
is_Employee: string ;
// =================================================================
mapFormvalue_to_EmpClass(formValue: any)
{
  console.log(formValue);
  console.log("=================formValue==========================");
  // 'en-GB'  'en-US'
  const empBirthDate = new DatePipe('en-GB').transform(formValue.UserBirthDate, 'dd/MM/yyyy')

  if (formValue.work.is_employee) {this.is_Employee = "T";}
  else { this.is_Employee = "F" ; }

  if (formValue.settings.isDeleted) {this.empDeleted = 1;}
  else { this.empDeleted = 0 ; }

    this.unitForDisplay.id= formValue.id;
    this.unitForDisplay.username= formValue.username;
    this.unitForDisplay.password= formValue.password;
    this.unitForDisplay.UserCode= formValue.UserCode;
    this.unitForDisplay.first_name= formValue.first_name;
    this.unitForDisplay.last_name= formValue.last_name;
    this.unitForDisplay.userPicture= formValue.userPicture;
    this.unitForDisplay.gender= formValue.gender;

    if (formValue.UserBirthDate != null){
      this.unitForDisplay.UserBirthDate= empBirthDate;  }

    this.unitForDisplay.userJobName= formValue.work.userJobName;
    this.unitForDisplay.is_superuser= formValue.work.is_superuser;
    this.unitForDisplay.is_staff= formValue.work.is_staff;
    this.unitForDisplay.is_active= formValue.work.is_active;
    this.unitForDisplay.is_employee= this.is_Employee;

    this.unitForDisplay.email= formValue.contacts.email;
    this.unitForDisplay.UserMobile= formValue.contacts.UserMobile;
    this.unitForDisplay.userAddress= formValue.contacts.userAddress;

    this.unitForDisplay.RowDelete = this.empDeleted ;
}
// ===============================================================
}
