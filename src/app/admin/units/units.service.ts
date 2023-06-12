import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import { Building } from 'src/app/models/building';
import { Units } from 'src/app/models/units' ;
import { ApiConstant } from 'src/app/constants/api-constant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UnitsService {
  baseUrl: string = new ApiConstant().api_Ip;
  secondPartUrl: string = new ApiConstant().api_constant;
  curCOMId: number = environment.comid;

  constructor(private http: HttpClient,
    private globalServ: GlobalService) { }

  // =======================================================================
  getOneBuilding(id: number): Observable<Building> {
    return this.http.get<Building>(this.baseUrl + this.secondPartUrl + 'units/building/' + id  , this.globalServ.getAuthHeaders());
  }
  // ================================================================
  getAllBuilding(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'units/building/allBuildings/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getBuildingsPerBranch(comId: number, periorty: number, curbra: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'units/building/buildingsPerSpec/?M='+comId+'&C='+periorty+'&branch='+curbra, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getAllUnits(comId: number, periorty: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'units/unit/allUnits/?M='+comId+'&C='+periorty, this.globalServ.getAuthHeaders() );
  }
  // =================================================================
  getOneUnit(id: number): Observable<Units> {
    return this.http.get<Units>(this.baseUrl + this.secondPartUrl + 'units/unit/' + id  , this.globalServ.getAuthHeaders());
  }
  // ================================================================
  deleteBuilding(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'units/building/' + id , this.globalServ.getAuthHeaders());
  }
  // =================================================================
  deleteUnit(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + this.secondPartUrl + 'units/unit/' + id , this.globalServ.getAuthHeaders());
  }
