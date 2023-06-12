import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/global.service';
import { CompanyService } from '../company.service';
import { LocalService } from 'src/app/services/local.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Company } from 'src/app/models/company';
import { environment } from 'src/environments/environment';
import { ApiConstant } from 'src/app/constants/api-constant';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent  implements OnInit {

  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription ;


  constructor(private localStore: LocalService,
              private _companyService:CompanyService,
              private global: GlobalService,
              private router:Router,
              public snackBar: MatSnackBar,
              private fb:FormBuilder) {

    }
// ==================================================================
  ngOnInit() {
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account') ) {
      this.global.me = JSON.parse(this.localStore.getItem('account') );
      this.get_CompanyData(this.curCOMId, this.account.periorty);
    } else {
      this.router.navigate(['/sign-in']);
    }

  }
// =============upload image=================
  fileToUpload: File=null;
  url = new ApiConstant().noImage;
  handelFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //show image
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log("=========this.fileToUpload=========");
    console.log(this.fileToUpload);
  }

// ==================================================

companyData_Form=this.fb.group({
  COMCode:[],
  COMAraName:["", Validators.required],
  COMLogo:[],
  COMEngName:["", Validators.required],
  COMDisplayedName:["", Validators.required],
  COMAddress:[],
  COMPhone:[],
  COMMobile:["", Validators.required],
  COMFax:[],

})

// ============================================================
  get_CompanyData(comId: number, periorty: number)
    {
      this._companyService.getCompany(comId, periorty).subscribe(
        (companyData:Company) => {
          this.companyDataPatchValues(companyData[0]);
          this.url=companyData[0].COMLogo;
        },
        error => {
          // console.log('ERROR', error);  //Use snackBar بدلاً منها
          this.snackBar.open('خطأ في استرجاع بيانات الشركة', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
      );
    }
//  ===========================================================================
newCompanyData:Company;
mappingCompanyDataFormToClass()
{
  this.initializationForCompany();
  this.newCompanyData.COMCode=this.companyData_Form.value.COMCode;
  this.newCompanyData.COMAraName=this.companyData_Form.value.COMAraName;
  this.newCompanyData.COMEngName=this.companyData_Form.value.COMEngName;
  this.newCompanyData.COMAddress=this.companyData_Form.value.COMAddress;
  this.newCompanyData.COMPhone=this.companyData_Form.value.COMPhone;
  this.newCompanyData.COMMobile=this.companyData_Form.value.COMMobile;
  this.newCompanyData.COMFax=this.companyData_Form.value.COMFax;
  this.newCompanyData.COMDisplayedName=this.companyData_Form.value.COMDisplayedName;
}
// =================================================================================
companyDataPatchValues(companyData:Company)
{
  this.companyData_Form.patchValue({
    COMCode:companyData.COMCode,
    COMAraName:companyData.COMAraName,
    COMEngName:companyData.COMEngName,
    COMAddress:companyData.COMAddress,
    COMPhone:companyData.COMPhone,
    COMMobile:companyData.COMMobile,
    COMFax:companyData.COMFax,
    COMDisplayedName:companyData.COMDisplayedName,
  })
}
// ===================================================================
initializationForCompany(){
  this.newCompanyData={
    COMId:this.curCOMId,
    EntryDate:null,
    EntryUser:null,
    RowConfirm:0,
    RowStatus:0,
    RowDelete:0,
    COMCode:null,
    COMAraName:"",
    COMEngName:"",
    COMDisplayedName:"",
    COMLogo:null,
    COMAddress:"",
    COMPhone:"",
    COMMobile:"",
    COMFax:"",
  }
}
// ==========================================================
saveEditCompanyData()
{
this.mappingCompanyDataFormToClass();
  console.log("=====this.newCompanyData=====");
  console.log(this.newCompanyData);
  this._companyService.editCompany(this.newCompanyData,this.curCOMId,this.fileToUpload).
  subscribe(()=>{
    this.snackBar.open('تم تعديل بيانات الشركه', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(['atlas/company']);
},
error => {
  console.log('ERROR', error);  //Use snackBar بدلاً منها
  this.snackBar.open('خطأ في حفظ بيانات الشركة', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
})
}
// ==========================================================
}
