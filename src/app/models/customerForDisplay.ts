export class Tenant {
  id: number;
  username: string;
  code: number;
  image: File;
  firstname: string;
  lastname: string;
  mobile: string;
  selftype: string;

  profile: TenantProfile;
  work: TenantWork;
  contacts: TenantContacts;
  social: TenantSocial;
  settings: TenantSettings;
}

export class TenantProfile {
  birthday: Object; // Date ; // Object; // string ;
  gender: string;
  curbuilding: number;
  curunit: number;

}

export class TenantWork {
  company: string;
  position: string;
  nationalIDType: string;
  nationalID: string;
  nationalIDStartDate: Date ;
  nationalIDEndDate: Date ;
  nationalIDPic: File;

}

export class TenantContacts{
  email: string;
  homephone: string;
  workphone: string;
  address: string;
  country: number;
}

export class TenantSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class TenantSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

// =====================================================
// =====================================================
// export class Tenant {
//   id: number;
//   username: string;
//   code: number;
//   // password: string;
//   profile: TenantProfile;
//   work: TenantWork;
//   contacts: TenantContacts;
//   social: TenantSocial;
//   settings: TenantSettings;
// }

// export class TenantProfile {
//   name: string;
//   surname: string;
//   birthday: string ; // Date ; // Object;
//   gender: string;
//   image: File;
// }

// export class TenantWork {
//   company: string;
//   position: string;
//   // salary: number;
// }

// export class TenantContacts{
//   email: string;
//   phone: string;
//   address: string;
//   country: number;
// }

// export class TenantSocial {
//   facebook: string;
//   twitter: string;
//   google: string;
// }

// export class TenantSettings{
//   isActive: boolean;
//   isDeleted: boolean;
//   registrationDate: Date;
//   joinedDate: Date;
// }
