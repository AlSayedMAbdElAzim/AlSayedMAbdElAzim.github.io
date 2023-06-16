import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { RentContract } from 'src/app/models/rentContract'
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
import { AtlasService } from 'src/app/admin/atlas/atlas.service' ;
import { ContractsService } from 'src/app/admin/contracts/contracts.service';

import { Customer } from 'src/app/models/customer' ;
import { CustomerService } from 'src/app/admin/contracts/customers/customer.service' ;

import { DatePipe } from '@angular/common';
declare let $: any;

@Component({
  selector: 'app-contract-dialog',
  templateUrl: './contract-dialog.component.html',
  styleUrls: ['./contract-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContractDialogComponent {
  curCOMId: number = environment.comid;
  account: User = new User();
  userSUb: Subscription;
  docType_const: string = new CodeTableTreeConstants().OwnershipDocTypes;
  country_const: string = new CodeTableTreeConstants().Countries;
  governorate_const: string = new CodeTableTreeConstants().Governorates;
  city_const: string = new CodeTableTreeConstants().City;
  region_const: string = new CodeTableTreeConstants().Regions;
  buildingFeatures_const: string = new CodeTableTreeConstants().BuildingFeatures;

  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  // public tenant: Units = new Units() ;
  private sub: any;
  public id:any;
  constructor(private activatedRoute: ActivatedRoute,
              private codesService: CodetabletreeService,
              private unitsService: UnitsService,
              private contractService: ContractsService,
              public fb: UntypedFormBuilder,
              private localStore: LocalService,
              private router: Router,
              private global: GlobalService,
              public translateService: TranslateService,
              public atlasService: AtlasService,
              public tenantsService:CustomerService,
              public snackBar: MatSnackBar)
              {  }

// ===========================================================
isBigEnough(element, index, array) {
  return (element >= 10);
}
// ===============================================================
  ngOnInit() {
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
      this.global.me = JSON.parse(this.localStore.getItem('account'));

      // console.log("=======this.global.me AlSayed 111=========") ;
      // console.log(JSON.parse(this.localStore.getItem('account'))['first_name']) ;
      // console.log(JSON.parse(this.localStore.getItem('account'))['branch_KeyField']) ;
      // console.log(JSON.parse(this.localStore.getItem('account'))['is_employee']) ;

      // var values = JSON.parse(this.localStore.getItem("account")) ;
      // console.log(values['first_name']) ;
      // console.log(values['branch_KeyField']) ;
      // console.log(values['is_employee']) ;
      // console.log(values['RowConfirm']) ;

      // console.log("=======this.global.me AlSayed 222=========") ;
      // var passed = [12, 5, 8, 130, 44].filter(this.isBigEnough);
      // console.log("Test Value : " + passed );
      // console.log("=======this.global.me AlSayed 333=========") ;
// ==============initialize Form======================
      this.form = this.fb.group({
        id: null,
        RCOCode: [null ,Validators.required],
        RCOSubCode: [null ,Validators.required],
        contractDate: null,
        contractStartDate: null,
        contractEndDate: null,
        RCOContractStatus: "N",
        contractUnit: this.fb.group({
          branch_KeyField: null,
          build_KeyField: null,
          unit_KeyField: null,
        }),
        contractPerson: this.fb.group({
          owner_KeyField: null,
          owner_representative_KeyField: null,
          customer_KeyField: null,
          customer_representative_KeyField: null,
        }),
        contractValues: this.fb.group({
          RCOContractValue: 0,
          RCOPayEveryMonthesNo: 0,
          RCOMonthValue: 0,
          RCOInsuranceValue: 0,
          RCOSeekingValue: 0,
          RCOMonthlyExpense: 0,
          RCOExpenseDesc: null,
          RCOOtherValue: 0,
          RCOMonthlyElectricValue: 0,
          RCOElectricCounterReading: null,
          RCOMonthlyWaterValue: 0,
          RCOWaterCounterReading: null,
          RCOMonthlyGasValue: 0,
          RCOGasCounterReading: null,
        }),
        settings: this.fb.group({
          isActive: null,
          isDeleted: null //,
        })
      });
// ===================================================
      this.getCountries(this.curCOMId,this.account.periorty); //====استرجاع الدول====
      this.getAllBranches(this.curCOMId,this.account.periorty) ; // ===استرجاع الفروع===
      this.getAllOwnerss(this.curCOMId,this.account.periorty) ; // ===استرجاع الملاك===
      this.getOwnershipDocType(this.curCOMId,this.account.periorty); //====استرجاع انواع مستندات الملكية====
      this.getTenants();

      this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية المستأجر====

        if(params['id']){
          this.id = +params['id'];
          this.getContractById(this.id);
        }
        else{ this.contractForDisplay = new RentContract(); }
      });
    } else {
      this.router.navigate(['/sign-in']);
    }
    // --------------------------
  }

