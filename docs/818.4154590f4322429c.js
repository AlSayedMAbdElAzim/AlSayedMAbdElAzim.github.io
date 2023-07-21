"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[818],{4818:(P,A,o)=>{o.r(A),o.d(A,{AtlasModule:()=>M,routes:()=>R});var m=o(6895),i=o(9132),l=o(4006),Z=o(589),b=o(4333),u=o(3609),O=o(1596),s=o(5783),c=o(2340),g=o(5521),e=o(4650),y=o(5298),q=o(6381),S=o(7465),E=o(7009),f=o(1576),N=o(4859),I=o(3546),F=o(4144),_=o(9549),x=o(3081);function w(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.ADD")))}function Y(n,t){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.EDIT")))}function J(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Arabic Name is required"),e.qZA())}function B(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Arabic Name isn't long enough, minimum of 4 characters"),e.qZA())}function H(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"English Name is required"),e.qZA())}function K(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"English Name isn't long enough, minimum of 4 characters"),e.qZA())}class U{constructor(t,a,r,d,p,h){this.localStore=t,this._companyService=a,this.global=r,this.router=d,this.snackBar=p,this.fb=h,this.curCOMId=c.N.comid,this.account=new s.n,this.fileToUpload=null,this.url=(new g.P).noImage,this.companyData_Form=this.fb.group({COMCode:[],COMAraName:["",l.kI.required],COMLogo:[],COMEngName:["",l.kI.required],COMDisplayedName:["",l.kI.required],COMAddress:[],COMPhone:[],COMMobile:["",l.kI.required],COMFax:[]})}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.get_CompanyData(this.curCOMId,this.account.periorty)):this.router.navigate(["/sign-in"])}handelFileInput(t){this.fileToUpload=t.item(0);var a=new FileReader;a.onload=r=>{this.url=r.target.result},a.readAsDataURL(this.fileToUpload),console.log("=========this.fileToUpload========="),console.log(this.fileToUpload)}get_CompanyData(t,a){this._companyService.getCompany(t,a).subscribe(r=>{this.companyDataPatchValues(r[0]),this.url=r[0].COMLogo},r=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0629","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}mappingCompanyDataFormToClass(){this.initializationForCompany(),this.newCompanyData.COMCode=this.companyData_Form.value.COMCode,this.newCompanyData.COMAraName=this.companyData_Form.value.COMAraName,this.newCompanyData.COMEngName=this.companyData_Form.value.COMEngName,this.newCompanyData.COMAddress=this.companyData_Form.value.COMAddress,this.newCompanyData.COMPhone=this.companyData_Form.value.COMPhone,this.newCompanyData.COMMobile=this.companyData_Form.value.COMMobile,this.newCompanyData.COMFax=this.companyData_Form.value.COMFax,this.newCompanyData.COMDisplayedName=this.companyData_Form.value.COMDisplayedName}companyDataPatchValues(t){this.companyData_Form.patchValue({COMCode:t.COMCode,COMAraName:t.COMAraName,COMEngName:t.COMEngName,COMAddress:t.COMAddress,COMPhone:t.COMPhone,COMMobile:t.COMMobile,COMFax:t.COMFax,COMDisplayedName:t.COMDisplayedName})}initializationForCompany(){this.newCompanyData={COMId:this.curCOMId,EntryDate:null,EntryUser:null,RowConfirm:0,RowStatus:0,RowDelete:0,COMCode:null,COMAraName:"",COMEngName:"",COMDisplayedName:"",COMLogo:null,COMAddress:"",COMPhone:"",COMMobile:"",COMFax:""}}saveEditCompanyData(){this.mappingCompanyDataFormToClass(),console.log("=====this.newCompanyData====="),console.log(this.newCompanyData),this._companyService.editCompany(this.newCompanyData,this.curCOMId,this.fileToUpload).subscribe(()=>{this.snackBar.open("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0647","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["atlas/company"])},t=>{console.log("ERROR",t),this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u062d\u0641\u0638 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0629","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}}U.\u0275fac=function(t){return new(t||U)(e.Y36(y.C),e.Y36(q.J),e.Y36(S.U),e.Y36(i.F0),e.Y36(E.ux),e.Y36(l.qu))},U.\u0275cmp=e.Xpm({type:U,selectors:[["app-company-info"]],decls:70,vars:38,consts:[[1,"p-2"],[4,"ngIf"],[1,"pt-3"],["autocomplete","off","fxLayout","row wrap",3,"formGroup","ngSubmit"],["fxFlex","100","fxFlex.gt-sm","40",1,"px-2"],["width","200","height","150","id","campanyLogo",3,"src"],[1,"file-upload"],["for","upload",1,"d-block","file-upload__label"],["type","file","id","upload","formControlName","COMLogo","name","COMLogo","accept","image/*",1,"file-upload__input",3,"change"],["fxFlex","100","fxFlex.gt-sm","60",1,"px-2"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","50",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","COMAraName","required",""],["matInput","","formControlName","COMEngName","required","","readonly",""],["matInput","","formControlName","COMDisplayedName"],["matInput","","formControlName","COMMobile"],["matInput","","formControlName","COMPhone"],["matInput","","formControlName","COMFax"],["fxFlex","100",1,"px-1"],["matInput","","formControlName","COMAddress","rows","3"],["fxFlex","100",1,"mt-2","text-center","w-100"],["mat-raised-button","","color","primary","type","submit"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title")(4,"h1"),e.YNc(5,w,3,3,"span",1),e.YNc(6,Y,3,3,"span",1),e._uU(7),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"mat-card-content",2)(10,"form",3),e.NdJ("ngSubmit",function(){return a.saveEditCompanyData()}),e.TgZ(11,"div",4),e._UZ(12,"img",5),e.TgZ(13,"div",6)(14,"label",7),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"input",8),e.NdJ("change",function(d){return a.handelFileInput(d.target.files)}),e.qZA()()(),e.TgZ(18,"div",9)(19,"div",10)(20,"div",11)(21,"mat-form-field",12)(22,"mat-label"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e._UZ(25,"input",13),e.YNc(26,J,2,0,"mat-error",1),e.YNc(27,B,2,0,"mat-error",1),e.qZA()(),e.TgZ(28,"div",11)(29,"mat-form-field",12)(30,"mat-label"),e._uU(31),e.ALo(32,"translate"),e.qZA(),e._UZ(33,"input",14),e.YNc(34,H,2,0,"mat-error",1),e.YNc(35,K,2,0,"mat-error",1),e.qZA()(),e.TgZ(36,"div",11)(37,"mat-form-field",12)(38,"mat-label"),e._uU(39),e.ALo(40,"translate"),e.qZA(),e._UZ(41,"input",15),e.qZA()(),e.TgZ(42,"div",11)(43,"mat-form-field",12)(44,"mat-label"),e._uU(45),e.ALo(46,"translate"),e.qZA(),e._UZ(47,"input",16),e.qZA()(),e.TgZ(48,"div",11)(49,"mat-form-field",12)(50,"mat-label"),e._uU(51),e.ALo(52,"translate"),e.qZA(),e._UZ(53,"input",17),e.qZA()(),e.TgZ(54,"div",11)(55,"mat-form-field",12)(56,"mat-label"),e._uU(57),e.ALo(58,"translate"),e.qZA(),e._UZ(59,"input",18),e.qZA()(),e.TgZ(60,"div",19)(61,"mat-form-field",12)(62,"mat-label"),e._uU(63),e.ALo(64,"translate"),e.qZA(),e._UZ(65,"textarea",20),e.qZA()(),e.TgZ(66,"div",21)(67,"button",22),e._uU(68),e.ALo(69,"translate"),e.qZA()()()()()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",!a.curCOMId),e.xp6(1),e.Q6J("ngIf",a.curCOMId),e.xp6(1),e.hij(" ",e.lcZ(8,18,"HTML.COMPANYDATA"),""),e.xp6(3),e.Q6J("formGroup",a.companyData_Form),e.xp6(2),e.Q6J("src",a.url,e.LSH),e.xp6(3),e.Oqu(e.lcZ(16,20,"HTML.Logo")),e.xp6(8),e.Oqu(e.lcZ(24,22,"HTML.ArabicName")),e.xp6(3),e.Q6J("ngIf",null==a.companyData_Form.controls.COMAraName.errors?null:a.companyData_Form.controls.COMAraName.errors.required),e.xp6(1),e.Q6J("ngIf",a.companyData_Form.controls.COMAraName.hasError("minlength")),e.xp6(4),e.Oqu(e.lcZ(32,24,"HTML.EnglishName")),e.xp6(3),e.Q6J("ngIf",null==a.companyData_Form.controls.COMEngName.errors?null:a.companyData_Form.controls.COMEngName.errors.required),e.xp6(1),e.Q6J("ngIf",a.companyData_Form.controls.COMEngName.hasError("minlength")),e.xp6(4),e.Oqu(e.lcZ(40,26,"HTML.DisplayedName")),e.xp6(6),e.Oqu(e.lcZ(46,28,"HTML.MOBILE")),e.xp6(6),e.Oqu(e.lcZ(52,30,"HTML.WORK_PHONE")),e.xp6(6),e.Oqu(e.lcZ(58,32,"HTML.Fax")),e.xp6(6),e.Oqu(e.lcZ(64,34,"HTML.ADDRESS")),e.xp6(5),e.Oqu(e.lcZ(69,36,"BTN.SAVE")))},dependencies:[m.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,f.xw,f.yH,N.lW,I.a8,I.dn,I.dk,I.n5,F.Nt,_.KE,_.hX,_.TO,x.X$]});var T=o(4459),v=o(5412),W=o(3238),Q=o(6709),G=o(4385);function V(n,t){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Arabic Name is required"),e.qZA())}function j(n,t){if(1&n&&(e.TgZ(0,"mat-option",18)(1,"span"),e._uU(2),e.qZA()()),2&n){const a=t.$implicit;e.Q6J("value",a.id),e.xp6(2),e.Oqu(a.CTTSubjectName)}}function k(n,t){if(1&n&&(e.TgZ(0,"mat-option",19)(1,"span"),e._uU(2),e.qZA()()),2&n){const a=t.$implicit;e.Q6J("value",a.id),e.xp6(2),e.Oqu(a.CTTSubjectName)}}class D{constructor(t,a,r){this.dialogRef=t,this.data=a,this.fb=r}ngOnInit(){this.form=this.fb.group({id:null,CTTSubjectName:[null,l.kI.required],CTTIsDefaultValue:!1,Parent_CTTKeyField:0,Related_CTTKeyField:null,CTTSubjectEName:null,RowConfirm:0,RowDelete:0,RowStatus:0,CTTArrangeOrder:0,CTTSerial:null,CTTCode:null}),console.log("============CodeTableTree Dialog================="),this.data.cttRow?(console.log("===this.data.cttRow==="),console.log(this.data.cttRow),this.form.patchValue(this.data.cttRow)):(console.log("==****:: "+this.data.parentID),this.form.patchValue({Parent_CTTKeyField:this.data.parentID}))}onSubmit(){console.log(this.form.value),this.form.valid&&this.dialogRef.close(this.form.value)}}D.\u0275fac=function(t){return new(t||D)(e.Y36(v.so),e.Y36(v.WI),e.Y36(l.QS))},D.\u0275cmp=e.Xpm({type:D,selectors:[["app-codetabletree-dialog"]],decls:40,vars:26,consts:[["mat-dialog-title",""],["autocomplete","off",3,"formGroup","ngSubmit"],["mat-dialog-content",""],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","49.8",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","CTTSubjectName","required",""],[4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["formControlName","Parent_CTTKeyField",3,"disabled"],["disabled","",3,"value",4,"ngFor","ngForOf"],["formControlName","Related_CTTKeyField"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","100",1,"py-1"],["formControlName","CTTIsDefaultValue","color","primary"],["mat-dialog-actions",""],["mat-raised-button","","color","warn","type","button","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit"],["disabled","",3,"value"],[3,"value"]],template:function(t,a){1&t&&(e.TgZ(0,"h1",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return a.onSubmit()}),e.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,V,2,0,"mat-error",7),e.qZA()(),e.TgZ(13,"div",8)(14,"div",4)(15,"mat-form-field",5)(16,"mat-label"),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"mat-select",9),e.YNc(20,j,3,2,"mat-option",10),e.qZA()()(),e.TgZ(21,"div",4)(22,"mat-form-field",5)(23,"mat-label"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"mat-select",11),e.YNc(27,k,3,2,"mat-option",12),e.qZA()()()(),e.TgZ(28,"div",13)(29,"mat-checkbox",14),e._uU(30),e.ALo(31,"translate"),e.qZA()()()(),e.TgZ(32,"div",15)(33,"div",8)(34,"button",16),e._uU(35),e.ALo(36,"translate"),e.qZA(),e.TgZ(37,"button",17),e._uU(38),e.ALo(39,"translate"),e.qZA()()()()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,12,"ADMIN_NAV.SYSTEMCODES")),e.xp6(2),e.Q6J("formGroup",a.form),e.xp6(6),e.Oqu(e.lcZ(10,14,"FIELD.NAME")),e.xp6(3),e.Q6J("ngIf",null==a.form.controls.CTTSubjectName.errors?null:a.form.controls.CTTSubjectName.errors.required),e.xp6(5),e.Oqu(e.lcZ(18,16,"HTML.PARENT")),e.xp6(2),e.Q6J("disabled",!0),e.xp6(1),e.Q6J("ngForOf",a.data.parentCTT),e.xp6(4),e.Oqu(e.lcZ(25,18,"HTML.RELATED")),e.xp6(3),e.Q6J("ngForOf",a.data.relatedCTT),e.xp6(3),e.Oqu(e.lcZ(31,20,"HTML.IsDefaultValue")),e.xp6(5),e.Oqu(e.lcZ(36,22,"BTN.CANCEL")),e.xp6(3),e.Oqu(e.lcZ(39,24,"BTN.SAVE")))},dependencies:[m.sg,m.O5,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.sg,l.u,f.xw,f.Wh,f.yH,W.ey,N.lW,Q.oG,v.ZT,v.uh,v.xY,v.H8,F.Nt,_.KE,_.hX,_.TO,G.gD,x.X$]});var X=o(2887),$=o(6838),z=o(1182),ee=o(7392),te=o(4850),ae=o(266);function oe(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e._uU(2),e.qZA(),e.TgZ(3,"div",9)(4,"mat-icon",10),e._uU(5),e.qZA()(),e.TgZ(6,"div",9),e._uU(7),e.qZA(),e.TgZ(8,"div",9)(9,"div",11)(10,"button",12),e.NdJ("click",function(){const p=e.CHM(a).$implicit,h=e.oxw();return e.KtG(h.openCategoryDialog(p))}),e.ALo(11,"translate"),e.TgZ(12,"mat-icon"),e._uU(13,"edit"),e.qZA()(),e.TgZ(14,"button",13),e.NdJ("click",function(){const p=e.CHM(a).$implicit,h=e.oxw();return e.KtG(h.remove(p.id))}),e.ALo(15,"translate"),e.TgZ(16,"mat-icon"),e._uU(17,"delete"),e.qZA()()()()()}if(2&n){const a=t.$implicit;e.xp6(2),e.Oqu(a.CTTSubjectName),e.xp6(3),e.Oqu(a.CTTIsDefaultValue?"check_box":"check_box_outline_blank"),e.xp6(2),e.hij(" ",a.related_Name," "),e.xp6(3),e.s9C("matTooltip",e.lcZ(11,5,"BTN.EDIT")),e.xp6(4),e.s9C("matTooltip",e.lcZ(15,7,"BTN.REMOVE"))}}function re(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"mat-card",16)(3,"pagination-controls",17),e.NdJ("pageChange",function(d){e.CHM(a);const p=e.oxw();return e.KtG(p.onPageChanged(d))}),e.qZA()()()()}}const ne=function(n,t){return{itemsPerPage:n,currentPage:t}};class C{constructor(t,a,r,d,p,h,se,le,ce,de){this.localStore=t,this.global=a,this.router=r,this.activatedRoute=d,this._codesService=p,this.snackBar=h,this.translateService=se,this.fb=le,this.dialog=ce,this.appSettings=de,this.currentRowCTTArray=[],this.allCTTArray=[],this.parentsCTTArray=[],this.relatedCTTArray=[],this.levelOneCTTArray=[],this.count=6,this.curCOMId=c.N.comid,this.account=new s.n,this.settings=this.appSettings.settings}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.prepareMsgLanguage()):this.router.navigate(["/sign-in"]),this.activatedRoute.data.subscribe(t=>{this.parentCTT=t.parentCTT,this.relatedCTT=t.relatedCTT,this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty),this.getAllCodeTableTree(this.curCOMId,this.account.periorty),this.getCodeTableTreeLevelOne(this.curCOMId,this.account.periorty),this.parentCTT&&this.getCodeTableTreePerCode(this.curCOMId,this.account.periorty),this.relatedCTT&&this.getCodeTableTreePerRelated(this.curCOMId,this.account.periorty)})}onPageChanged(t){this.page=t,window.scrollTo(0,0)}openCategoryDialog(t){this.dialog.open(D,{data:{cttRow:t,parentID:this.parentID,parentCTTValue:this.parentCTT,relatedCTTValue:this.relatedCTT,parentCTT:this.levelOneCTTArray,relatedCTT:this.relatedCTTArray},panelClass:["theme-dialog"],autoFocus:!1,direction:this.settings.rtl?"rtl":"ltr"}).afterClosed().subscribe(r=>{if(r)if(-1!==this.allCTTArray.findIndex(p=>p.id==r.id))this._codesService.editCode(r,r.id).subscribe(p=>{this.snackBar.open("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0643\u0648\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)},p=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0643\u0648\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})});else{let p=Math.max.apply(Math,this.allCTTArray.map(function(h){return h.id}));r.id=p+1,this._codesService.addCodeTableTree(r).subscribe(h=>{this.snackBar.open("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0648\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)},h=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0648\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}})}getAllCodeTableTree(t,a){this._codesService.getAllCodeTableTree(t,a).subscribe(r=>{this.allCTTArray=r},r=>{this.snackBar.open(this.errorRetrieveMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getCodeTableTreeLevelOne(t,a){this._codesService.getLevelOne(t,a).subscribe(r=>{this.levelOneCTTArray=r},r=>{this.snackBar.open(this.errorRetrieveMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getCodeTableTreePerCode(t,a){this._codesService.getRowPerCode(t,a,this.parentCTT).subscribe(r=>{this.parentID=r[0].id,this.currentRowCTTArray=r},r=>{this.snackBar.open(this.errorRetrieveMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getCodeTableTreePerParent(t,a){this._codesService.getSubForParent(t,a,this.parentCTT).subscribe(r=>{this.parentsCTTArray=r},r=>{this.snackBar.open(this.errorRetrieveMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getCodeTableTreePerRelated(t,a){this._codesService.getSubForParent(t,a,this.relatedCTT).subscribe(r=>{this.relatedCTTArray=r},r=>{this.snackBar.open(this.errorRetrieveMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}remove(t){this.dialog.open(X.$,{maxWidth:"400px",data:{title:this.deletedTitleMsg,message:this.askToDeletedMsg}}).afterClosed().subscribe(r=>{r&&this._codesService.deleteCode(t).subscribe(()=>{this.snackBar.open(this.deletedMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.getCodeTableTreePerParent(this.curCOMId,this.account.periorty)})})}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(t=>{this.errorRetrieveMsg=t}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(t=>{this.askToDeletedMsg=t}),this.translateService.get("MESSAGE.DELETED").subscribe(t=>{this.deletedMsg=t}),this.translateService.get("MESSAGE.ConfirmAction").subscribe(t=>{this.deletedTitleMsg=t})}}C.\u0275fac=function(t){return new(t||C)(e.Y36(y.C),e.Y36(S.U),e.Y36(i.F0),e.Y36(i.gz),e.Y36($.d),e.Y36(E.ux),e.Y36(x.sK),e.Y36(l.qu),e.Y36(v.uw),e.Y36(z.d))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-codetabletree-list"]],decls:28,vars:23,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],["mat-raised-button","","color","primary",3,"click"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"text-muted"],[1,"p-2","actions"],["mat-mini-fab","","color","primary",3,"matTooltip","click"],["mat-mini-fab","","color","warn",1,"mx-1",3,"matTooltip","click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"button",2),e.NdJ("click",function(){return a.openCategoryDialog(null)}),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e._UZ(9,"mat-divider"),e.TgZ(10,"div",3)(11,"div",4)(12,"div",5)(13,"h2"),e._uU(14),e.ALo(15,"translate"),e.qZA()(),e.TgZ(16,"div",5)(17,"h2"),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"div",5)(21,"h2"),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e._UZ(24,"div",5),e.qZA(),e.YNc(25,oe,18,9,"div",6),e.ALo(26,"paginate"),e.qZA()(),e.YNc(27,re,4,0,"div",7),e.qZA()),2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,7,"ADMIN_NAV.SYSTEMCODES")),e.xp6(3),e.Oqu(e.lcZ(8,9,"HTML.AddCode")),e.xp6(7),e.hij(" ",e.lcZ(15,11,"FIELD.NAME")," "),e.xp6(4),e.hij(" ",e.lcZ(19,13,"HTML.DEFAULT")," "),e.xp6(4),e.hij(" ",e.lcZ(23,15,"HTML.RELATED")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(26,17,a.parentsCTTArray,e.WLB(20,ne,a.count,a.page))),e.xp6(2),e.Q6J("ngIf",a.parentsCTTArray.length>0))},dependencies:[m.sg,m.O5,f.xw,f.Wh,f.yH,N.lW,N.nh,I.a8,ee.Hw,te.d,ae.gM,b.LS,x.X$,b._s]});var ie=o(529);class L{constructor(t,a){this.http=t,this.globalServ=a,this.baseUrl=(new g.P).api_Ip,this.secondPartUrl=(new g.P).api_constant,this.defaultCusImage=(new g.P).noImage,this.CusImageToUpload=null}onTextChanged(t){this.tipText=t.target.value}onImageChanged(t){this.tipPIC=t.target.files[0],this.tipPicName=this.tipPIC.name}handelCUSImgInput(t){this.CusImageToUpload=t.item(0);var a=new FileReader;a.onload=r=>{this.defaultCusImage=r.target.result},a.readAsDataURL(this.CusImageToUpload)}newTip(){const t=new FormData;t.append("TIPText",this.tipText),t.append("TIPPIC",this.CusImageToUpload),this.http.post(this.baseUrl+this.secondPartUrl+"atlas/tips/",t,this.globalServ.getAuthHeaders_for_files()).subscribe(a=>console.log(a),a=>console.log(a))}}L.\u0275fac=function(t){return new(t||L)(e.Y36(ie.eN),e.Y36(S.U))},L.\u0275cmp=e.Xpm({type:L,selectors:[["app-tips-list"]],decls:25,vars:1,consts:[["type","text",3,"change"],["type","file",3,"change"],[3,"click"],[2,"width","150px","height","200px",3,"src"],["for","upload",1,"d-block","text-center"],["name","TIPPIC","id","upload","type","file","accept","image/*",3,"change"]],template:function(t,a){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Upload Image From Angular"),e.qZA(),e.TgZ(2,"label"),e._uU(3," Title: "),e.TgZ(4,"input",0),e.NdJ("change",function(d){return a.onTextChanged(d)}),e.qZA()(),e._UZ(5,"br"),e.TgZ(6,"label"),e._uU(7," Image: "),e.TgZ(8,"input",1),e.NdJ("change",function(d){return a.onImageChanged(d.target.files)}),e.qZA()(),e._UZ(9,"br"),e.TgZ(10,"button",2),e.NdJ("click",function(){return a.newTip()}),e._uU(11,"New Tips"),e.qZA(),e._UZ(12,"br")(13,"br")(14,"br")(15,"br"),e.TgZ(16,"h1"),e._uU(17,"Upload Image From Angular"),e.qZA(),e._UZ(18,"br")(19,"br"),e.TgZ(20,"div"),e._UZ(21,"img",3),e.TgZ(22,"label",4),e._uU(23,"\u0635\u0648\u0631\u0647 \u0627\u0644\u0639\u0645\u064a\u0644"),e.qZA(),e.TgZ(24,"input",5),e.NdJ("change",function(d){return a.handelCUSImgInput(d.target.files)}),e.qZA()()),2&t&&(e.xp6(21),e.Q6J("src",a.defaultCusImage,e.LSH))}});const R=[{path:"company",component:U,data:{breadcrumb:"Company"}},{path:"codetree/country",component:C,data:{breadcrumb:"Countries",parentCTT:String((new T.I).Countries),relatedCTT:null}},{path:"codetree/govern",component:C,data:{breadcrumb:"Governorates",parentCTT:String((new T.I).Governorates),relatedCTT:String((new T.I).Countries)}},{path:"codetree/city",component:C,data:{breadcrumb:"Cities",parentCTT:String((new T.I).City),relatedCTT:String((new T.I).Governorates)}},{path:"codetree/region",component:C,data:{breadcrumb:"Regions",parentCTT:String((new T.I).Regions),relatedCTT:String((new T.I).City)}},{path:"codetree/features",component:C,data:{breadcrumb:"PropertyFeatures",parentCTT:String((new T.I).BuildingFeatures)}},{path:"codetree/ownershipdoc",component:C,data:{breadcrumb:"OwnershipDocTypes",parentCTT:String((new T.I).OwnershipDocTypes)}},{path:"tips",component:L,data:{breadcrumb:"Tips"}}];class M{constructor(t){this.translateService=t}ngOnInit(){this.prepareMsgLanguage()}prepareMsgLanguage(){this.translateService.get("TS.COMPANYDATA").subscribe(t=>{this.companyDataMsg=t})}}M.\u0275fac=function(t){return new(t||M)(e.LFG(x.sK))},M.\u0275mod=e.oAB({type:M}),M.\u0275inj=e.cJS({imports:[m.ez,i.Bz.forChild(R),l.UX,Z.m,b.JX,u.kz,O.Y$]})},6838:(P,A,o)=>{o.d(A,{d:()=>u});var m=o(2340),i=o(5521),l=o(4650),Z=o(529),b=o(7465);class u{constructor(s,c){this.http=s,this.globalServ=c,this.baseUrl=(new i.P).api_Ip,this.secondPartUrl=(new i.P).api_constant,this.curCOMId=m.N.comid}getAllCodeTableTree(s,c){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/allCodes/?M="+s+"&C="+c,this.globalServ.getAuthHeaders())}addCodeTableTree(s){return this.http.post(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/",s,this.globalServ.getAuthHeaders())}editCode(s,c){return this.http.put(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/"+c+"/",s,this.globalServ.getAuthHeaders())}deleteCode(s){return this.http.delete(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/"+s+"/",this.globalServ.getAuthHeaders())}getOneCode(s){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/"+s+"/",this.globalServ.getAuthHeaders())}getLevelOne(s,c){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/levelone/?M="+s+"&C="+c,this.globalServ.getAuthHeaders())}getRowPerCode(s,c,g){console.log("====*****==== :: "+String(parent));var e=this.baseUrl+this.secondPartUrl+"atlas/codetabletree/subcodes/?M="+s+"&C="+c+"&withlevelone=T&cttcode="+g;return console.log(e),this.http.get(e,this.globalServ.getAuthHeaders())}getSubForParent(s,c,g){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/codetabletree/subcodes/?M="+s+"&C="+c+"&parent="+g,this.globalServ.getAuthHeaders())}getSubForParentAndRelated(s,c,g,e){var y=this.baseUrl+this.secondPartUrl+"atlas/codetabletree/subcodes/?M="+s+"&C="+c+"&parent="+g+"&related="+e;return console.log(y),this.http.get(y,this.globalServ.getAuthHeaders())}}u.\u0275fac=function(s){return new(s||u)(l.LFG(Z.eN),l.LFG(b.U))},u.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})},2887:(P,A,o)=>{o.d(A,{$:()=>u});var m=o(5412),i=o(4650),l=o(1576),Z=o(4859),b=o(3081);class u{constructor(s,c){this.dialogRef=s,this.data=c}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}u.\u0275fac=function(s){return new(s||u)(i.Y36(m.so),i.Y36(m.WI))},u.\u0275cmp=i.Xpm({type:u,selectors:[["app-confirm-dialog"]],decls:13,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(s,c){1&s&&(i.TgZ(0,"h1",0),i._uU(1),i.qZA(),i.TgZ(2,"div",1)(3,"p"),i._uU(4),i.qZA()(),i.TgZ(5,"div",2)(6,"div",3)(7,"button",4),i.NdJ("click",function(){return c.onDismiss()}),i._uU(8),i.ALo(9,"translate"),i.qZA(),i.TgZ(10,"button",5),i.NdJ("click",function(){return c.onConfirm()}),i._uU(11),i.ALo(12,"translate"),i.qZA()()()),2&s&&(i.xp6(1),i.Oqu(null==c.data?null:c.data.title),i.xp6(3),i.Oqu(null==c.data?null:c.data.message),i.xp6(4),i.Oqu(i.lcZ(9,4,"BTN.NO")),i.xp6(3),i.Oqu(i.lcZ(12,6,"BTN.YES")))},dependencies:[l.xw,l.Wh,Z.lW,m.uh,m.xY,m.H8,b.X$]})}}]);