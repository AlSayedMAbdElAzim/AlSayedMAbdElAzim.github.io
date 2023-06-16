export class RentContractForm {
  id:                               number;
  COMId:                            number;
  Related_RCOKeyField:              number;
  RCOCode:                          number;
  RCOSubCode:                       number;
  rcodate:                          Object;
  RCOStartDate:                     Object;
  RCOEndDate:                       Object;
  RCOContractStatus:                string;

  contractUnit: ContractUnit;
  contractPerson: ContractPerson;
  contractValues: ContractValues;
  contractSettings: ContractSettings;  
}

export class ContractUnit{
  branch_KeyField:                  number;
  build_KeyField:                   number;
  unit_KeyField:                    number;
}

export class ContractPerson{
  owner_KeyField:                   number;
  owner_representative_KeyField:    number;
  customer_KeyField:                number;
  customer_representative_KeyField: number;
}

export class ContractValues{
  RCOContractValue:                 number;
  RCOPayEveryMonthesNo:             number;
  RCOMonthValue:                    number;
  RCOInsuranceValue:                number;
  RCOSeekingValue:                  number;
  RCOMonthlyExpense:                number;
  RCOExpenseDesc:                   string;
  RCOOtherValue:                    number;

  RCOMonthlyElectricValue:          number;
  RCOElectricCounterReading:        string;
  RCOMonthlyWaterValue:             number;
  RCOWaterCounterReading:           string;
  RCOMonthlyGasValue:               number;
  RCOGasCounterReading:             string;
}
export class ContractSettings{
  isActive: boolean;
  isDeleted: boolean;
}
