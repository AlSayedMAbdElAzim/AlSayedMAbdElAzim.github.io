import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';

import { Customer } from 'src/app/models/customer';
import { CustomerService } from '../customer.service';
import { CodetabletreeService } from 'src/app/services/codetabletree.service';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from 'src/app/services/local.service';
import { CodeTableTreeConstants } from 'src/app/constants/app-constant';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { UnitsService } from 'src/app/admin/units/units.service';
import { ApiConstant } from 'src/app/constants/api-constant';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { DatePipe } from '@angular/common';
declare let $: any;
// import { DateAdapter } from '@angular/material/core';
// import { MAT_DATE_FORMATS } from '@angular/material/core';

// export const MY_DATE_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   },
// };

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
  encapsulation: ViewEncapsulation.None
  // providers: [
    // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS } ]
})
export class CustomersDetailsComponent implements OnInit {
  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription;
  country_const: string = new CodeTableTreeConstants().Countries;

  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  public tenant: Customer = new Customer() ;
  private sub: any;
  public id:any;
  constructor(private activatedRoute: ActivatedRoute,
              private codesService: CodetabletreeService,
              private unitsService: UnitsService,
              public fb: UntypedFormBuilder,
              private localStore: LocalService,
              private _CustomerService:CustomerService,
              private router: Router,
              private global: GlobalService,
              public translateService: TranslateService,
              // private dateAdapter: DateAdapter<Date>,
              public snackBar: MatSnackBar)
              {
                // this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
               }

// ===========================================================
  ngOnInit() {
    console.log("=====**** ngOnInit.111 ****=======");
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
      this.global.me = JSON.parse(this.localStore.getItem('account'));
// ==============initialize Form======================
      this.form = this.fb.group({
        id: null,
        code: [null ,Validators.required],
        username: [{value:null,disabled:true}], // [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        firstname: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        lastname: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        image: null,
        mobile: null,
        selftype: "P",
        profile: this.fb.group({
          birthday: null,
          gender: "M",
          curbuilding: null,
          curunit: null,

        }),
        work: this.fb.group({
          company: null,
          position: null,
          nationalIDType: "F",
          nationalID: null,
          nationalIDStartDate: null,
          nationalIDEndDate: null,
          nationalIDPic: null

        }),
        contacts: this.fb.group({
          email: null,
          homephone: null,
          workphone: null,
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
          isDeleted: null //,
        }),
        docs: this.fb.group({
          docPic: null
        })
      });
// ===================================================
      this.getCountries(this.curCOMId,this.account.periorty); //====استرجاع الدول====
      this.getAllBuildings(this.curCOMId,this.account.periorty); //====استرجاع العقارات====
      // this.getGroups(this.curCOMId,this.account.periorty)
      console.log("=====**** ngOnInit.222 ****=======");

      this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية المستأجر====
        console.log(params['id']);
        console.log("=====**** ngOnInit.222 ****=======");
        if(params['id']){
          this.id = +params['id'];
          this.getTenantById(this.id);
        }
        else{ this.CUS = new Customer(); }
      });
    } else {
      this.router.navigate(['/sign-in']);
    }
    // --------------------------
  }

// ================================================================
defaultCusImage=new ApiConstant().noImage;
CusImageToUpload:File=null;
defaultIDImage=new ApiConstant().noImage;
IDImageToUpload:File=null;
// ========================================================
handelCUSImgInput(file:FileList)
{
  this.CusImageToUpload=file.item(0);
  var CUSImgreader=new FileReader();
  CUSImgreader.onload=(event:any)=>{
                                      this.defaultCusImage=event.target.result;
                                    }
  CUSImgreader.readAsDataURL(this.CusImageToUpload);
}
// ===============================================================
handelIDImgInput(file:FileList)
{
  this.IDImageToUpload=file.item(0);
  var IDImgreader=new FileReader();
  IDImgreader.onload=(event:any)=>{
    console.log("=====before=====" + this.defaultIDImage);
                                      this.defaultIDImage=event.target.result;
                                      console.log("=====after=====" + this.defaultIDImage);
                                    }
  IDImgreader.readAsDataURL(this.IDImageToUpload);

  // this.form.patchValue({ image: this.IDImageToUpload })
}
// ===============================================================
// handelCUSImgInput4(event:any) {
//   const CUSImgreader = new FileReader();
//   this.CusImageToUpload = event.target.files[0];
//   this.form.patchValue({
//     image: this.CusImageToUpload
//   })
//   if(!this.CusImageToUpload) return
//   CUSImgreader.readAsDataURL(this.CusImageToUpload);

//   CUSImgreader.onload = () => {
//     this.defaultCusImage = CUSImgreader.result as string;

