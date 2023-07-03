import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-installment-dialog',
  templateUrl: './installment-dialog.component.html',
  styleUrls: ['./installment-dialog.component.scss']
})
export class InstallmentDialogComponent {
  public form: UntypedFormGroup;
  constructor(public dialogRef: MatDialogRef<InstallmentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public fb: UntypedFormBuilder) { }
// ===============================================================
action:string;
// ===============================================================
  ngOnInit(): void {
    this.form = this.fb.group({
      id: null,
      INSCode: [null, Validators.required],
      INSContractTyps: "I",
      INSStatus: "N",
      INSValue: 0,
      INSPayedValue: 0,
      dueDate:null,
      payDate: null,
      INSPersonPayName: null,
      INSNotes: null,
      RowConfirm: 0,
      RowDelete: 0,
      RowStatus: 0,
      contract_KeyField: null,
      branch_KeyField: null,
      owner_KeyField: null,
      build_KeyField: null,
      unit_KeyField: null,
      customer_KeyField: null
    });
// =========================================================
// =========================================================
    
    if(this.data.cttRow){
      console.log("===this.data.cttRow===");
      console.log(this.data.cttRow);
      
      this.action = "Patch" ;
      // this.form.patchValue(this.data.cttRow); 
      this.form.patchValue({ 
        id:this.data.cttRow.id,    
        INSCode:this.data.cttRow.INSCode,
        dueDate:new Date(this.data.cttRow.INSDueDate),
        payDate:new Date(this.data.cttRow.INSPayDate),
        INSPersonPayName:this.data.cttRow.INSPersonPayName,
        INSNotes: this.data.cttRow.INSNotes,
        contract_KeyField:this.data.cttRow.contract_KeyField, 
        branch_KeyField:this.data.cttRow.branch_KeyField, 
        owner_KeyField:this.data.cttRow.owner_KeyField, 
        build_KeyField:this.data.cttRow.build_KeyField, 
        unit_KeyField:this.data.cttRow.unit_KeyField, 
        customer_KeyField:this.data.cttRow.customer_KeyField,
        INSContractTyps:this.data.cttRow.INSContractTyps,
        INSStatus:this.data.cttRow.INSStatus,
        INSValue:this.data.cttRow.INSValue,
        INSPayedValue:this.data.cttRow.INSPayedValue,
        RowConfirm:this.data.cttRow.RowConfirm,
        RowDelete:this.data.cttRow.RowDelete,
        RowStatus:this.data.cttRow.RowStatus,
      });
    }
    else
    {
      console.log("==contract****:: "+this.data.contract) ;
      this.action = "Post" ;
      this.form.patchValue({ 
        contract_KeyField:this.data.contract, 
        branch_KeyField:this.data.branch, 
        owner_KeyField:this.data.owner, 
        build_KeyField:this.data.build, 
        unit_KeyField:this.data.unit, 
        customer_KeyField:this.data.customer,
        INSContractTyps: "I",
        INSStatus: "N",
        INSValue: 0,
        INSPayedValue: 0,
        RowConfirm: 0,
        RowDelete: 0,
        RowStatus: 0
      })
    } ;
  }
// // ==============================================================
//   public onSubmit(){
//     console.log(this.form.value);
//     if(this.form.valid){
//       this.dialogRef.close(this.form.value);
//     }
//   }
// ==============================================================
public onSave(){
  console.log("===***Press Save button***===") ;  
  if(this.form.valid){
    this.dialogRef.close({event:this.action, data:this.form.value});
  }
}
// ==========================================================================
  close(): void {
    console.log("===***Press Close button***===") ;
    this.action = "Cancel" ;    
    this.dialogRef.close({event:this.action});
  }
// ==========================================================================
// ==============================================================
}
