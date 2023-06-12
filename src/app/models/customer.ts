export class Customer {
  id : number;
  Userid : number;
  COMId : number;
  RowConfirm : number;
  RowDelete : number;
  RowStatus : number;
  CUSLangtitude : number;
  CUSAltitude : number;
  CUSNotes : string;
  EntryUser : number;
  Related_CUSKeyField : number;
  // inputs الظاهره
  CUSCode : number;
  CUSName : string;
  CUSPic : File;
  CUSGender : string;
  CUSBirthDate : Object; // Date; // string ; //Object; // Date;
  CUSMobile : string;
  CUSEmail : string;
  CUSActive : String;
  CUSAddress : string;
  CUSAddressDescription : string;
  Country_CTTKeyField : number;
  Governorate_CTTKeyField : number;
  City_CTTKeyField : number;
  Area_CTTKeyField : number;
  Group_CTTKeyField : number;
  //===الزيادات===
  CUSusername : string;
  CUSFirstName : string ;
  CUSLastName : string;
  CUSFacebook : string;
  CUSTwitter : string;
  CUSGoogle : string;
  CUSGuarantor : string;
  CUSJobName : string;
  // ======
  CUSSelfType : string;
  current_building : number;
  current_unit : number;
  CUSIDPic : File;
  CUSNationalIDType : string;
  CUSNationalID : string;
  CUSNationalIDStartDate : Object; // Date;
  CUSNationalIDEndDate : Object; // Date;
  CUSWorkPhone : string;
  CUSHomePhone : string;

}
