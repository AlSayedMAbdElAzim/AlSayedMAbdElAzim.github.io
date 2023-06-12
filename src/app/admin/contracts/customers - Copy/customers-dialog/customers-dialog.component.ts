import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Tenant, TenantProfile, TenantContacts, TenantSocial, TenantSettings } from 'src/app/models/customerForDisplay';

@Component({
  selector: 'app-customers-dialog',
  templateUrl: './customers-dialog.component.html',
  styleUrls: ['./customers-dialog.component.scss']
})
export class CustomersDialogComponent implements OnInit {

  public form:UntypedFormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<CustomersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public user: Tenant,
              public fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      id: null,
      code: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      // password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      profile: this.fb.group({
        name: null,
        surname: null,  
        birthday: null,
        gender: null,
        image: null
      }),
      // work: this.fb.group({
      //   company: null,
      //   position: null,
      //   salary: null
      // }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null          
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null
      })
    });
  }

  ngOnInit() {
    if(this.user){
      this.form.setValue(this.user);
    } 
    else{
      this.user = new Tenant();
      this.user.profile = new TenantProfile();
      // this.user.work = new TenantWork();
      this.user.contacts = new TenantContacts();
      this.user.social = new TenantSocial();
      this.user.settings = new TenantSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}