//   };
// }
// // ===============================================================
tenActive: String ;
tenDeleted: number ;
CUS:Customer;
// tempBirthDate: Date ;
// tempIDStartDate: Date ;
// tempIDEndDate: Date ;
// splitDate: string[] ;
// dateYear: number ;
// dateMonth: number ;
// dateDay: number ;
// =================================================================
mapFormvalue_to_CustomerClass()
{
  // 'en-GB'  'en-US'
  const dateOfBirthDay = new DatePipe('en-GB').transform(this.form.value.profile.birthday, 'dd/MM/yyyy')
  const dateOfIDStartDate = new DatePipe('en-GB').transform(this.form.value.work.nationalIDStartDate, 'dd/MM/yyyy')
  const dateOfIDEndDate = new DatePipe('en-GB').transform(this.form.value.work.nationalIDEndDate, 'dd/MM/yyyy')
  // if ((typeof dateOfBirthDay === 'string') && (dateOfBirthDay.includes('/'))) {
  //   // const str = dateOfBirthDay.split('/');
  //   this.splitDate = dateOfBirthDay.split('/');
  //   this.dateYear = Number(this.splitDate[2]);
  //   this.dateMonth = Number(this.splitDate[1]) - 1;
  //   this.dateDay = Number(this.splitDate[0]);
  //   this.tempBirthDate = new Date(this.dateYear, this.dateMonth, this.dateDay);
  // }

  if (this.form.value.settings.isActive) {this.tenActive = 'T';}
  else { this.tenActive = 'F'; }
  if (this.form.value.settings.isDeleted) {this.tenDeleted = 1;}
  else { this.tenDeleted = 0 ; }

  if (this.form.value.profile.birthday != null){
        this.CUS.CUSBirthDate= dateOfBirthDay;  }
    if (this.form.value.work.nationalIDStartDate != null){
      this.CUS.CUSNationalIDStartDate= dateOfIDStartDate ; }
    if (this.form.value.work.nationalIDEndDate != null){
      this.CUS.CUSNationalIDEndDate= dateOfIDEndDate ; }

    this.CUS.CUSCode= +this.form.value.code;

    this.CUS.CUSFirstName=   this.form.value.firstname;
    this.CUS.CUSLastName=   this.form.value.lastname;

    this.CUS.CUSGender= this.form.value.profile.gender;
    this.CUS.current_building= this.form.value.profile.curbuilding;
    this.CUS.current_unit= this.form.value.profile.curunit;

    this.CUS.CUSSelfType= this.form.value.selftype;
    this.CUS.CUSPic = this.form.value.image;
    this.CUS.CUSIDPic = this.form.value.work.nationalIDPic;


    this.CUS.CUSGuarantor = this.form.value.work.company;
    this.CUS.CUSJobName = this.form.value.work.position;
    this.CUS.CUSNationalIDType = this.form.value.work.nationalIDType;
    this.CUS.CUSNationalID = this.form.value.work.nationalID;

    this.CUS.CUSMobile = this.form.value.mobile;
    this.CUS.CUSEmail = this.form.value.contacts.email;
    this.CUS.CUSHomePhone = this.form.value.contacts.homephone;
    this.CUS.CUSWorkPhone = this.form.value.contacts.workphone;
    this.CUS.CUSAddress = this.form.value.contacts.address;
    this.CUS.Country_CTTKeyField = this.form.value.contacts.country;
    this.CUS.Governorate_CTTKeyField = this.form.value.contacts.governorate;
    this.CUS.City_CTTKeyField = this.form.value.contacts.city;
    this.CUS.Area_CTTKeyField = this.form.value.contacts.area;

    this.CUS.CUSFacebook = this.form.value.social.facebook;
    this.CUS.CUSTwitter = this.form.value.social.twitter;
    this.CUS.CUSGoogle = this.form.value.social.google;

    this.CUS.CUSActive = this.tenActive ;
    this.CUS.RowDelete = this.tenDeleted ;

    // console.log("this.CUS.CUSBirthDate:: "+ this.CUS.CUSBirthDate) ;
    // console.log("this.CUS.CUSNationalIDStartDate:: "+ this.CUS.CUSNationalIDStartDate) ;
    // console.log("this.CUS.CUSNationalIDEndDate:: "+ this.CUS.CUSNationalIDEndDate) ;
}
// ===============================================================

