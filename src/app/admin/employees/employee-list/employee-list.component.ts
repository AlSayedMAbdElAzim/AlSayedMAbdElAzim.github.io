import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettings, Settings } from 'src/app/app.settings';
import { Employee, UserWork, UserContacts, UserSocial, UserSettings } from '../employeeForDisplay';
import { UserService } from 'src/app/services/user.service';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { oneUser } from 'src/app/models/userForEdit' ;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UserService ]
})
export class EmployeeListComponent implements OnInit {

    // public emps: Employee[];
    public users: oneUser[];
    public searchText: string;
    public page:any;
    public count = 6;
    public settings: Settings;
    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public usersService:UserService){
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers(): void {
        this.users = null; //for show spinner each time
        // this.usersService.getUsers().subscribe(users => this.users = users);
        this.usersService.getAllStaff().subscribe(users => this.users = users);
    }
    public addUser(user:oneUser){
        this.usersService.registerUser(user).subscribe(user => this.getUsers());
    }
    public updateUser(user:oneUser){
        this.usersService.editUser(user).subscribe(user => this.getUsers());
    }
    public deleteUser(user:oneUser){
        this.usersService.deleteOneUser(user.id).subscribe(user => this.getUsers());
    }


    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        window.scrollTo(0,0);
    }

    public openUserDialog(user: oneUser){
        let dialogRef = this.dialog.open(EmployeeDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe((user: oneUser) => {
            if (user) {
                (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
    }

}
