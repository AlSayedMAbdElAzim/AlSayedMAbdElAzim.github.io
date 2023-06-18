import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Employee, UserWork, UserContacts, UserSocial, UserSettings } from '../employeeForDisplay';
import { oneUser } from 'src/app/models/userForEdit' ;

import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { LocalService } from 'src/app/services/local.service';
import { CodeTableTreeConstants } from 'src/app/constants/app-constant';
import { ApiConstant } from 'src/app/constants/api-constant';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent {
  // curCOMId: number = environment.comid;
  // account: User = new User();
  // userSUb: Subscription;
  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<EmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: oneUser,
              // private localStore: LocalService,
              // private global: GlobalService,
              public fb: UntypedFormBuilder) { }
// =============================================================================
// ================================================================
defaultCusImage=new ApiConstant().noImage;
CusImageToUpload:File=null;
// defaultIDImage=new ApiConstant().noImage;
// IDImageToUpload:File=null;
// ========================================================
handelEmpImgInput(file:FileList)
{
  this.CusImageToUpload=file.item(0);
  var CUSImgreader=new FileReader();
  CUSImgreader.onload=(event:any)=>{
                                      this.defaultCusImage=event.target.result;
                                    }
  CUSImgreader.readAsDataURL(this.CusImageToUpload);
}
// ===============================================================
  ngOnInit() {
// ------------------------------------------------------------------------
          this.form = this.fb.group({
            id: null,
            username: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            UserCode: [null, Validators.compose([Validators.required, Validators.minLength(1)])],

            first_name: null,
            last_name: null,
            UserBirthDate: null,
            gender: null,
            userPicture: null,

            work: this.fb.group({
              userJobName: null,
              is_superuser: false,
              is_staff: false,
              is_active: false,
              is_employee: false
            }),
            contacts: this.fb.group({
              email: null,
              UserMobile: null,
              userAddress: null
            }),
            social: this.fb.group({
              userFacebook: null,
              userTwitter: null,
              userGoogle: null
            }),
            settings: this.fb.group({
              isActive: false,
              isDeleted: false,
              EntryDate: null,
              joinedDate: null
            })
          });
// -------------------------------------------------------------------------
      if(this.user){
        // this.form.setValue(this.user);
        this.fillForm(this.user) ;
      }
      else{
        this.user = new oneUser();
        // this.user.profile = new UserProfile();
        // this.user.work = new UserWork();
        // this.user.contacts = new UserContacts();
        // this.user.social = new UserSocial();
        // this.user.settings = new UserSettings();
      }
  }

// -------------------------------------------------------------------------
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
is_Employee: Boolean ;
fillForm(curUser: oneUser){
  // if (curUser.BUIActive == 'T') {this.is_active = true;}
  // else { this.is_active = false; }
  // ==========================================================
  // if (curUser.Country_CTTKeyField != null){
  //   this.getGovernoratePerCountry(this.curCOMId,this.account.periorty, curUser.Country_CTTKeyField);
  // }
  // ==========================================================
  // ==========================================================
  if(curUser.userPicture!=null)
  {
    this.defaultCusImage = curUser.userPicture as unknown as string;
  }else{
    this.defaultCusImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if (curUser.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }
  // ==========================================================
  if (curUser.is_employee == "T") {this.is_Employee = true;}
  else { this.is_Employee = false; }
  // ==========================================================

  this.form.patchValue({
    id: curUser.id,
    username: curUser.username,
    UserCode: curUser.UserCode,

      first_name: curUser.first_name,
      last_name: curUser.last_name,
      UserBirthDate: curUser.UserBirthDate,
      gender: curUser.gender,
      userPicture: curUser.userPicture,

    work: {
      userJobName: curUser.userJobName,
      is_superuser: curUser.is_superuser,
      is_staff: curUser.is_staff,
      is_active: curUser.is_active,
      is_employee: this.is_Employee,
    },
    contacts: {
      email: curUser.email,
      UserMobile: curUser.UserMobile,
      userAddress: curUser.userAddress,
    },
    settings: {
      // isActive: curUser.is_active,
      isDeleted: this.is_delete,
      EntryDate: curUser.EntryDate,
      joinedDate: curUser.joinedDate
    }
  });
}
// ===============================================================
// ============================================================================
  close(): void {
    this.dialogRef.close();
  }

}
