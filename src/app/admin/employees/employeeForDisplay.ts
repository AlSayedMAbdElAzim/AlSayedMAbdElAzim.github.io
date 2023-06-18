export class Employee {
  id: number;
  username: string;
  UserCode: number;

  first_name: string;
  last_name: string;
  UserBirthDate: Object;
  gender: string;
  userPicture: string;

  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
}


export class UserWork {
  userJobName: string;
  is_superuser : boolean ;
  is_staff : boolean ;
  is_active : boolean ;
  is_employee :  string  ;
}

export class UserContacts{
  email: string;
  UserMobile: string;
  userAddress: string;
}

export class UserSocial {
  userFacebook: string;
  userTwitter: string;
  userGoogle: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  EntryDate: Date;
  joinedDate: Date;
}
