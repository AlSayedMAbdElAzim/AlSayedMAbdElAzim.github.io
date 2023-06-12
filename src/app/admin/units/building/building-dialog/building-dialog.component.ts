import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Building } from 'src/app/models/building' ;
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

import { DatePipe } from '@angular/common';
declare let $: any;

@Component({
  selector: 'app-building-dialog',
  templateUrl: './building-dialog.component.html',
  styleUrls: ['./building-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingDialogComponent {

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
  public tenant: Building = new Building() ;
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
              public snackBar: MatSnackBar)
              {  }
// ===========================================================
  ngOnInit() {
    this.userSUb = this.global.user.subscribe(
      me => { this.account = me; }
    );
    if (this.localStore.getItem('token') && this.localStore.getItem('account')) {
      this.global.me = JSON.parse(this.localStore.getItem('account'));
// ==============initialize Form======================
      this.form = this.fb.group({
        id: null,
        code: [null ,Validators.required],
        branchKey: null, // [{value:null,disabled:true}], // [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        description: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        image: null,
        owner: this.fb.group({
          recievedate: null,
          docType: null,
          ownerKey: null,
          docNumber: null,

        }),
        build_address: this.fb.group({
          streetName: null,
          buildNumber: null,
          zibCode: null,
          address: null,
          addressDescription: null,
          countryKey: null, // [{value:null}],
          governorateKey : null, // [{value:null}], // [{value:null,disabled:true}],
          cityKey : null, // [{value:null}], // [{value:null,disabled:true}],
          areaKey : null, // [{value:null}], // [{value:null,disabled:true}],
          langtitude: null,
          altitude: null

        }),
        build_desc: this.fb.group({
          housingStatus: "E",
          constructionStatus: "E",
          propertyType: "B",
          propertyUsageType: "F",
          floorsNumber : null,
          flatsNumber : null,
          shopsNumber : null,
          storesNumber : null,
          numberOfElevators : null,
          numberOfParkingLots : null,
          enteringGate : null,
          buildingArea : null,
          measuringUnit : "M"
          // ,features: null

        }),
        settings: this.fb.group({
          isActive: null,
          isDeleted: null //,
        })
      });
// ===================================================
      // this.getBuildingFeatures(this.curCOMId,this.account.periorty); //====استرجاع مميزات العقارات====
      this.getCountries(this.curCOMId,this.account.periorty); //====استرجاع الدول====
      this.getAllBranches(this.curCOMId,this.account.periorty) ; // ===استرجاع الفروع===
      this.getAllOwnerss(this.curCOMId,this.account.periorty) ; // ===استرجاع الملاك===
      this.getOwnershipDocType(this.curCOMId,this.account.periorty); //====استرجاع انواع مستندات الملكية====
      // this.getAllBuildings(this.curCOMId,this.account.periorty); //====استرجاع العقارات====

      this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية المستأجر====

        if(params['id']){
          this.id = +params['id'];
          this.getBuildById(this.id);
        }
        else{ this.buildForDisplay = new Building(); }
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
// handelIDImgInput(file:FileList)
// {
//   this.IDImageToUpload=file.item(0);
//   var IDImgreader=new FileReader();
//   IDImgreader.onload=(event:any)=>{
//     console.log("=====before=====" + this.defaultIDImage);
//                                       this.defaultIDImage=event.target.result;
//                                       console.log("=====after=====" + this.defaultIDImage);
//                                     }
//   IDImgreader.readAsDataURL(this.IDImageToUpload);

// }
// // ===============================================================
tenActive: string ;
tenDeleted: number ;
buildForDisplay:Building;
// =================================================================
mapFormvalue_to_BuildingClass()
{
  // 'en-GB'  'en-US'
  const buildRecievedDate = new DatePipe('en-GB').transform(this.form.value.owner.recievedate, 'dd/MM/yyyy')

  if (this.form.value.settings.isActive) {this.tenActive = 'T';}
  else { this.tenActive = 'F'; }
  if (this.form.value.settings.isDeleted) {this.tenDeleted = 1;}
  else { this.tenDeleted = 0 ; }


    this.buildForDisplay.id= this.form.value.id;
    this.buildForDisplay.branch_KeyField= this.form.value.branchKey;
    this.buildForDisplay.BUICode= this.form.value.code;
    this.buildForDisplay.BUIName=   this.form.value.name;
    this.buildForDisplay.BUIDescription=   this.form.value.description;
    this.buildForDisplay.BUIPic = this.form.value.image;

    if (this.form.value.owner.recievedate != null){
      this.buildForDisplay.BUIRecieveDate= buildRecievedDate;  }
    this.buildForDisplay.owner_KeyField= this.form.value.owner.ownerKey;
    this.buildForDisplay.ownershipDocType_CTTKeyField= this.form.value.owner.docType;
    this.buildForDisplay.ownershipDocNumber= this.form.value.owner.docNumber;

    this.buildForDisplay.Country_CTTKeyField = this.form.value.build_address.countryKey;
    this.buildForDisplay.Governorate_CTTKeyField = this.form.value.build_address.governorateKey;
    this.buildForDisplay.City_CTTKeyField = this.form.value.build_address.cityKey;
    this.buildForDisplay.Area_CTTKeyField = this.form.value.build_address.areaKey;
    this.buildForDisplay.BUIStreetName = this.form.value.build_address.streetName;
    this.buildForDisplay.BUIBuildingNumber = this.form.value.build_address.buildNumber;
    this.buildForDisplay.BUIZibCode = this.form.value.build_address.zibCode;
    this.buildForDisplay.BUIAddress = this.form.value.build_address.address;
    this.buildForDisplay.BUIAddressDescription = this.form.value.build_address.addressDescription;
    this.buildForDisplay.BUILangtitude = this.form.value.build_address.langtitude;
    this.buildForDisplay.BUIAltitude = this.form.value.build_address.altitude;

    this.buildForDisplay.BUIHousingStatus= this.form.value.build_desc.housingStatus;
    this.buildForDisplay.BUIConstructionStatus = this.form.value.build_desc.constructionStatus;

    this.buildForDisplay.BUIPropertyType = this.form.value.build_desc.propertyType;
    this.buildForDisplay.BUIPropertyUsageType = this.form.value.build_desc.propertyUsageType;
    this.buildForDisplay.BUIFloorsNumber = this.form.value.build_desc.floorsNumber;
    this.buildForDisplay.BUIFlatsNumber = this.form.value.build_desc.flatsNumber;
    this.buildForDisplay.BUIShopsNumber = this.form.value.build_desc.shopsNumber;
    this.buildForDisplay.BUIStoresNumber = this.form.value.build_desc.storesNumber;
    this.buildForDisplay.BUINumberOfElevators = this.form.value.build_desc.numberOfElevators;
    this.buildForDisplay.BUINumberOfParkingLots = this.form.value.build_desc.numberOfParkingLots;
    this.buildForDisplay.BUIBuildingArea = this.form.value.build_desc.buildingArea;
    this.buildForDisplay.BUIMeasuringUnit = this.form.value.build_desc.measuringUnit;
    this.buildForDisplay.BUIEnteringGate = this.form.value.build_desc.enteringGate;

    // if (this.form.value.build_desc.features && this.form.value.build_desc.features != null){
    // this.buildForDisplay.BUIFeatures = this.form.value.build_desc.features; }

    this.buildForDisplay.BUIActive = this.tenActive ;
    this.buildForDisplay.RowDelete = this.tenDeleted ;
}
// ===============================================================
getBuildById(id:number)
{
  this.unitsService.getOneBuilding(id).subscribe((oneBuild:Building)=>
  {
    // this.selectedFeatures = (oneBuild.BUIFeatures).toString() ;
    this.fillForm(oneBuild);
    this.buildForDisplay=oneBuild;
  } )
}
// ================================================================
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
fillForm(tent: Building){
  if (tent.BUIActive == 'T') {this.is_active = true;}
  else { this.is_active = false; }
  // ==========================================================
  if (tent.Country_CTTKeyField != null){
    this.getGovernoratePerCountry(this.curCOMId,this.account.periorty, tent.Country_CTTKeyField);
  }
  // ==========================================================
  // ==========================================================
  if(tent.BUIPic!=null)
  {
    this.defaultCusImage = tent.BUIPic as unknown as string;
  }else{
    this.defaultCusImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if (tent.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }

  this.form.patchValue({
    id: tent.id,
    code: tent.BUICode,
    branchKey: tent.branch_KeyField,
    name: tent.BUIName,
    description: tent.BUIDescription,
    image: tent.BUIPic,
    owner: {
      recievedate: tent.BUIRecieveDate,
      ownerKey: tent.owner_KeyField,
      docType: tent.ownershipDocType_CTTKeyField,
      docNumber: tent.ownershipDocNumber,
    },
    build_address: {
      streetName: tent.BUIStreetName,
      buildNumber: tent.BUIBuildingNumber,
      zibCode: tent.BUIZibCode,
      address: tent.BUIAddress,
      addressDescription: tent.BUIAddressDescription,
      countryKey: tent.Country_CTTKeyField,
      governorateKey: tent.Governorate_CTTKeyField,
      cityKey: tent.City_CTTKeyField,
      areaKey: tent.Area_CTTKeyField,
      langtitude: tent.BUILangtitude,
      altitude: tent.BUIAltitude,
    },

    build_desc: {
      housingStatus: tent.BUIHousingStatus,
      constructionStatus: tent.BUIConstructionStatus,
      propertyType: tent.BUIPropertyType,
      propertyUsageType: tent.BUIPropertyUsageType,
      floorsNumber: tent.BUIFloorsNumber,
      flatsNumber: tent.BUIFlatsNumber,
      shopsNumber: tent.BUIShopsNumber,
      storesNumber: tent.BUIStoresNumber,
      numberOfElevators: tent.BUINumberOfElevators,
      numberOfParkingLots: tent.BUINumberOfParkingLots,
      buildingArea: tent.BUIBuildingArea,
      measuringUnit: tent.BUIMeasuringUnit,
      enteringGate: tent.BUIEnteringGate,
      // features: this.selectedFeatures,
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
  this.mapFormvalue_to_BuildingClass();
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
    console.log(this.buildForDisplay)
  this.unitsService.addBuild(this.buildForDisplay,this.CusImageToUpload).subscribe(
    res=>{
     console.log("yes",res);
     this.snackBar.open('تم إضافة بيانات العقار', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
     this.router.navigate(["units/building"]);
    } ,
    error=>{
      this.snackBar.open(' خطأ في اضافه العقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
   )
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====

  this.unitsService.editBuild(this.buildForDisplay, this.CusImageToUpload)
  .subscribe(res=>{
    console.log("yes updated",res);
    this.snackBar.open('تم تعديل بيانات العقار', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["units/building"]);
  },
  error=>{
    this.snackBar.open(' خطأ في تعديل بيانات العقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

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
getGovernorate(event){
  this.getGovernoratePerCountry(this.curCOMId, this.account.periorty, event.value);
}
// ===============================================================
getGovernoratePerCountry(comId: number, periorty: number, related: number)
{
  this.codesService.getSubForParentAndRelated(comId, periorty, this.governorate_const, related).subscribe(
    responseCountries => {
    this.Governorates = responseCountries;
    },
    error => {
      this.snackBar.open('خطأ في استرجاع المحافظات', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
  );
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
// // ===============================================================
// AllBuildings=[]
// getAllBuildings(comId: number, periorty: number) {
// this.unitsService.getAllBuilding(comId, periorty).subscribe(
//   responseCountries => {
//   this.AllBuildings = responseCountries;
//   },
//   error => {
//     this.snackBar.open('خطأ في استرجاع العقارات', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
//   }
// );
// }
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