// ===========================================================================
  getAllUnitsPerBuilding(comId: number, periorty: number, buidId: number): Observable<any> {
    return this.http.get(this.baseUrl + this.secondPartUrl + 'units/unit/unitsPerSpec/?M='+comId+'&C='+periorty+'&building='+buidId, this.globalServ.getAuthHeaders() );

  }
  // =================================================================
    // =================add new Building===============================
    addBuild(newBuild: Building,fileToUploade: File ): Observable<Building> {
      var URL=this.baseUrl + this.secondPartUrl + 'units/building/';
      const formData:FormData=new FormData();
      if(fileToUploade){ formData.append('BUIPic',fileToUploade); }

      // if(newBuild.BUIFeatures)
      // { formData.append('BUIFeatures',newBuild.BUIFeatures.toString()); }

      if(newBuild.BUICode)
      { formData.append('BUICode',newBuild.BUICode.toString()); }

      if(newBuild.branch_KeyField)
      { formData.append('branch_KeyField',newBuild.branch_KeyField.toString()); }
      if(newBuild.owner_KeyField)
      { formData.append('owner_KeyField',newBuild.owner_KeyField.toString()); }
      if(newBuild.ownershipDocType_CTTKeyField)
      { formData.append('ownershipDocType_CTTKeyField',newBuild.ownershipDocType_CTTKeyField.toString()); }

     if(newBuild.Country_CTTKeyField)
      { formData.append('Country_CTTKeyField', newBuild.Country_CTTKeyField.toString() ); }
     if(newBuild.Governorate_CTTKeyField)
     { formData.append('Governorate_CTTKeyField', newBuild.Governorate_CTTKeyField.toString() ); }

     if(newBuild.City_CTTKeyField && newBuild.City_CTTKeyField !== null)
     { formData.append('City_CTTKeyField', newBuild.City_CTTKeyField.toString() ); }
    if(newBuild.Area_CTTKeyField && newBuild.Area_CTTKeyField !== null)
    { formData.append('Area_CTTKeyField', newBuild.Area_CTTKeyField.toString() ); }

      if(newBuild.BUIRecieveDate)
      { formData.append('BUIRecieveDate',newBuild.BUIRecieveDate.toString()); }

     formData.append('BUIName',newBuild.BUIName);
     formData.append('BUIDescription',newBuild.BUIDescription);
      formData.append('ownershipDocNumber',newBuild.ownershipDocNumber);

      if(newBuild.BUIStreetName && newBuild.BUIStreetName !== null)
        {formData.append('BUIStreetName',newBuild.BUIStreetName);}
      if(newBuild.BUIBuildingNumber && newBuild.BUIBuildingNumber !== null)
        {formData.append('BUIBuildingNumber',newBuild.BUIBuildingNumber);}
      if(newBuild.BUIZibCode && newBuild.BUIZibCode !== null)
        {formData.append('BUIZibCode',newBuild.BUIZibCode);}
      if(newBuild.BUIAddress && newBuild.BUIAddress !== null)
        {formData.append('BUIAddress',newBuild.BUIAddress);}
      if(newBuild.BUIAddressDescription && newBuild.BUIAddressDescription !== null)
        {formData.append('BUIAddressDescription',newBuild.BUIAddressDescription);}

      if(newBuild.BUILangtitude){formData.append('BUILangtitude',newBuild.BUILangtitude.toString());}
      if(newBuild.BUIAltitude){formData.append('BUIAltitude',newBuild.BUIAltitude.toString());}

      formData.append('BUIActive',newBuild.BUIActive.toString() );
      formData.append('RowDelete',newBuild.RowDelete.toString());

      formData.append('BUIHousingStatus',newBuild.BUIHousingStatus);
      formData.append('BUIConstructionStatus',newBuild.BUIConstructionStatus);

      formData.append('BUIPropertyType',newBuild.BUIPropertyType);
      formData.append('BUIPropertyUsageType',newBuild.BUIPropertyUsageType);

      if(newBuild.BUIFloorsNumber){formData.append('BUIFloorsNumber',newBuild.BUIFloorsNumber.toString());}
      if(newBuild.BUIFlatsNumber){formData.append('BUIFlatsNumber',newBuild.BUIFlatsNumber.toString());}
      if(newBuild.BUIShopsNumber){formData.append('BUIShopsNumber',newBuild.BUIShopsNumber.toString());}
      if(newBuild.BUIStoresNumber){formData.append('BUIStoresNumber',newBuild.BUIStoresNumber.toString());}
      if(newBuild.BUINumberOfElevators){formData.append('BUINumberOfElevators',newBuild.BUINumberOfElevators.toString());}
      if(newBuild.BUINumberOfParkingLots){formData.append('BUINumberOfParkingLots',newBuild.BUINumberOfParkingLots.toString());}
      if(newBuild.BUIEnteringGate){formData.append('BUIEnteringGate',newBuild.BUIEnteringGate.toString());}
      if(newBuild.BUIBuildingArea){formData.append('BUIBuildingArea',newBuild.BUIBuildingArea.toString());}

      formData.append('BUIMeasuringUnit',newBuild.BUIMeasuringUnit);

         return this.http.post<Building>(URL, formData, this.globalServ.getAuthHeaders_for_files())
       }
     // ========================================================================
     // =================Edit Building===============================
    editBuild(oneBuild: Building,fileToUploade: File ): Observable<Building> {
      var id = oneBuild.id;
      var URL=this.baseUrl + this.secondPartUrl + 'units/building/'+ id + "/";
      const formData:FormData=new FormData();

      if(fileToUploade){
        formData.append('BUIPic',fileToUploade);
      }

// console.log("===JSON.stringify(oneBuild.BUIFeatures)===::: " + JSON.stringify(oneBuild.BUIFeatures) );

      // if(oneBuild.BUIFeatures)
      // { formData.append('BUIFeatures', JSON.stringify(oneBuild.BUIFeatures) ); }

      if(oneBuild.BUICode)
      { formData.append('BUICode',oneBuild.BUICode.toString()); }

      if(oneBuild.branch_KeyField)
      { formData.append('branch_KeyField',oneBuild.branch_KeyField.toString()); }
      if(oneBuild.owner_KeyField)  // !==null
      { formData.append('owner_KeyField',oneBuild.owner_KeyField.toString()); }
      if(oneBuild.ownershipDocType_CTTKeyField)
      { formData.append('ownershipDocType_CTTKeyField',oneBuild.ownershipDocType_CTTKeyField.toString()); }

     if(oneBuild.Country_CTTKeyField)
      { formData.append('Country_CTTKeyField', oneBuild.Country_CTTKeyField.toString() ); }
     if(oneBuild.Governorate_CTTKeyField)
     { formData.append('Governorate_CTTKeyField', oneBuild.Governorate_CTTKeyField.toString() ); }

     console.log("====oneBuild.City_CTTKeyField:: "+ oneBuild.City_CTTKeyField);
     console.log("====oneBuild.Area_CTTKeyField:: "+ oneBuild.Area_CTTKeyField);

     if(oneBuild.City_CTTKeyField && oneBuild.City_CTTKeyField !== null)
     { formData.append('City_CTTKeyField', oneBuild.City_CTTKeyField.toString() ); }
    if(oneBuild.Area_CTTKeyField && oneBuild.Area_CTTKeyField !== null)
    { formData.append('Area_CTTKeyField', oneBuild.Area_CTTKeyField.toString() ); }

      if(oneBuild.BUIRecieveDate)
      { formData.append('BUIRecieveDate',oneBuild.BUIRecieveDate.toString()); }

     formData.append('BUIName',oneBuild.BUIName);
     formData.append('BUIDescription',oneBuild.BUIDescription);

      formData.append('ownershipDocNumber',oneBuild.ownershipDocNumber);

      if(oneBuild.BUIStreetName && oneBuild.BUIStreetName !== null)
        {formData.append('BUIStreetName',oneBuild.BUIStreetName);}
      if(oneBuild.BUIBuildingNumber && oneBuild.BUIBuildingNumber !== null)
        {formData.append('BUIBuildingNumber',oneBuild.BUIBuildingNumber);}
      if(oneBuild.BUIZibCode && oneBuild.BUIZibCode !== null)
        {formData.append('BUIZibCode',oneBuild.BUIZibCode);}
      if(oneBuild.BUIAddress && oneBuild.BUIAddress !== null)
        {formData.append('BUIAddress',oneBuild.BUIAddress);}
      if(oneBuild.BUIAddressDescription && oneBuild.BUIAddressDescription !== null)
        {formData.append('BUIAddressDescription',oneBuild.BUIAddressDescription);}

      if(oneBuild.BUILangtitude){formData.append('BUILangtitude',oneBuild.BUILangtitude.toString());}
      if(oneBuild.BUIAltitude){formData.append('BUIAltitude',oneBuild.BUIAltitude.toString());}

      formData.append('BUIActive',oneBuild.BUIActive.toString() );
      formData.append('RowDelete',oneBuild.RowDelete.toString());

      formData.append('BUIHousingStatus',oneBuild.BUIHousingStatus);
      formData.append('BUIConstructionStatus',oneBuild.BUIConstructionStatus);

      formData.append('BUIPropertyType',oneBuild.BUIPropertyType);
      formData.append('BUIPropertyUsageType',oneBuild.BUIPropertyUsageType);
      if(oneBuild.BUIFloorsNumber){formData.append('BUIFloorsNumber',oneBuild.BUIFloorsNumber.toString());}
      if(oneBuild.BUIFlatsNumber){formData.append('BUIFlatsNumber',oneBuild.BUIFlatsNumber.toString());}
      if(oneBuild.BUIShopsNumber){formData.append('BUIShopsNumber',oneBuild.BUIShopsNumber.toString());}
      if(oneBuild.BUIStoresNumber){formData.append('BUIStoresNumber',oneBuild.BUIStoresNumber.toString());}
      if(oneBuild.BUINumberOfElevators){formData.append('BUINumberOfElevators',oneBuild.BUINumberOfElevators.toString());}
      if(oneBuild.BUINumberOfParkingLots){formData.append('BUINumberOfParkingLots',oneBuild.BUINumberOfParkingLots.toString());}
      if(oneBuild.BUIEnteringGate){formData.append('BUIEnteringGate',oneBuild.BUIEnteringGate.toString());}
      if(oneBuild.BUIBuildingArea){formData.append('BUIBuildingArea',oneBuild.BUIBuildingArea.toString());}
      formData.append('BUIMeasuringUnit',oneBuild.BUIMeasuringUnit);

        return this.http.put<Building>(URL, formData, this.globalServ.getAuthHeaders_for_files())
      }
     // ========================================================================
     // =================================================================
    // =================add new Units===============================
    addUnit(unit: Units,fileToUploade: File ): Observable<Units> {
      var URL=this.baseUrl + this.secondPartUrl + 'units/unit/';
      const formData:FormData=new FormData();
      if(fileToUploade){ formData.append('UNTPic',fileToUploade); }

      if(unit.UNTCode)
      { formData.append('UNTCode',unit.UNTCode.toString()); }

      if(unit.branch_KeyField)
      { formData.append('branch_KeyField',unit.branch_KeyField.toString()); }
      if(unit.owner_KeyField)
      { formData.append('owner_KeyField',unit.owner_KeyField.toString()); }
      if(unit.build_KeyField)
      { formData.append('build_KeyField',unit.build_KeyField.toString()); }

      if(unit.UNTCreationDate)
      { formData.append('UNTCreationDate',unit.UNTCreationDate.toString()); }

      formData.append('UNTUnitFileNumber',unit.UNTUnitFileNumber);
      if(unit.UNTFloorNumber){formData.append('UNTFloorNumber',unit.UNTFloorNumber.toString());}
      if(unit.UNTUnitArea){formData.append('UNTUnitArea',unit.UNTUnitArea.toString());}

      formData.append('UNTDescription',unit.UNTDescription);
      formData.append('UNTUnitNumber',unit.UNTUnitNumber);
      formData.append('UNTMeasuringUnit',unit.UNTMeasuringUnit);
      formData.append('UNTUnitForSale',unit.UNTUnitForSale);
      formData.append('UNTUnitForRent',unit.UNTUnitForRent);

      formData.append('UNTHousingStatus',unit.UNTHousingStatus);
      formData.append('UNTConstructionStatus',unit.UNTConstructionStatus);
      formData.append('UNTPropertyUsageType',unit.UNTPropertyUsageType);
      formData.append('UNTUnitType',unit.UNTUnitType);
      formData.append('UNTPropertyType',unit.UNTPropertyType);
      formData.append('UNTUnitFacing',unit.UNTUnitFacing);
      formData.append('UNTUnitDirection',unit.UNTUnitDirection);
      
      formData.append('UNTRentalCycle',unit.UNTRentalCycle);
      formData.append('UNTLastWaterReading',unit.UNTLastWaterReading);
      formData.append('UNTLastGasReading',unit.UNTLastGasReading);
      formData.append('UNTUnitNoFees',unit.UNTUnitNoFees);
      formData.append('UNTUnitHotOffer',unit.UNTUnitHotOffer);
      formData.append('UNTUnitSold',unit.UNTUnitSold);
      formData.append('UNTLastElectricityReading',unit.UNTLastElectricityReading);

      if(unit.UNTMonthlyRentValue){formData.append('UNTMonthlyRentValue',unit.UNTMonthlyRentValue.toString());}
      if(unit.UNTWeeklyRentValue){formData.append('UNTWeeklyRentValue',unit.UNTWeeklyRentValue.toString());}
      if(unit.UNTDailyRentValue){formData.append('UNTDailyRentValue',unit.UNTDailyRentValue.toString());}
      if(unit.UNTPayInstallmentEveryMonths){formData.append('UNTPayInstallmentEveryMonths',unit.UNTPayInstallmentEveryMonths.toString());}
      if(unit.UNTNumberOfInstallments){formData.append('UNTNumberOfInstallments',unit.UNTNumberOfInstallments.toString());}
      if(unit.UNTMonthlyElectricityFee){formData.append('UNTMonthlyElectricityFee',unit.UNTMonthlyElectricityFee.toString());}
      if(unit.UNTMonthlyWaterFee){formData.append('UNTMonthlyWaterFee',unit.UNTMonthlyWaterFee.toString());}
      if(unit.UNTMonthlyGasFee){formData.append('UNTMonthlyGasFee',unit.UNTMonthlyGasFee.toString());}
      if(unit.UNTNumberOfParkingLots){formData.append('UNTNumberOfParkingLots',unit.UNTNumberOfParkingLots.toString());}
      if(unit.UNTMonthlyParkingFee){formData.append('UNTMonthlyParkingFee',unit.UNTMonthlyParkingFee.toString());}
      if(unit.UNTSoldValue){formData.append('UNTSoldValue',unit.UNTSoldValue.toString());}

      formData.append('UNTIsFurnitured',unit.UNTIsFurnitured);
      formData.append('UNTFurnitureStatus',unit.UNTFurnitureStatus);
      formData.append('UNTKitchenCabinets',unit.UNTKitchenCabinets);
      formData.append('UNTUnitElevator',unit.UNTUnitElevator);
      formData.append('UNTUnitAirCondition',unit.UNTUnitAirCondition);
      formData.append('UNTUnitMainRoad',unit.UNTUnitMainRoad);

      if(unit.UNTNumberOfBedRooms){formData.append('UNTNumberOfBedRooms',unit.UNTNumberOfBedRooms.toString());}
      if(unit.UNTNumberOfBathRooms){formData.append('UNTNumberOfBathRooms',unit.UNTNumberOfBathRooms.toString());}
      if(unit.UNTUnitKitchen){formData.append('UNTUnitKitchen',unit.UNTUnitKitchen.toString());}
      if(unit.UNTUnitHall){formData.append('UNTUnitHall',unit.UNTUnitHall.toString());}
      if(unit.UNTUnitBalacona){formData.append('UNTUnitBalacona',unit.UNTUnitBalacona.toString());}

      formData.append('UNTActive',unit.UNTActive.toString() );
      formData.append('RowDelete',unit.RowDelete.toString());
      
      return this.http.post<Units>(URL, formData, this.globalServ.getAuthHeaders_for_files())
      }
     // ========================================================================
     // =================edit new Units===============================
    editUnit(unit: Units,fileToUploade: File ): Observable<Units> {
      var id = unit.id;
      var URL=this.baseUrl + this.secondPartUrl + 'units/unit/'+ id + "/";
      
      const formData:FormData=new FormData();
      if(fileToUploade){ formData.append('UNTPic',fileToUploade); }

      if(unit.UNTCode)
      { formData.append('UNTCode',unit.UNTCode.toString()); }

      if(unit.branch_KeyField)
      { formData.append('branch_KeyField',unit.branch_KeyField.toString()); }
      if(unit.owner_KeyField)
      { formData.append('owner_KeyField',unit.owner_KeyField.toString()); }
      if(unit.build_KeyField)
      { formData.append('build_KeyField',unit.build_KeyField.toString()); }

      if(unit.UNTCreationDate)
      { formData.append('UNTCreationDate',unit.UNTCreationDate.toString()); }

      formData.append('UNTUnitFileNumber',unit.UNTUnitFileNumber);
      if(unit.UNTFloorNumber){formData.append('UNTFloorNumber',unit.UNTFloorNumber.toString());}
      if(unit.UNTUnitArea){formData.append('UNTUnitArea',unit.UNTUnitArea.toString());}

      formData.append('UNTDescription',unit.UNTDescription);
      formData.append('UNTUnitNumber',unit.UNTUnitNumber);
      formData.append('UNTMeasuringUnit',unit.UNTMeasuringUnit);
      formData.append('UNTUnitForSale',unit.UNTUnitForSale);
      formData.append('UNTUnitForRent',unit.UNTUnitForRent);

      formData.append('UNTHousingStatus',unit.UNTHousingStatus);
      formData.append('UNTConstructionStatus',unit.UNTConstructionStatus);
      formData.append('UNTPropertyUsageType',unit.UNTPropertyUsageType);
      formData.append('UNTUnitType',unit.UNTUnitType);
      formData.append('UNTPropertyType',unit.UNTPropertyType);
      formData.append('UNTUnitFacing',unit.UNTUnitFacing);
      formData.append('UNTUnitDirection',unit.UNTUnitDirection);
      
      formData.append('UNTRentalCycle',unit.UNTRentalCycle);
      formData.append('UNTLastWaterReading',unit.UNTLastWaterReading);
      formData.append('UNTLastGasReading',unit.UNTLastGasReading);
      formData.append('UNTUnitNoFees',unit.UNTUnitNoFees);
      formData.append('UNTUnitHotOffer',unit.UNTUnitHotOffer);
      formData.append('UNTUnitSold',unit.UNTUnitSold);
      formData.append('UNTLastElectricityReading',unit.UNTLastElectricityReading);

      if(unit.UNTMonthlyRentValue){formData.append('UNTMonthlyRentValue',unit.UNTMonthlyRentValue.toString());}
      if(unit.UNTWeeklyRentValue){formData.append('UNTWeeklyRentValue',unit.UNTWeeklyRentValue.toString());}
      if(unit.UNTDailyRentValue){formData.append('UNTDailyRentValue',unit.UNTDailyRentValue.toString());}
      if(unit.UNTPayInstallmentEveryMonths){formData.append('UNTPayInstallmentEveryMonths',unit.UNTPayInstallmentEveryMonths.toString());}
      if(unit.UNTNumberOfInstallments){formData.append('UNTNumberOfInstallments',unit.UNTNumberOfInstallments.toString());}
      if(unit.UNTMonthlyElectricityFee){formData.append('UNTMonthlyElectricityFee',unit.UNTMonthlyElectricityFee.toString());}
      if(unit.UNTMonthlyWaterFee){formData.append('UNTMonthlyWaterFee',unit.UNTMonthlyWaterFee.toString());}
      if(unit.UNTMonthlyGasFee){formData.append('UNTMonthlyGasFee',unit.UNTMonthlyGasFee.toString());}
      if(unit.UNTNumberOfParkingLots){formData.append('UNTNumberOfParkingLots',unit.UNTNumberOfParkingLots.toString());}
      if(unit.UNTMonthlyParkingFee){formData.append('UNTMonthlyParkingFee',unit.UNTMonthlyParkingFee.toString());}
      if(unit.UNTSoldValue){formData.append('UNTSoldValue',unit.UNTSoldValue.toString());}

      formData.append('UNTIsFurnitured',unit.UNTIsFurnitured);
      formData.append('UNTFurnitureStatus',unit.UNTFurnitureStatus);
      formData.append('UNTKitchenCabinets',unit.UNTKitchenCabinets);
      formData.append('UNTUnitElevator',unit.UNTUnitElevator);
      formData.append('UNTUnitAirCondition',unit.UNTUnitAirCondition);
      formData.append('UNTUnitMainRoad',unit.UNTUnitMainRoad);

      if(unit.UNTNumberOfBedRooms){formData.append('UNTNumberOfBedRooms',unit.UNTNumberOfBedRooms.toString());}
      if(unit.UNTNumberOfBathRooms){formData.append('UNTNumberOfBathRooms',unit.UNTNumberOfBathRooms.toString());}
      if(unit.UNTUnitKitchen){formData.append('UNTUnitKitchen',unit.UNTUnitKitchen.toString());}
      if(unit.UNTUnitHall){formData.append('UNTUnitHall',unit.UNTUnitHall.toString());}
      if(unit.UNTUnitBalacona){formData.append('UNTUnitBalacona',unit.UNTUnitBalacona.toString());}

      formData.append('UNTActive',unit.UNTActive.toString() );
      formData.append('RowDelete',unit.RowDelete.toString());
      
      return this.http.put<Units>(URL, formData, this.globalServ.getAuthHeaders_for_files())
      
      }
     // ========================================================================


}
