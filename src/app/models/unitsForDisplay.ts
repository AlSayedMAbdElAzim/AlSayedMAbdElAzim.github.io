export class UnitForm {
    id: number;
    branch_KeyField: number;
    owner_KeyField: number;
    build_KeyField: number;
    UNTCode: number;
    UNTPic: File;
    UNTUnitFileNumber: string;
    UNTDescription: string;
    UNTFloorNumber: number;
    UNTUnitNumber: string;
    UNTUnitArea: number;
    UNTMeasuringUnit: string;
    UNTUnitForSale: boolean;
    UNTUnitForRent: boolean;
    UNTUnitType: string;
    generalDescription: GeneralDescription;
    rentValues: RentValues;
    unitDescription: UnitDescription;
    settings: UnitSettings;
  }

  export class GeneralDescription {
    uNTCreationDate: Object; // Date ; // Object; // string ;
    UNTHousingStatus: string;
    UNTConstructionStatus: string;
    UNTPropertyUsageType: string;    
    UNTPropertyType: string;
    UNTUnitFacing: string;
    UNTUnitDirection: string;
  }

  export class RentValues {
    UNTRentalCycle: string;
    UNTMonthlyRentValue: number;
    UNTWeeklyRentValue: number;
    UNTDailyRentValue: number;
    UNTPayInstallmentEveryMonths: number ;
    UNTNumberOfInstallments: number ;
    UNTMonthlyElectricityFee: number;
    UNTMonthlyWaterFee: number ;
    UNTMonthlyGasFee: number ;
    UNTNumberOfParkingLots: number ;
    UNTMonthlyParkingFee: number ;
    UNTLastElectricityReading: string;
    UNTLastWaterReading: string;
    UNTLastGasReading: string;
    UNTUnitNoFees: string;
    UNTUnitHotOffer: string;
    UNTUnitSold: string;
    UNTSoldValue: number;
  }

  export class UnitDescription{
    UNTIsFurnitured: boolean;
    UNTFurnitureStatus: string;
    UNTKitchenCabinets: string;
    UNTNumberOfBedRooms: number;
    UNTNumberOfBathRooms: number;
    UNTUnitKitchen: number;
    UNTUnitHall: number;
    UNTUnitBalacona: number;
    UNTUnitElevator: boolean;
    UNTUnitAirCondition: boolean;
    UNTUnitMainRoad: boolean;    
  }

  export class UnitSettings{
    isActive: boolean;
    isDeleted: boolean;
  }
