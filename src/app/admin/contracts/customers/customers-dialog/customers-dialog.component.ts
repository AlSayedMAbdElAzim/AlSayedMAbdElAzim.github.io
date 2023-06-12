import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CodetabletreeService } from 'src/app/services/codetabletree.service';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';
import { CodeTableTreeConstants } from 'src/app/constants/app-constant';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ApiConstant } from 'src/app/constants/api-constant';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.scss']
})
export class CustomersDialogComponent implements OnInit {
  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription;
  country_const: string = new CodeTableTreeConstants().Countries;

  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<CustomersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public tenant: Customer,
              private codesService: CodetabletreeService,
              public fb: UntypedFormBuilder,
              private localStore: LocalService,
              private router: Router,
                private global: GlobalService,
              public snackBar: MatSnackBar) {
                console.log('====== Constructor of Dialog:: ');
// ===============================================================================
    this.form = this.fb.group({
      id: null,
      code: [null ,Validators.required],
      username: [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      // password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      profile: this.fb.group({
        name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        surname: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        birthday: null,
        gender: null,
        image: null
      }),
      work: this.fb.group({
        company: null,
        position: null //,
        // salary: null
      }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null,
        country : [{value:null}],
        governorate : [{value:null,disabled:true}],
        city : [{value:null,disabled:true}],
        area : [{value:null,disabled:true}],
        // CUSLangtitude: null,
        // CUSAltitude: null
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        // RowConfirm: null,
        // RowStatus: null,
        isDeleted: null //,
        // registrationDate: null,
        // joinedDate: null
      })
    });
  }
// ===========================================================
  ngOnInit() {
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
      this.global.me = JSON.parse(this.localStore.getItem('account'));

      //this.prepareMsgLanguage() ;  //  for translation
      this.getCountries(this.curCOMId,this.account.periorty);
      // this.getGroups(this.curCOMId,this.account.periorty)

      if(this.tenant){
        // this.form.setValue(this.tenant);
        this.fillForm() ;
      }
      else{ this.tenant = new Customer(); }

    } else {
      this.router.navigate(['/sign-in']);
    }
    // --------------------------
  }
// ==============================================================
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
fillForm(){
  if (this.tenant.CUSActive == 'T') {this.is_active = true;}
  else { this.is_active = false; }
  // ==========================================================
  if(this.tenant.CUSPic!=null)
  {
    this.defaultCusImage = this.tenant.CUSPic as unknown as string;
  }else{
    this.defaultCusImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if (this.tenant.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }
  this.form.patchValue({
    id: this.tenant.id,
    code: this.tenant.CUSCode,
    username: this.tenant.CUSusername,
    profile: {
      name: this.tenant.CUSFirstName,
      surname: this.tenant.CUSLastName,
      birthday: this.tenant.CUSBirthDate,
      gender: this.tenant.CUSGender,
      image: this.tenant.CUSPic

    },
    work: {
      company: this.tenant.CUSGuarantor,
      position: this.tenant.CUSJobName
    },
    contacts: {
      email: this.tenant.CUSEmail,
      phone: this.tenant.CUSMobile,
      address: this.tenant.CUSAddress,
      country: this.tenant.Country_CTTKeyField,
      governorate: this.tenant.Governorate_CTTKeyField,
      city: this.tenant.City_CTTKeyField,
      area: this.tenant.Area_CTTKeyField
    },
    social: {
      facebook: this.tenant.CUSFacebook,
      twitter: this.tenant.CUSTwitter,
      google: this.tenant.CUSGoogle
    },
    settings: {
      isActive: this.is_active,
      isDeleted: this.is_delete
    }
  });
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
// ===============================================================
saveUpdate(rowId): void {
  console.log("=============saveUpdate()===============") ;
  // ====SaveNew or Update لو عاوز أعمل حاجة هنا قبل طريق الحفظ====
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====
  }

}
// =========================================================
// =========================================================
  close(): void {
    // ============Cancel عند الضغط على مفتاح===============
    this.dialogRef.close();
  }
// =============================================================
// =============================================================
getGovernorate(){

}
// ====================================================
// ====================================================
public compareFunction(o1: any, o2: any) {
  return (o1.username == o2.username && o1.code == o2.code);
}
// ===============================================
Countries=[]
getCountries(comId: number, periorty: number)
{
  this.codesService.getSubForParent(comId, periorty, this.country_const).subscribe(
    responseCountries => {
    this.Countries = responseCountries;
    console.log(responseCountries)
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الدول', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ===============================================================

}