// =====================================================================
getTenantById(id:number)
{
  const images: any[] = [];
  this._CustomerService.getOneCustomer(id).subscribe((oneTenant:Customer)=>
  {
        this._CustomerService.getOneCustomerDocs(this.curCOMId, this.account.periorty, id)
        .subscribe((docs:any)=> {
          for (var onedoc of docs) {
            let image = {
              link: onedoc.CUDPic,
              preview: onedoc.CUDPic
            }
            images.push(image);
          }
          //this.form.controls.docPic.setValue(images);

        })
    this.fillForm(oneTenant, images);
    this.CUS=oneTenant;
    // this.govern(this.curCOMId,this.account.periorty)
    // this.city(this.curCOMId,this.account.periorty);
    // this.getCities()

  } )
}
// ================================================================
// ===============================================================
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
fillForm(tent: Customer, tentDocs: any){
  if (tent.CUSActive == 'T') {this.is_active = true;}
  else { this.is_active = false; }
  // ==========================================================
  if (tent.current_building != null){
    this.getAllUnits(this.curCOMId,this.account.periorty, tent.current_building);
  }
  // ==========================================================
  if(tent.CUSPic!=null)
  {
    this.defaultCusImage = tent.CUSPic as unknown as string;
  }else{
    this.defaultCusImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if(tent.CUSIDPic!=null)
  {
    this.defaultIDImage = tent.CUSIDPic as unknown as string;
  }else{
    this.defaultIDImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if (tent.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }
  this.form.patchValue({
    id: tent.id,
    code: tent.CUSCode,
    username: tent.CUSusername,
    firstname: tent.CUSFirstName,
    lastname: tent.CUSLastName,
    image: tent.CUSPic,
    selftype: tent.CUSSelfType,
    mobile: tent.CUSMobile,
    profile: {
      birthday: tent.CUSBirthDate,
      gender: tent.CUSGender,
      curbuilding: tent.current_building,
      curunit: tent.current_unit
    },
    work: {
      company: tent.CUSGuarantor,
      position: tent.CUSJobName,
      nationalIDType: tent.CUSNationalIDType,
      nationalID: tent.CUSNationalID,
      nationalIDStartDate: tent.CUSNationalIDStartDate,
      nationalIDEndDate: tent.CUSNationalIDEndDate,
      nationalIDPic: tent.CUSIDPic
    },

    contacts: {
      email: tent.CUSEmail,
      homephone: tent.CUSHomePhone,
      workphone: tent.CUSWorkPhone,
      address: tent.CUSAddress,
      country: tent.Country_CTTKeyField,
      governorate: tent.Governorate_CTTKeyField,
      city: tent.City_CTTKeyField,
      area: tent.Area_CTTKeyField
    },
    social: {
      facebook: tent.CUSFacebook,
      twitter: tent.CUSTwitter,
      google: tent.CUSGoogle
    },
    settings: {
      isActive: this.is_active,
      isDeleted: this.is_delete
    },
    docs: {
      docPic: tentDocs
    }
  });
}
// ===============================================================
saveUpdate(rowId): void {
  console.log("=============saveUpdate()===============") ;
  // ====SaveNew or Update لو عاوز أعمل حاجة هنا قبل طريق الحفظ====
  this.mapFormvalue_to_CustomerClass();
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
    console.log(this.CUS)
  this._CustomerService.addCustomer(this.CUS,this.CusImageToUpload, this.IDImageToUpload).subscribe(
    res=>{
     console.log("yes",res);
     this.snackBar.open('تم إضافة بيانات العميل', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
     this.router.navigate(["contracts/tenant-list"]);
    } ,
    error=>{
      this.snackBar.open(' خطأ في اضافه عميل', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
   )
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====

  this._CustomerService.editCustomer(this.CUS,this.CusImageToUpload, this.IDImageToUpload)
  .subscribe(res=>{
    console.log("yes updated",res);
    this.snackBar.open('تم تعديل بيانات العميل', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["contracts/tenant-list"]);
  },
  error=>{
    this.snackBar.open(' خطأ في تعديل بيانات عميل', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  }
  )
  }
}
// =========================================================
// =========================================================
  close(): void {
    // ============Cancel عند الضغط على مفتاح===============
    // this.dialogRef.close();
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
    // console.log(responseCountries)
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الدول', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ===============================================================
AllBuildings=[]
getAllBuildings(comId: number, periorty: number) {
this.unitsService.getAllBuilding(comId, periorty).subscribe(
  responseCountries => {
  this.AllBuildings = responseCountries;
  },
  error => {
    this.snackBar.open('خطأ في استرجاع العقارات', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
  }
);
}
// ===============================================================
AllUnits=[]
getUnitsPerBuild(event){
  this.getAllUnits(this.curCOMId,this.account.periorty,event.value);
}
// ====================================================================
getAllUnits(comId: number, periorty: number, buildId: number) {
  this.unitsService.getAllUnitsPerBuilding(comId, periorty, buildId).subscribe(
    responseCountries => {
    this.AllUnits = responseCountries;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الوحدات', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
  }
  // ===============================================================
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
