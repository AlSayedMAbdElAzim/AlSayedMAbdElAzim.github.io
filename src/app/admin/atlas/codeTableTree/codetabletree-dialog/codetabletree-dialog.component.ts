import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-codetabletree-dialog',
  templateUrl: './codetabletree-dialog.component.html',
  styleUrls: ['./codetabletree-dialog.component.scss']
})
export class CodetabletreeDialogComponent {

  public form: UntypedFormGroup;
  constructor(public dialogRef: MatDialogRef<CodetabletreeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: UntypedFormBuilder) { }
// =================================================
  ngOnInit(): void {
    this.form = this.fb.group({
      id: null,
      CTTSubjectName: [null, Validators.required],
      CTTIsDefaultValue: false,
      Parent_CTTKeyField: 0,
      Related_CTTKeyField: null,
      CTTSubjectEName: null,
      RowConfirm: 0,
      RowDelete: 0,
      RowStatus: 0,
      CTTArrangeOrder: 0,
      CTTSerial:null,
      CTTCode: null
    });
    console.log("============CodeTableTree Dialog=================");
    if(this.data.cttRow){
      console.log("===this.data.cttRow===");
      console.log(this.data.cttRow);
      this.form.patchValue(this.data.cttRow); // cttRow => category
    }
    else
    {
      console.log("==****:: "+this.data.parentID) ;
      this.form.patchValue({ Parent_CTTKeyField:this.data.parentID, })
    } ;
  }
// ==============================================================
  public onSubmit(){
    console.log(this.form.value);
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }
// ==============================================================
}
