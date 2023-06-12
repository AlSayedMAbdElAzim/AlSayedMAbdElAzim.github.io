export class BuildingForm {
  id: number;
  branchKey: number;
  code: number;
  image: File;
  name: string;
  description: string;

  owner: BuildOwner;
  build_address: BuildAddress;
  build_desc: BuildDescription;
  settings: BuildSettings;
}

export class BuildOwner {
  recievedate: Object; // Date ; // Object; // string ;
  ownerKey: number;
  docType: number;
  docNumber: string;
}

export class BuildAddress {
  streetName: string;
  buildNumber: string;
  zibCode: string;
  address: string;
  addressDescription: string ;
  countryKey: number ;
  governorateKey: number;
  cityKey: number ;
  areaKey: number ;
  langtitude: number ;
  altitude: number ;
}

export class BuildDescription{
  housingStatus: string;
	constructionStatus: string;
	propertyType: string;
	propertyUsageType: string;
	floorsNumber: number;
	flatsNumber: number;
	shopsNumber: number;
	storesNumber: number;
	numberOfElevators: number;
	numberOfParkingLots: number;
	buildingArea: number;
	measuringUnit: string;
	enteringGate: number;
  // features: string[];
}

export class BuildSettings{
  isActive: boolean;
  isDeleted: boolean;
}
