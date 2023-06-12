import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import { LocalService } from 'src/app/services/local.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalService } from 'src/app/services/global.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { oneUser } from 'src/app/models/userForEdit';
import { Subscription } from 'rxjs';
import { StaffService } from 'src/app/services/staff.service';
import { TranslateService } from '@ngx-translate/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {
  loginForm: UntypedFormGroup;
  registerForm: UntypedFormGroup;

  curCOMId: number = environment.comid;
  curBraId : number = environment.braid;

  account: User = new User();
  userSUb: Subscription;

  newUser:User;
  oneuser:oneUser;

  userPic;
  userCode;

  constructor(public formBuilder: UntypedFormBuilder,
              public router:Router,
              public snackBar: MatSnackBar,
              private localStore: LocalService,
              private userService: UserService,
              private global: GlobalService,
              private staff:StaffService,
              public translateService: TranslateService ) { }
  // ==================================================================
  accountID ;
  loggedInMsg ;
  notLoggedInMsg ;
  registeredMsg;
  notRegisteredMsg;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // 'email': ['', Validators.compose([Validators.required, emailValidator])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.registerForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'first_name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});

    // // -------------Check if current user Connected-------------------------
    // if (this.localStore.getItem('token') && this.localStore.getItem('account') ) {

    //   var values = JSON.parse(this.localStore.getItem("account")) ;
    //   this.accountID = values['id'] ;
    //   this.getOneUser(this.accountID) ;

    //   // this.global.me = JSON.parse(this.localStore.getItem('account') );
    //   this.router.navigate(['/']);
    // }
    // // ----------------------------------------------------------------------

    // this.prepareMsgLanguage() ;

    this.setInitialValues();
  }
  // ==================================================================
  prepareMsgLanguage(){
    this.translateService.get('MESSAGE.LOGGEDIN', ).subscribe((res: string) => {
      this.loggedInMsg = res ;
      });
      this.translateService.get('MESSAGE.NOTLOGGEDIN', ).subscribe((res: string) => {
        this.notLoggedInMsg = res ;
        });
      this.translateService.get('MESSAGE.REGISTERD', ).subscribe((res: string) => {
        this.registeredMsg = res ;
        });
      this.translateService.get('MESSAGE.NOTREGISTERD', ).subscribe((res: string) => {
        this.notRegisteredMsg = res ;
        });

  }
  // ==================================================================
  getOneUser(id:number)
    {
      this.staff.getOneUserbyId(id).subscribe((oneUser:User)=>{
      // this.userPic=oneUser.userPicture;
      // this.userCode=oneUser.UserCode;
      this.global.me = oneUser ;
      console.log(oneUser['userPicture']);
      })
    }
  // ==================================================================
  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      // console.log("========this.loginForm=======");
      // console.log(this.loginForm.value);
      // console.log("========this.loginForm username=======");
      // console.log(this.loginForm.value['username']);
      // // this.router.navigate(['/']);
      // -----------------------------------------------------
      this.userService.login(this.loginForm).subscribe(
        response => {
          this.localStore.setItem('token', response['token']);
          this.global.me = response['user'];
          this.global.userLoggedIn = true ;
          this.prepareMsgLanguage() ;

          // this.snackBar.open('You are logged in!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          this.snackBar.open(this.loggedInMsg , '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          this.router.navigate(['/']);
        },
        error => {
          this.global.userLoggedIn = false ;
          this.prepareMsgLanguage() ;

          // this.snackBar.open('Not logged in!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
          this.snackBar.open(this.notLoggedInMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
          this.router.navigate(['/sign-in']);
        }
      );
      // -----------------------------------------------------
    }
  }
  // ==================================================================

  public onRegisterFormSubmit(values:Object):void {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm).subscribe(
        response => {
          // this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          this.snackBar.open(this.registeredMsg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
          this.router.navigate(['/sign-in']);
        },
        error => {
          console.log('error', error) ;
          this.snackBar.open(this.notRegisteredMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
      );
    }
    else{
      console.log("this.registerForm not valid");
      this.snackBar.open(this.notRegisteredMsg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  }
  // ==================================================================
  setInitialValues(){
    this.newUser = {
      id : null ,
      username :  ""  ,
      UserCode : null ,
      first_name :  ""  ,
      last_name :  ""  ,
      UserBirthDate :  null  ,
      UserMobile : "" ,
      email : ""   ,
      is_superuser : false ,
      is_staff : false ,
      is_active : true ,
      is_employee :  "T"  ,
      periorty : 0 ,
      COMId : this.curCOMId ,
      branch_KeyField: null ,  // this.curBraId,
      userPicture : null ,
      gender :  ""  ,
      password:"",
      repassword:""
    }
  }
  // ============================
// map function
// ============================

mapRegisterFormTo_UserClass()
{
  this.newUser.username=this.registerForm.value.username;
  // this.newUser.first_name=this.registerForm.value.first_name;
  // this.newUser.last_name=this.registerForm.value.last_name;
  // this.newUser.UserMobile=this.registerForm.value.UserMobile;
  // this.newUser.gender=this.registerForm.value.gender;
  // this.newUser.UserBirthDate=this.registerForm.value.UserBirthDate;
  // this.newUser.branch_KeyField=this.registerForm.value.branch_KeyField;
  this.newUser.email=this.registerForm.value.email;
  this.newUser.password=this.registerForm.value.password;
  this.newUser.repassword=this.registerForm.value.confirmPassword;
  // this.newUser.userPicture=this.registerForm.value.userPicture;
}
// ================================
// ==============================
mapToOneUser()
{
  this.oneuser.username=this.registerForm.value.username;
  // this.oneuser.first_name=this.registerForm.value.first_name;
  // this.oneuser.last_name=this.registerForm.value.last_name;
  // this.oneuser.UserMobile=this.registerForm.value.UserMobile;
  // this.oneuser.gender=this.registerForm.value.gender;
  // this.oneuser.UserBirthDate=this.registerForm.value.UserBirthDate;
  // this.oneuser.branch_KeyField=this.registerForm.value.branch_KeyField;
  this.oneuser.email=this.registerForm.value.email;

}
//===============================================================================//
}