// ================================================================
defaultCusImage=new ApiConstant().noImage;
CusImageToUpload:File=null;
// defaultIDImage=new ApiConstant().noImage;
// IDImageToUpload:File=null;
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
tenActive: string ;

tenDeleted: number ;
contractForDisplay:RentContract;
// =================================================================
mapFormvalue_to_ContractClass()
{
  // 'en-GB'  'en-US'
  const curRcoDate = new DatePipe('en-GB').transform(this.form.value.contractDate, 'dd/MM/yyyy')
  const curStartDate = new DatePipe('en-GB').transform(this.form.value.contractStartDate, 'dd/MM/yyyy')
  const curEndDate = new DatePipe('en-GB').transform(this.form.value.contractEndDate, 'dd/MM/yyyy')

  if (this.form.value.settings.isActive) {this.tenActive = 'T';}
  else { this.tenActive = 'F'; }
  if (this.form.value.settings.isDeleted) {this.tenDeleted = 1;}
  else { this.tenDeleted = 0 ; }

    this.contractForDisplay.id= this.form.value.id;
    this.contractForDisplay.Related_RCOKeyField= this.form.value.Related_RCOKeyField;
    this.contractForDisplay.RCOCode= this.form.value.RCOCode;
    this.contractForDisplay.RCOSubCode= this.form.value.RCOSubCode;

    if (this.form.value.contractDate != null){
      this.contractForDisplay.RCODate= curRcoDate;  }
    if (this.form.value.contractStartDate != null){
      this.contractForDisplay.RCOStartDate= curStartDate;  }
    if (this.form.value.contractEndDate != null){
      this.contractForDisplay.RCOEndDate= curEndDate;  }


    this.contractForDisplay.RCOContractStatus= this.form.value.RCOContractStatus;

    this.contractForDisplay.branch_KeyField= this.form.value.contractUnit.branch_KeyField;
    this.contractForDisplay.build_KeyField= this.form.value.contractUnit.build_KeyField;
    this.contractForDisplay.unit_KeyField= this.form.value.contractUnit.unit_KeyField;

    this.contractForDisplay.owner_KeyField= this.form.value.contractPerson.owner_KeyField;
    this.contractForDisplay.owner_representative_KeyField= this.form.value.contractPerson.owner_representative_KeyField;
    this.contractForDisplay.customer_KeyField= this.form.value.contractPerson.customer_KeyField;
    this.contractForDisplay.customer_representative_KeyField= this.form.value.contractPerson.customer_representative_KeyField;

    this.contractForDisplay.RCOContractValue= this.form.value.contractValues.RCOContractValue ;
    this.contractForDisplay.RCOPayEveryMonthesNo= this.form.value.contractValues.RCOPayEveryMonthesNo ;
    this.contractForDisplay.RCOMonthValue= this.form.value.contractValues.RCOMonthValue ;
    this.contractForDisplay.RCOInsuranceValue= this.form.value.contractValues.RCOInsuranceValue ;
    this.contractForDisplay.RCOSeekingValue= this.form.value.contractValues.RCOSeekingValue ;
    this.contractForDisplay.RCOMonthlyExpense= this.form.value.contractValues.RCOMonthlyExpense ;
    this.contractForDisplay.RCOExpenseDesc= this.form.value.contractValues.RCOExpenseDesc ;
    this.contractForDisplay.RCOOtherValue= this.form.value.contractValues.RCOOtherValue ;
    this.contractForDisplay.RCOMonthlyElectricValue= this.form.value.contractValues.RCOMonthlyElectricValue ;
    this.contractForDisplay.RCOElectricCounterReading= this.form.value.contractValues.RCOElectricCounterReading ;
    this.contractForDisplay.RCOMonthlyWaterValue= this.form.value.contractValues.RCOMonthlyWaterValue ;
    this.contractForDisplay.RCOWaterCounterReading= this.form.value.contractValues.RCOWaterCounterReading ;
    this.contractForDisplay.RCOMonthlyGasValue= this.form.value.contractValues.RCOMonthlyGasValue ;
    this.contractForDisplay.RCOGasCounterReading= this.form.value.contractValues.RCOGasCounterReading ;

    this.contractForDisplay.RCOActive = this.tenActive ;
    this.contractForDisplay.RowDelete = this.tenDeleted ;
}
// ===============================================================
getContractById(id:number)
{
  this.contractService.getOneContract(id).subscribe( (oneContract:RentContract)=>
  {

    this.fillForm(oneContract);
    this.contractForDisplay = oneContract;
  } )
}
// ================================================================
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
s_rcoDate: any;
fillForm(contract: RentContract){
  if (contract.RCOActive == 'T') {this.is_active = true;}
  else { this.is_active = false; }
  // ==========================================================
  if (contract.branch_KeyField != null){
    this.getBuildingPerBranch(this.curCOMId,this.account.periorty, contract.branch_KeyField);
  }
  // ==========================================================
  if (contract.build_KeyField != null){
    this.getUnitsPerBuilding(this.curCOMId, this.account.periorty, contract.build_KeyField);
  }
  // ==========================================================
  if (contract.owner_KeyField != null){
    this.getRepresentativePerOwner(this.curCOMId, this.account.periorty, contract.owner_KeyField);
  }
  // ==========================================================
  if (contract.customer_KeyField != null){
    this.getRepresentativePerCustomer(this.curCOMId, this.account.periorty, contract.customer_KeyField);
  }
  // ==========================================================
  if (contract.RCODate != null){
    this.s_rcoDate= contract.RCODate;
    }
  // ==============================================================
  if (contract.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }

  this.form.patchValue({
    // =================================================================
    id: contract.id,
    RCOCode: contract.RCOCode,
    RCOSubCode: contract.RCOSubCode,
    contractDate: contract.RCODate,
    contractStartDate: contract.RCOStartDate,
    contractEndDate: contract.RCOEndDate,
    RCOContractStatus: contract.RCOContractStatus,
    contractUnit: {
      branch_KeyField: contract.branch_KeyField,
      build_KeyField: contract.build_KeyField,
      unit_KeyField: contract.unit_KeyField,
    },
    contractPerson: {
      owner_KeyField: contract.owner_KeyField,
      owner_representative_KeyField: contract.owner_representative_KeyField,
      customer_KeyField: contract.customer_KeyField,
      customer_representative_KeyField: contract.customer_representative_KeyField,
    },
    contractValues: {
      RCOContractValue: contract.RCOContractValue,
      RCOPayEveryMonthesNo: contract.RCOPayEveryMonthesNo,
      RCOMonthValue: contract.RCOMonthValue,
      RCOInsuranceValue: contract.RCOInsuranceValue,
      RCOSeekingValue: contract.RCOSeekingValue,
      RCOMonthlyExpense: contract.RCOMonthlyExpense,
      RCOExpenseDesc: contract.RCOExpenseDesc,
      RCOOtherValue: contract.RCOOtherValue,
      RCOMonthlyElectricValue: contract.RCOMonthlyElectricValue,
      RCOElectricCounterReading: contract.RCOElectricCounterReading,
      RCOMonthlyWaterValue: contract.RCOMonthlyWaterValue,
      RCOWaterCounterReading: contract.RCOWaterCounterReading,
      RCOMonthlyGasValue: contract.RCOMonthlyGasValue,
      RCOGasCounterReading: contract.RCOGasCounterReading,
    },
    settings: {
      isActive: this.is_active,
      isDeleted: this.is_delete
    }
  });
}
// ===============================================================
saveUpdate(rowId): void {
  console.log("=============saveUpdate()===============") ;
  // ====SaveNew or Update لو عاوز أعمل حاجة هنا قبل طريق الحفظ====
  this.mapFormvalue_to_ContractClass();
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
    console.log(this.contractForDisplay)
  this.contractService.addContract(this.contractForDisplay).subscribe(
    res=>{
      console.log("yes",res);
      this.snackBar.open('تم إضافة العقد', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
      this.router.navigate(["contracts/contract-list"]);
    } ,
    error=>{
      this.snackBar.open(' خطأ في اضافه العقد', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  )
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====

  this.contractService.editContract(this.contractForDisplay)
  .subscribe(res=>{
    console.log("yes updated",res);
    this.snackBar.open('تم تعديل بيانات العقد', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["contracts/contract-list"]);
  },
  error=>{
    this.snackBar.open(' خطأ في تعديل بيانات العقد', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

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
// ====================================================
public compareFunction(o1: any, o2: any) {
  return (o1.username == o2.username && o1.code == o2.code);
}
// ===============================================================
DocTypes=[]
getOwnershipDocType(comId: number, periorty: number)
{
  this.codesService.getSubForParent(comId, periorty, this.docType_const).subscribe(
    responseCountries => {
    this.DocTypes = responseCountries;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع انواع مستندات الملكية', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
} //
// ===============================================================
// public selectedFeatures:string;
// BuildFeatures=[]
// getBuildingFeatures(comId: number, periorty: number)
// {
//   this.codesService.getSubForParent(comId, periorty, this.buildingFeatures_const).subscribe(
//     responseFeatures => {
//     this.BuildFeatures = responseFeatures;
//     },
//     error => {
//       this.snackBar.open('خطأ في استرجاع مزايا العقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
//     }
//   );
// }
// // ===============================================================
// public onFeatureSelectionChange(event:any){
//   if(event.value){
//     this.selectedFeatures = event.value.join();
//     console.log("=======event.value:: "+ event.value);
//     console.log("=======this.selectedFeatures:: "+ this.selectedFeatures);
//   }
// }
// // ===============================================================
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
// =============================================================
Governorates=[]
AllBuilding=[]
getBuildings(event){
  this.getBuildingPerBranch(this.curCOMId, this.account.periorty, event.value);
}
// ===============================================================
getBuildingPerBranch(comId: number, periorty: number, related: number)
{
  this.unitsService.getBuildingsPerBranch(comId, periorty, related).subscribe(
    responseBuild => {
    this.AllBuilding = responseBuild;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع العقارات للفرع', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// ===============================================================
curOwnerId ;
readBuilding(event){
  this.unitsService.getOneBuilding(event.value).subscribe(
    responseBuild => {
    this.curOwnerId = responseBuild['owner_KeyField'] ;
    console.log("====Cur Owner:: "+ this.curOwnerId + "  " + responseBuild['owner_FullName'])
    // this.form.controls['owner_KeyField'].setValue(this.curOwnerId);
    // ===============================================================
    this.form.patchValue({
      contractPerson: {
        owner_KeyField: this.curOwnerId} }) ;
    this.getRepresentativePerOwner(this.curCOMId, this.account.periorty, this.curOwnerId);
    // ================================================================
    },
    error => {
      this.snackBar.open('خطأ في استرجاع بيانات العقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );

  this.getUnitsPerBuilding(this.curCOMId, this.account.periorty, event.value);

}
// ===============================================================
AllUnitsForBuilding=[]
getUnitsPerBuilding(comId: number, periorty: number, build: number)
{
  this.unitsService.getAllUnitsPerBuilding(comId, periorty, build).subscribe(
    responseBuild => {
    this.AllUnitsForBuilding = responseBuild;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الوحدات للعقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// =========================================================
readUnit(event){
  // console.log("====Selected readUnit:: " + event.value) ;   //
  if (event.value) {
    // console.log("====Selected readUnit:: " + event.value) ;
      this.unitsService.getOneUnit(event.value).subscribe(
        responseUnit => {
        // ===============================================================
        this.form.patchValue({
          contractValues: {
            RCOContractValue: responseUnit['UNTContractValue'], // responseUnit['UNTMonthlyRentValue'] * 12 ,
            RCOPayEveryMonthesNo: responseUnit['UNTPayInstallmentEveryMonths'],
            RCOMonthValue: responseUnit['UNTMonthlyRentValue'],
            RCOInsuranceValue: responseUnit['UNTInsuranceValue'],
            RCOSeekingValue: responseUnit['UNTSeekingValue'],
            RCOMonthlyExpense: responseUnit['UNTMonthlyExpense'],
            RCOExpenseDesc: responseUnit['UNTExpenseDesc'],
            RCOOtherValue: responseUnit['UNTOtherValue'],
            RCOMonthlyElectricValue: responseUnit['UNTMonthlyElectricityFee'],
            RCOElectricCounterReading: responseUnit['UNTLastElectricityReading'],
            RCOMonthlyWaterValue: responseUnit['UNTMonthlyWaterFee'],
            RCOWaterCounterReading: responseUnit['UNTLastWaterReading'],
            RCOMonthlyGasValue: responseUnit['UNTMonthlyGasFee'],
            RCOGasCounterReading: responseUnit['UNTLastGasReading'],
          }

          }) ;
        // ================================================================
        },
        error => {
          this.snackBar.open('خطأ في استرجاع بيانات الوحدة', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
        }
      );
  }
}
// ===============================================================owner_representative
AllRepresentativeForOwner=[]
getRepresentativePerOwner(comId: number, periorty: number, owner: number)
{
  this.contractService.getOwnersPerParent(comId, periorty, owner).subscribe(
    responseOwner => {
    this.AllRepresentativeForOwner = responseOwner;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع ممثل المالك', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// =========================================================
readOwner(event){
  console.log("====Selected readOwner:: " + event.value) ;
  this.getRepresentativePerOwner(this.curCOMId, this.account.periorty, event.value);
}
// ===============================================================
AllBranches=[]
getAllBranches(comId: number, periorty: number) {
  this.atlasService.getAllBranch(comId, periorty).subscribe(
    responseCountries => {
    this.AllBranches = responseCountries;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الفروع', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
  }
// ===============================================================
AllOwners = []
getAllOwnerss(comId: number, periorty: number) {
  this.contractService.getAllOwners(comId, periorty).subscribe(
    responseCountries => {
    this.AllOwners = responseCountries;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع الملاك', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
  }
// ===============================================================
readCustumer(event){
  console.log("====Selected readCustumer:: " + event.value) ;
  this.getRepresentativePerCustomer(this.curCOMId, this.account.periorty, event.value);
}
// ===============================================================
AllRepresentativeForCustomer=[]
getRepresentativePerCustomer(comId: number, periorty: number, customer: number)
{
  this.tenantsService.getCustomersPerParent(comId, periorty, customer).subscribe(
    responseOwner => {
    this.AllRepresentativeForCustomer = responseOwner;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع ممثل المستأجر', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
}
// =========================================================
// ==========================================================
AllTenants=[]
public getTenants(): void {
  this.AllTenants = null;
  this.tenantsService.getCustomers(this.curCOMId, this.account.periorty).subscribe
  (tenants => this.AllTenants = tenants);
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
