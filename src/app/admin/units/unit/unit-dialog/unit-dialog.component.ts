import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Units } from 'src/app/models/units' ;
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
  selector: 'app-unit-dialog',
  templateUrl: './unit-dialog.component.html',
  styleUrls: ['./unit-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UnitDialogComponent {
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
  public tenant: Units = new Units() ;
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
        UNTCode: [null ,Validators.required],
        branch_KeyField: null, // [{value:null,disabled:true}], // [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        owner_KeyField: null,
        build_KeyField: null,
        UNTUnitFileNumber: null, //  [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        UNTDescription: null, //  [null, Validators.compose([Validators.required, Validators.minLength(3)])],
        UNTPic: null,
        UNTFloorNumber: null,
        UNTUnitNumber: null,
        UNTUnitArea: null,
        UNTMeasuringUnit: "M",
        UNTUnitType: "F",
        UNTUnitForSale: false,
        UNTUnitForRent: true,
        generalDescription: this.fb.group({
          uNTCreationDate: null,
          UNTHousingStatus: "E",
          UNTConstructionStatus: "E",
          UNTPropertyUsageType: "F",
          UNTPropertyType: "B",
          UNTUnitFacing: "F",
          UNTUnitDirection: "N",
        }),
        rentValues: this.fb.group({
          UNTRentalCycle: "M",
          UNTMonthlyRentValue: null,
          UNTWeeklyRentValue: null,
          UNTDailyRentValue: null,
          UNTPayInstallmentEveryMonths: 1,
          UNTNumberOfInstallments: 12, // [{value:null}],
          UNTMonthlyElectricityFee : 0.0, // [{value:null}], // [{value:null,disabled:true}],
          UNTMonthlyWaterFee : 0.0, // [{value:null}], // [{value:null,disabled:true}],
          UNTMonthlyGasFee : 0.0, // [{value:null}], // [{value:null,disabled:true}],
          UNTNumberOfParkingLots: 0,
          UNTMonthlyParkingFee: 0.0,          
          UNTLastElectricityReading: 0.0,
          UNTLastWaterReading: 0.0,
          UNTLastGasReading: 0.0,
          UNTUnitNoFees: "F",
          UNTUnitHotOffer: "F",
          UNTUnitSold: "F",
          UNTSoldValue: null,
          
        }),
        unitDescription: this.fb.group({
          UNTIsFurnitured: false,
          UNTFurnitureStatus: "F",
          UNTKitchenCabinets: "F",
          UNTNumberOfBedRooms: null,
          UNTNumberOfBathRooms: null,
          UNTUnitKitchen: null,
          UNTUnitHall: null,
          UNTUnitBalacona: null,
          UNTUnitElevator: false,
          UNTUnitAirCondition: false,
          UNTUnitMainRoad: false,

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
      
      
      this.sub = this.activatedRoute.params.subscribe(params => { //====لتحديد هل تم فتح الشاشة بمعلومية المستأجر====

        if(params['id']){
          this.id = +params['id'];
          this.getUnitById(this.id);
        }
        else{ this.unitForDisplay = new Units(); }
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
unitForSale: string ;
unitForRent: string ;
tenDeleted: number ;
unitForDisplay:Units;
unitFurniture: string ;
unitElevator: string ;
unitAirCodition: string ;
unitMainRoad: string ;
// =================================================================
mapFormvalue_to_UnitClass()
{
  // 'en-GB'  'en-US'
  // const unitCreationDate = new DatePipe('en-GB').transform(this.form.value.generalDescription.uNTCreationDate, 'dd/MM/yyyy')

  if (this.form.value.UNTUnitForSale) {this.unitForSale = 'T';}
  else { this.unitForSale = 'F'; }
  if (this.form.value.UNTUnitForRent) {this.unitForRent = 'T';}
  else { this.unitForRent = 'F'; }

  if (this.form.value.settings.isActive) {this.tenActive = 'T';}
  else { this.tenActive = 'F'; }
  if (this.form.value.settings.isDeleted) {this.tenDeleted = 1;}
  else { this.tenDeleted = 0 ; }

  if (this.form.value.unitDescription.UNTIsFurnitured) {this.unitFurniture = 'T';}
  else { this.unitFurniture = 'F' ; }

  if (this.form.value.unitDescription.UNTUnitElevator) {this.unitElevator = 'T';}
  else { this.unitElevator = 'F' ; }
  if (this.form.value.unitDescription.UNTUnitAirCondition) {this.unitAirCodition = 'T';}
  else { this.unitAirCodition = 'F' ; }
  if (this.form.value.unitDescription.UNTUnitMainRoad) {this.unitMainRoad = 'T';}
  else { this.unitMainRoad = 'F' ; }


    this.unitForDisplay.id= this.form.value.id;
    this.unitForDisplay.branch_KeyField= this.form.value.branch_KeyField;
    this.unitForDisplay.owner_KeyField= this.form.value.owner_KeyField;
    this.unitForDisplay.build_KeyField= this.form.value.build_KeyField;
    this.unitForDisplay.UNTCode= this.form.value.UNTCode;
    this.unitForDisplay.UNTPic= this.form.value.UNTPic;
    this.unitForDisplay.UNTUnitFileNumber= this.form.value.UNTUnitFileNumber;
    this.unitForDisplay.UNTDescription= this.form.value.UNTDescription;
    this.unitForDisplay.UNTFloorNumber= this.form.value.UNTFloorNumber;
    this.unitForDisplay.UNTUnitNumber= this.form.value.UNTUnitNumber;
    this.unitForDisplay.UNTUnitArea= this.form.value.UNTUnitArea;
    this.unitForDisplay.UNTMeasuringUnit= this.form.value.UNTMeasuringUnit;
    this.unitForDisplay.UNTUnitType= this.form.value.UNTUnitType;
    this.unitForDisplay.UNTUnitForSale= this.unitForSale;
    this.unitForDisplay.UNTUnitForRent= this.unitForRent;

    // if (this.form.value.generalDescription.uNTCreationDate != null){
    //   this.unitForDisplay.UNTCreationDate= unitCreationDate;  }

    this.unitForDisplay.UNTHousingStatus= this.form.value.generalDescription.UNTHousingStatus;
    this.unitForDisplay.UNTConstructionStatus= this.form.value.generalDescription.UNTConstructionStatus;
    this.unitForDisplay.UNTPropertyUsageType= this.form.value.generalDescription.UNTPropertyUsageType;    
    this.unitForDisplay.UNTPropertyType= this.form.value.generalDescription.UNTPropertyType;
    this.unitForDisplay.UNTUnitFacing= this.form.value.generalDescription.UNTUnitFacing;
    this.unitForDisplay.UNTUnitDirection= this.form.value.generalDescription.UNTUnitDirection;
    
    this.unitForDisplay.UNTRentalCycle= this.form.value.rentValues.UNTRentalCycle;
    this.unitForDisplay.UNTMonthlyRentValue= this.form.value.rentValues.UNTMonthlyRentValue;
    this.unitForDisplay.UNTWeeklyRentValue= this.form.value.rentValues.UNTWeeklyRentValue;
    this.unitForDisplay.UNTDailyRentValue= this.form.value.rentValues.UNTDailyRentValue;
    this.unitForDisplay.UNTPayInstallmentEveryMonths= this.form.value.rentValues.UNTPayInstallmentEveryMonths ;
    this.unitForDisplay.UNTNumberOfInstallments= this.form.value.rentValues.UNTNumberOfInstallments ;
    this.unitForDisplay.UNTMonthlyElectricityFee= this.form.value.rentValues.UNTMonthlyElectricityFee;
    this.unitForDisplay.UNTMonthlyWaterFee= this.form.value.rentValues.UNTMonthlyWaterFee ;
    this.unitForDisplay.UNTMonthlyGasFee= this.form.value.rentValues.UNTMonthlyGasFee ;
    this.unitForDisplay.UNTNumberOfParkingLots= this.form.value.rentValues.UNTNumberOfParkingLots ;
    this.unitForDisplay.UNTMonthlyParkingFee= this.form.value.rentValues.UNTMonthlyParkingFee ;
    this.unitForDisplay.UNTLastElectricityReading= this.form.value.rentValues.UNTLastElectricityReading;
    this.unitForDisplay.UNTLastWaterReading= this.form.value.rentValues.UNTLastWaterReading;
    this.unitForDisplay.UNTLastGasReading= this.form.value.rentValues.UNTLastGasReading;
    this.unitForDisplay.UNTUnitNoFees= this.form.value.rentValues.UNTUnitNoFees;
    this.unitForDisplay.UNTUnitHotOffer= this.form.value.rentValues.UNTUnitHotOffer;
    this.unitForDisplay.UNTUnitSold= this.form.value.rentValues.UNTUnitSold;
    this.unitForDisplay.UNTSoldValue= this.form.value.rentValues.UNTSoldValue;
    
    this.unitForDisplay.UNTIsFurnitured= this.unitFurniture ; // this.form.value.unitDescription.UNTIsFurnitured ;
    this.unitForDisplay.UNTFurnitureStatus= this.form.value.unitDescription.UNTFurnitureStatus ;
    this.unitForDisplay.UNTKitchenCabinets= this.form.value.unitDescription.UNTKitchenCabinets ;
    this.unitForDisplay.UNTNumberOfBedRooms= this.form.value.unitDescription.UNTNumberOfBedRooms ;
    this.unitForDisplay.UNTNumberOfBathRooms= this.form.value.unitDescription.UNTNumberOfBathRooms ;
    this.unitForDisplay.UNTUnitKitchen= this.form.value.unitDescription.UNTUnitKitchen ;
    this.unitForDisplay.UNTUnitHall= this.form.value.unitDescription.UNTUnitHall ;
    this.unitForDisplay.UNTUnitBalacona= this.form.value.unitDescription.UNTUnitBalacona ;
    this.unitForDisplay.UNTUnitElevator= this.unitElevator ; // this.form.value.unitDescription.UNTUnitElevator ;
    this.unitForDisplay.UNTUnitAirCondition= this.unitAirCodition; // this.form.value.unitDescription.UNTUnitAirCondition ;
    this.unitForDisplay.UNTUnitMainRoad= this.unitMainRoad; // this.form.value.unitDescription.UNTUnitMainRoad ;

    this.unitForDisplay.UNTActive = this.tenActive ;
    this.unitForDisplay.RowDelete = this.tenDeleted ;
}
// ===============================================================
getUnitById(id:number)
{
  this.unitsService.getOneUnit(id).subscribe( (oneUnit:Units)=>
  {
    
    this.fillForm(oneUnit);
    this.unitForDisplay = oneUnit;
  } )
}
// ================================================================
// --------------Form fill values----------------
is_active: Boolean ;
is_delete: Boolean ;
is_ForSale: Boolean ;
is_ForRent: Boolean ;
is_Furniture: Boolean ;
is_Elevator: Boolean ;
is_AirCondition: Boolean ;
is_MainRoad: Boolean ;
fillForm(tent: Units){  
  if (tent.UNTActive == 'T') {this.is_active = true;}
  else { this.is_active = false; }
  // ==========================================================
  if (tent.UNTIsFurnitured == 'T') {this.is_Furniture = true;}
  else { this.is_Furniture = false; }
  // ==========================================================
  if (tent.UNTUnitElevator == 'T') {this.is_Elevator = true;}
  else { this.is_Elevator = false; }
  // ==========================================================
  if (tent.UNTUnitAirCondition == 'T') {this.is_AirCondition = true;}
  else { this.is_AirCondition = false; }
  // ==========================================================
  if (tent.UNTUnitMainRoad == 'T') {this.is_MainRoad = true;}
  else { this.is_MainRoad = false; }
  // ==========================================================
  if (tent.branch_KeyField != null){
    this.getBuildingPerBranch(this.curCOMId,this.account.periorty, tent.branch_KeyField);
  }
  // ==========================================================
  // ==========================================================
  if(tent.UNTPic!=null)
  {
    this.defaultCusImage = tent.UNTPic as unknown as string;
  }else{
    this.defaultCusImage=new ApiConstant().noImage;
  }
  // ==========================================================
  if (tent.RowDelete == 1) {this.is_delete = true;}
  else { this.is_delete = false; }
  if (tent.UNTUnitForRent == "T") {this.is_ForRent = true;}
  else { this.is_ForRent = false; }
  if (tent.UNTUnitForSale == "T") {this.is_ForSale = true;}
  else { this.is_ForSale = false; }

  this.form.patchValue({
    id: tent.id,
    branch_KeyField: tent.branch_KeyField,
    owner_KeyField: tent.owner_KeyField,
    build_KeyField: tent.build_KeyField,
    UNTCode: tent.UNTCode,
    UNTPic: tent.UNTPic,
    UNTUnitFileNumber: tent.UNTUnitFileNumber,
    UNTDescription: tent.UNTDescription,
    UNTFloorNumber: tent.UNTFloorNumber,
    UNTUnitNumber: tent.UNTUnitNumber,
    UNTUnitArea: tent.UNTUnitArea,
    UNTMeasuringUnit: tent.UNTMeasuringUnit,
    UNTUnitType: tent.UNTUnitType,
    UNTUnitForSale: this.is_ForSale,
    UNTUnitForRent: this.is_ForRent,

    generalDescription: {
      uNTCreationDate: tent.UNTCreationDate,
      UNTHousingStatus: tent.UNTHousingStatus,
      UNTConstructionStatus: tent.UNTConstructionStatus,
      UNTPropertyUsageType: tent.UNTPropertyUsageType,      
      UNTPropertyType: tent.UNTPropertyType,
      UNTUnitFacing: tent.UNTUnitFacing,
      UNTUnitDirection: tent.UNTUnitDirection,
    },

    rentValues: {
      UNTRentalCycle: tent.UNTRentalCycle,
      UNTMonthlyRentValue: tent.UNTMonthlyRentValue,
      UNTWeeklyRentValue: tent.UNTWeeklyRentValue,
      UNTDailyRentValue: tent.UNTDailyRentValue,
      UNTPayInstallmentEveryMonths: tent.UNTPayInstallmentEveryMonths,
      UNTNumberOfInstallments: tent.UNTNumberOfInstallments,
      UNTMonthlyElectricityFee: tent.UNTMonthlyElectricityFee,
      UNTMonthlyWaterFee: tent.UNTMonthlyWaterFee,
      UNTMonthlyGasFee: tent.UNTMonthlyGasFee,
      UNTNumberOfParkingLots: tent.UNTNumberOfParkingLots,
      UNTMonthlyParkingFee: tent.UNTMonthlyParkingFee,
      UNTLastElectricityReading: tent.UNTLastElectricityReading,
      UNTLastWaterReading: tent.UNTLastWaterReading,
      UNTLastGasReading: tent.UNTLastGasReading,
      UNTUnitNoFees: tent.UNTUnitNoFees,
      UNTUnitHotOffer: tent.UNTUnitHotOffer,
      UNTUnitSold: tent.UNTUnitSold,
      UNTSoldValue: tent.UNTSoldValue,
    },

    unitDescription: {
      UNTIsFurnitured: this.is_Furniture, // tent.UNTIsFurnitured,
      UNTFurnitureStatus: tent.UNTFurnitureStatus,
      UNTKitchenCabinets: tent.UNTKitchenCabinets,
      UNTNumberOfBedRooms: tent.UNTNumberOfBedRooms,
      UNTNumberOfBathRooms: tent.UNTNumberOfBathRooms,
      UNTUnitKitchen: tent.UNTUnitKitchen,
      UNTUnitHall: tent.UNTUnitHall,
      UNTUnitBalacona: tent.UNTUnitBalacona,
      UNTUnitElevator: this.is_Elevator, //tent.UNTUnitElevator,
      UNTUnitAirCondition: this.is_AirCondition, //tent.UNTUnitAirCondition,
      UNTUnitMainRoad: this.is_MainRoad, //tent.UNTUnitMainRoad,
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
  this.mapFormvalue_to_UnitClass();
  if (!rowId) {
    // ====في حالة إضافة سطر جديد====
    console.log(this.unitForDisplay)
  this.unitsService.addUnit(this.unitForDisplay,this.CusImageToUpload).subscribe(
    res=>{
     console.log("yes",res);
     this.snackBar.open('تم إضافة بيانات الوحدة', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
     this.router.navigate(["units/unit"]);
    } ,
    error=>{
      this.snackBar.open(' خطأ في اضافه الوحدة', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
    }
   )
  }
  else{
    // ====في حالة تعديل بيانات سطر موجود====

  this.unitsService.editUnit(this.unitForDisplay, this.CusImageToUpload)
  .subscribe(res=>{
    console.log("yes updated",res);
    this.snackBar.open('تم تعديل بيانات الوحدة', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    this.router.navigate(["units/unit"]);
  },
  error=>{
    this.snackBar.open(' خطأ في تعديل بيانات الوحدة', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

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
  console.log("====Selected Build:: " + event.value) ; 
  this.unitsService.getOneBuilding(event.value).subscribe(
    responseBuild => {
    this.curOwnerId = responseBuild['owner_KeyField'] ;
    console.log("====Cur Owner:: "+ this.curOwnerId + "  " + responseBuild['owner_FullName'])
    this.form.controls['owner_KeyField'].setValue(this.curOwnerId);
    },
    error => {
      this.snackBar.open('خطأ في استرجاع بيانات العقار', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
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
