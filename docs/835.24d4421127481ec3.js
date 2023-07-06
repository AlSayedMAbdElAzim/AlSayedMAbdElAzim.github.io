"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[835],{2835:(Te,T,s)=>{s.r(T),s.d(T,{EmployeesModule:()=>c,routes:()=>w});var m=s(6895),A=s(3071),u=s(5412),a=s(4006);class M{}var v=s(5521),e=s(4650),d=s(1576),y=s(4859),N=s(6709),Z=s(9602),C=s(7392),U=s(4144),g=s(9549),L=s(1948),q=s(3848),b=s(3081);function I(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.ADD")))}function J(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.EDIT")))}function F(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Username is required"),e.qZA())}function k(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Username isn't long enough, minimum of 3 characters"),e.qZA())}function H(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Password is required"),e.qZA())}function O(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Password isn't long enough, minimum of 6 characters"),e.qZA())}function P(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-form-field",13)(1,"mat-label")(2,"mat-icon"),e._uU(3,"vpn_key"),e.qZA(),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._UZ(6,"input",46),e.TgZ(7,"mat-icon",47),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.passwordHide=!r.passwordHide)}),e._uU(8),e.qZA(),e.YNc(9,H,2,0,"mat-error",1),e.YNc(10,O,2,0,"mat-error",1),e.qZA()}if(2&i){const t=e.oxw();e.xp6(4),e.hij(" ",e.lcZ(5,5,"HTML.PASSWORD"),""),e.xp6(2),e.Q6J("type",t.passwordHide?"password":"text"),e.xp6(2),e.Oqu(t.passwordHide?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",null==t.form.controls.password.errors?null:t.form.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",t.form.controls.password.hasError("minlength"))}}function Q(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"First name is required"),e.qZA())}function R(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1,"Last name is required"),e.qZA())}function Y(i,o){if(1&i&&(e.TgZ(0,"p")(1,"span"),e._uU(2,"Registration date:"),e.qZA(),e.TgZ(3,"i"),e._uU(4),e.ALo(5,"date"),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(e.xi3(5,1,t.user.EntryDate,"dd MMMM, yyyy 'at' HH:mm"))}}function S(i,o){if(1&i&&(e.TgZ(0,"p")(1,"span"),e._uU(2,"Last joined date:"),e.qZA(),e.TgZ(3,"i"),e._uU(4),e.ALo(5,"date"),e.qZA()()),2&i){const t=e.oxw();e.xp6(4),e.Oqu(e.xi3(5,1,t.user.joinedDate,"dd MMMM, yyyy 'at' HH:mm"))}}function B(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.SAVE")))}function j(i,o){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.EDIT")))}class _{constructor(o,t,n){this.dialogRef=o,this.user=t,this.fb=n,this.passwordHide=!0,this.defaultCusImage=(new v.P).noImage,this.CusImageToUpload=null}handelEmpImgInput(o){this.CusImageToUpload=o.item(0);var t=new FileReader;t.onload=n=>{this.defaultCusImage=n.target.result},t.readAsDataURL(this.CusImageToUpload)}ngOnInit(){this.form=this.fb.group({id:null,username:[null,a.kI.compose([a.kI.required,a.kI.minLength(3)])],password:null,UserCode:[null,a.kI.compose([a.kI.required,a.kI.minLength(1)])],first_name:null,last_name:null,UserBirthDate:null,gender:null,userPicture:null,work:this.fb.group({userJobName:null,is_superuser:!1,is_staff:!1,is_active:!1,is_employee:!1}),contacts:this.fb.group({email:null,UserMobile:null,userAddress:null}),social:this.fb.group({userFacebook:null,userTwitter:null,userGoogle:null}),settings:this.fb.group({isActive:!1,isDeleted:!1,EntryDate:null,joinedDate:null})}),this.user?(this.action="Patch",this.fillForm(this.user)):(this.action="Post",this.user=new M)}fillForm(o){this.defaultCusImage=null!=o.userPicture?o.userPicture:(new v.P).noImage,this.is_delete=1==o.RowDelete,this.is_Employee="T"==o.is_employee,this.form.patchValue({id:o.id,username:o.username,password:o.password,UserCode:o.UserCode,first_name:o.first_name,last_name:o.last_name,UserBirthDate:o.UserBirthDate,gender:o.gender,userPicture:o.userPicture,work:{userJobName:o.userJobName,is_superuser:o.is_superuser,is_staff:o.is_staff,is_active:o.is_active,is_employee:this.is_Employee},contacts:{email:o.email,UserMobile:o.UserMobile,userAddress:o.userAddress},settings:{isDeleted:this.is_delete,EntryDate:o.EntryDate,joinedDate:o.joinedDate}})}onSave(){console.log("===***Press Save button***==="),this.form.valid&&this.dialogRef.close({event:this.action,data:this.form.value,empPic:this.CusImageToUpload})}close(){this.action="Cancel",console.log("===***Press Close button***==="),this.dialogRef.close({event:this.action})}}_.\u0275fac=function(o){return new(o||_)(e.Y36(u.so),e.Y36(u.WI),e.Y36(a.QS))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-employee-dialog"]],decls:130,vars:68,consts:[["mat-dialog-title",""],[4,"ngIf"],["mat-dialog-content",""],[1,"user-form",3,"formGroup"],[1,"vertical-tabs","tab-content-wrapped"],[3,"label"],["fxLayout","column",1,"form-field-outer"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],[1,"w-20"],["matInput","","formControlName","UserCode","required",""],[1,"w-30"],["matInput","","formControlName","username","required",""],["class","w-45",4,"ngIf"],[1,"w-45"],["matInput","","formControlName","first_name","required",""],[1,"w-50"],["matInput","","formControlName","last_name","required",""],["formControlName","gender"],["value","M","labelPosition","after"],["value","F","labelPosition","after"],["matInput","","formControlName","UserBirthDate",3,"matDatepicker"],["matSuffix","",3,"for"],["birthday",""],[1,"p-2"],[2,"width","150px","height","200px",3,"src"],["formControlName","userPicture","name","userPicture","id","EmpPicupload","type","file","accept","image/*",1,"user-img",3,"change"],["formGroupName","work",3,"label"],[1,"w-100"],["matInput","","formControlName","userJobName"],["formControlName","is_superuser"],["formControlName","is_staff"],["formControlName","is_active"],["formControlName","is_employee"],["formGroupName","contacts",3,"label"],["matInput","","formControlName","email"],["matInput","","formControlName","UserMobile"],["matInput","","formControlName","userAddress"],["formGroupName","social",3,"label"],["matInput","","formControlName","userFacebook"],["matInput","","formControlName","userTwitter"],["matInput","","formControlName","userGoogle"],["formGroupName","settings",3,"label"],["formControlName","isDeleted"],["mat-dialog-actions",""],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled","click"],["mat-raised-button","","color","warn",3,"click"],["matInput","","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"]],template:function(o,t){if(1&o&&(e.TgZ(0,"h1",0),e.YNc(1,I,3,3,"span",1),e.YNc(2,J,3,3,"span",1),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",2)(6,"form",3)(7,"mat-tab-group",4)(8,"mat-tab",5),e.ALo(9,"translate"),e.TgZ(10,"div",6)(11,"div",7)(12,"mat-form-field",8)(13,"mat-label")(14,"mat-icon"),e._uU(15,"person"),e.qZA(),e._uU(16),e.ALo(17,"translate"),e.qZA(),e._UZ(18,"input",9),e.qZA(),e.TgZ(19,"mat-form-field",10)(20,"mat-label")(21,"mat-icon"),e._uU(22,"person"),e.qZA(),e._uU(23),e.ALo(24,"translate"),e.qZA(),e._UZ(25,"input",11),e.YNc(26,F,2,0,"mat-error",1),e.YNc(27,k,2,0,"mat-error",1),e.qZA(),e.YNc(28,P,11,7,"mat-form-field",12),e.qZA(),e.TgZ(29,"div",7)(30,"mat-form-field",13)(31,"mat-label")(32,"mat-icon"),e._uU(33,"person"),e.qZA(),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"input",14),e.YNc(37,Q,2,0,"mat-error",1),e.qZA(),e.TgZ(38,"mat-form-field",15)(39,"mat-label")(40,"mat-icon"),e._uU(41,"person"),e.qZA(),e._uU(42),e.ALo(43,"translate"),e.qZA(),e._UZ(44,"input",16),e.YNc(45,R,2,0,"mat-error",1),e.qZA()(),e.TgZ(46,"div",7)(47,"mat-radio-group",17)(48,"mat-radio-button",18),e._uU(49),e.ALo(50,"translate"),e.qZA(),e.TgZ(51,"mat-radio-button",19),e._uU(52),e.ALo(53,"translate"),e.qZA()(),e.TgZ(54,"mat-form-field",15)(55,"mat-label"),e._uU(56),e.ALo(57,"translate"),e.qZA(),e._UZ(58,"input",20)(59,"mat-datepicker-toggle",21)(60,"mat-datepicker",null,22),e.qZA()(),e.TgZ(62,"div",23),e._UZ(63,"img",24),e.TgZ(64,"input",25),e.NdJ("change",function(r){return t.handelEmpImgInput(r.target.files)}),e.qZA()()()(),e.TgZ(65,"mat-tab",26),e.ALo(66,"translate"),e.TgZ(67,"div",6)(68,"mat-form-field",27)(69,"mat-label"),e._uU(70,"Job"),e.qZA(),e._UZ(71,"input",28),e.qZA(),e.TgZ(72,"div",7)(73,"mat-checkbox",29),e._uU(74,"is superuser"),e.qZA(),e.TgZ(75,"mat-checkbox",30),e._uU(76,"is staff"),e.qZA()(),e.TgZ(77,"div",7)(78,"mat-checkbox",31),e._uU(79,"is active"),e.qZA(),e.TgZ(80,"mat-checkbox",32),e._uU(81,"is employee"),e.qZA()()()(),e.TgZ(82,"mat-tab",33),e.ALo(83,"translate"),e.TgZ(84,"div",6)(85,"mat-form-field",27)(86,"mat-label"),e._uU(87),e.ALo(88,"translate"),e.qZA(),e._UZ(89,"input",34),e.qZA(),e.TgZ(90,"mat-form-field",27)(91,"mat-label"),e._uU(92),e.ALo(93,"translate"),e.qZA(),e._UZ(94,"input",35),e.qZA(),e.TgZ(95,"mat-form-field",27)(96,"mat-label"),e._uU(97),e.ALo(98,"translate"),e.qZA(),e._UZ(99,"input",36),e.qZA()()(),e.TgZ(100,"mat-tab",37),e.ALo(101,"translate"),e.TgZ(102,"div",6)(103,"mat-form-field",27)(104,"mat-label"),e._uU(105,"Facebook"),e.qZA(),e._UZ(106,"input",38),e.qZA(),e.TgZ(107,"mat-form-field",27)(108,"mat-label"),e._uU(109,"Twitter"),e.qZA(),e._UZ(110,"input",39),e.qZA(),e.TgZ(111,"mat-form-field",27)(112,"mat-label"),e._uU(113,"Google"),e.qZA(),e._UZ(114,"input",40),e.qZA()()(),e.TgZ(115,"mat-tab",41),e.ALo(116,"translate"),e.TgZ(117,"div",6)(118,"mat-checkbox",42),e._uU(119,"Blocked"),e.qZA(),e.YNc(120,Y,6,4,"p",1),e.YNc(121,S,6,4,"p",1),e.qZA()()()()(),e.TgZ(122,"div",43)(123,"div",7)(124,"button",44),e.NdJ("click",function(){return t.onSave()}),e.YNc(125,B,3,3,"span",1),e.YNc(126,j,3,3,"span",1),e.qZA(),e.TgZ(127,"button",45),e.NdJ("click",function(){return t.close()}),e._uU(128),e.ALo(129,"translate"),e.qZA()()()),2&o){const n=e.MAs(61);e.xp6(1),e.Q6J("ngIf",!t.user.id),e.xp6(1),e.Q6J("ngIf",t.user.id),e.xp6(1),e.hij(" ",e.lcZ(4,34,"HTML.EMPLOYEE"),""),e.xp6(3),e.Q6J("formGroup",t.form),e.xp6(2),e.s9C("label",e.lcZ(9,36,"HTML.TAB_BASIC")),e.xp6(8),e.hij(" ",e.lcZ(17,38,"HTML.CODE"),""),e.xp6(7),e.hij(" ",e.lcZ(24,40,"HTML.USERNAME"),""),e.xp6(3),e.Q6J("ngIf",null==t.form.controls.username.errors?null:t.form.controls.username.errors.required),e.xp6(1),e.Q6J("ngIf",t.form.controls.username.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",!t.user.id),e.xp6(6),e.hij(" ",e.lcZ(35,42,"HTML.FIRST_NAME"),""),e.xp6(3),e.Q6J("ngIf",null==t.form.controls.first_name.errors?null:t.form.controls.first_name.errors.required),e.xp6(5),e.hij(" ",e.lcZ(43,44,"HTML.LAST_NAME"),""),e.xp6(3),e.Q6J("ngIf",null==t.form.controls.last_name.errors?null:t.form.controls.last_name.errors.required),e.xp6(4),e.Oqu(e.lcZ(50,46,"HTML.MALE")),e.xp6(3),e.Oqu(e.lcZ(53,48,"HTML.FEMALE")),e.xp6(4),e.Oqu(e.lcZ(57,50,"HTML.BIRTH_DATE")),e.xp6(2),e.Q6J("matDatepicker",n),e.xp6(1),e.Q6J("for",n),e.xp6(4),e.Q6J("src",t.defaultCusImage,e.LSH),e.xp6(2),e.s9C("label",e.lcZ(66,52,"HTML.TAB_WORK")),e.xp6(17),e.s9C("label",e.lcZ(83,54,"HTML.TAB_CONTACTS")),e.xp6(5),e.Oqu(e.lcZ(88,56,"HTML.EMAIL")),e.xp6(5),e.Oqu(e.lcZ(93,58,"HTML.MOBILE")),e.xp6(5),e.Oqu(e.lcZ(98,60,"HTML.ADDRESS")),e.xp6(3),e.s9C("label",e.lcZ(101,62,"HTML.TAB_SOCIAL_LIFE")),e.xp6(15),e.s9C("label",e.lcZ(116,64,"HTML.TAB_SETTINGS")),e.xp6(5),e.Q6J("ngIf",t.user.id),e.xp6(1),e.Q6J("ngIf",t.user.id),e.xp6(3),e.Q6J("mat-dialog-close",t.form.value)("disabled",!t.form.valid),e.xp6(1),e.Q6J("ngIf",!t.user.id),e.xp6(1),e.Q6J("ngIf",t.user.id),e.xp6(2),e.Oqu(e.lcZ(129,66,"BTN.CANCEL"))}},dependencies:[m.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,a.x0,d.xw,d.Wh,y.lW,N.oG,Z.Mq,Z.hl,Z.nW,u.ZT,u.uh,u.xY,u.H8,C.Hw,U.Nt,g.KE,g.hX,g.TO,g.R9,L.VQ,L.U0,q.uX,q.SP,m.uU,b.X$],styles:[".user-form[_ngcontent-%COMP%]   .form-field-outer[_ngcontent-%COMP%]{width:480px}.user-form[_ngcontent-%COMP%]   .mat-mdc-radio-button[_ngcontent-%COMP%]{margin-right:12px}"]});var G=s(1182),x=s(4333),E=s(811),K=s(3546),h=s(8255),$=s(1572),W=s(455),X=s(1419);function z(i,o){if(1&i&&(e.TgZ(0,"h3",38),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.first_name," ",t.last_name,"")}}function V(i,o){1&i&&(e.TgZ(0,"h3",38),e._uU(1,"User blocked"),e.qZA())}function ee(i,o){if(1&i&&e._UZ(0,"img",39),2&i){const t=e.oxw().$implicit;e.ekj("blocked",1==t.RowDelete),e.Q6J("src",t.userPicture,e.LSH)}}function te(i,o){if(1&i&&e._UZ(0,"img",40),2&i){const t=e.oxw().$implicit;e.ekj("blocked",1==t.RowDelete)}}function oe(i,o){1&i&&(e.TgZ(0,"mat-icon",41),e._uU(1,"block"),e.qZA())}function ie(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",18)(1,"mat-card")(2,"div",19),e.YNc(3,z,2,2,"h3",20),e.YNc(4,V,2,0,"h3",20),e.TgZ(5,"button",21,22)(7,"mat-icon"),e._uU(8,"more_vert"),e.qZA()()(),e.TgZ(9,"mat-menu",23,24)(11,"span",25),e.NdJ("mouseleave",function(){e.CHM(t);const r=e.MAs(6);return e.KtG(r.closeMenu())}),e.TgZ(12,"button",26),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.openUserDialog(l))}),e.TgZ(13,"mat-icon"),e._uU(14,"mode_edit"),e.qZA(),e.TgZ(15,"span"),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.TgZ(18,"button",26),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.deleteUser(l))}),e.TgZ(19,"mat-icon"),e._uU(20,"delete"),e.qZA(),e.TgZ(21,"span"),e._uU(22),e.ALo(23,"translate"),e.qZA()()()(),e.TgZ(24,"div",27)(25,"div",28)(26,"div",29),e.YNc(27,ee,1,3,"img",30),e.YNc(28,te,1,2,"img",31),e.YNc(29,oe,2,0,"mat-icon",32),e.qZA(),e.TgZ(30,"div",33)(31,"mat-slide-toggle",34),e.NdJ("change",function(){const l=e.CHM(t).$implicit;return e.KtG(l.RowDelete=!l.RowDelete)}),e.qZA()()(),e.TgZ(32,"div",35)(33,"p",36)(34,"mat-icon",37),e._uU(35,"card_membership"),e.qZA(),e.TgZ(36,"span"),e._uU(37),e.qZA()(),e.TgZ(38,"p",36)(39,"mat-icon",37),e._uU(40,"mail_outline"),e.qZA(),e.TgZ(41,"span"),e._uU(42),e.qZA()(),e.TgZ(43,"p",36)(44,"mat-icon",37),e._uU(45,"call"),e.qZA(),e.TgZ(46,"span"),e._uU(47),e.qZA()(),e.TgZ(48,"p",36)(49,"mat-icon",37),e._uU(50,"location_on"),e.qZA(),e.TgZ(51,"span"),e._uU(52),e.qZA()(),e.TgZ(53,"p",36)(54,"mat-icon",37),e._uU(55,"date_range"),e.qZA(),e.TgZ(56,"span"),e._uU(57),e.ALo(58,"date"),e.qZA()()()()()()}if(2&i){const t=o.$implicit,n=e.MAs(10);e.xp6(3),e.Q6J("ngIf",0==t.RowDelete),e.xp6(1),e.Q6J("ngIf",1==t.RowDelete),e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(11),e.Oqu(e.lcZ(17,16,"BTN.EDIT")),e.xp6(6),e.Oqu(e.lcZ(23,18,"BTN.REMOVE")),e.xp6(5),e.Q6J("ngIf",t.userPicture),e.xp6(1),e.Q6J("ngIf",!t.userPicture),e.xp6(1),e.Q6J("ngIf",1==t.RowDelete),e.xp6(2),e.Q6J("checked",1==t.RowDelete),e.xp6(1),e.ekj("blocked",1==t.RowDelete),e.xp6(5),e.Oqu(t.userJobName),e.xp6(5),e.Oqu(t.email),e.xp6(5),e.Oqu(t.UserMobile),e.xp6(5),e.Oqu(t.userAddress),e.xp6(5),e.hij("Joined ",e.xi3(58,20,t.joinedDate,"dd MMMM, yyyy 'at' HH:mm"),"")}}const D=function(i,o){return{itemsPerPage:i,currentPage:o}};function ne(i,o){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,ie,59,23,"div",17),e.ALo(2,"paginate"),e.ALo(3,"EmpSearchPipe"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.xi3(3,4,t.users,t.searchText),e.WLB(7,D,t.count,t.page)))}}function se(i,o){if(1&i&&(e.TgZ(0,"h3",38),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.first_name," ",t.last_name,"")}}function ae(i,o){1&i&&(e.TgZ(0,"h3",38),e._uU(1,"User blocked"),e.qZA())}function re(i,o){if(1&i&&e._UZ(0,"img",39),2&i){const t=e.oxw().$implicit;e.ekj("blocked",1==t.RowDelete),e.Q6J("src",t.userPicture,e.LSH)}}function le(i,o){if(1&i&&e._UZ(0,"img",50),2&i){const t=e.oxw().$implicit;e.ekj("blocked",1==t.RowDelete)}}function me(i,o){1&i&&(e.TgZ(0,"mat-icon",41),e._uU(1,"block"),e.qZA())}function ue(i,o){1&i&&(e.TgZ(0,"mat-icon",37),e._uU(1,"person_outline"),e.qZA())}function pe(i,o){1&i&&(e.TgZ(0,"mat-icon",37),e._uU(1,"person"),e.qZA())}function ce(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",43)(1,"mat-card")(2,"div",19),e.YNc(3,se,2,2,"h3",20),e.YNc(4,ae,2,0,"h3",20),e.TgZ(5,"button",21,22)(7,"mat-icon"),e._uU(8,"more_vert"),e.qZA()()(),e.TgZ(9,"mat-menu",23,24)(11,"span",25),e.NdJ("mouseleave",function(){e.CHM(t);const r=e.MAs(6);return e.KtG(r.closeMenu())}),e.TgZ(12,"button",26),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.openUserDialog(l))}),e.TgZ(13,"mat-icon"),e._uU(14,"mode_edit"),e.qZA(),e.TgZ(15,"span"),e._uU(16,"Edit"),e.qZA()(),e.TgZ(17,"button",26),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.deleteUser(l))}),e.TgZ(18,"mat-icon"),e._uU(19,"delete"),e.qZA(),e.TgZ(20,"span"),e._uU(21,"Delete"),e.qZA()()()(),e.TgZ(22,"div",27)(23,"div",44)(24,"div",29),e.YNc(25,re,1,3,"img",30),e.YNc(26,le,1,2,"img",45),e.YNc(27,me,2,0,"mat-icon",32),e.qZA(),e.TgZ(28,"div",33)(29,"mat-slide-toggle",34),e.NdJ("change",function(){const l=e.CHM(t).$implicit;return e.KtG(l.RowDelete=!l.RowDelete)}),e.qZA()()(),e.TgZ(30,"div",46)(31,"div",47)(32,"p",36)(33,"mat-icon",37),e._uU(34,"card_membership"),e.qZA(),e.TgZ(35,"span"),e._uU(36),e.qZA()()(),e.TgZ(37,"div",47)(38,"p",36)(39,"mat-icon",37),e._uU(40,"mail_outline"),e.qZA(),e.TgZ(41,"span"),e._uU(42),e.qZA()(),e.TgZ(43,"p",36)(44,"mat-icon",37),e._uU(45,"call"),e.qZA(),e.TgZ(46,"span"),e._uU(47),e.qZA()(),e.TgZ(48,"p",36)(49,"mat-icon",37),e._uU(50,"location_on"),e.qZA(),e.TgZ(51,"span"),e._uU(52),e.qZA()()(),e.TgZ(53,"div",48)(54,"p",36)(55,"mat-icon",37),e._uU(56,"event_available"),e.qZA(),e.TgZ(57,"span"),e._uU(58),e.ALo(59,"date"),e.qZA()(),e.TgZ(60,"p",36)(61,"mat-icon",37),e._uU(62,"date_range"),e.qZA(),e.TgZ(63,"span"),e._uU(64),e.ALo(65,"date"),e.qZA()(),e.TgZ(66,"p",36),e.YNc(67,ue,2,0,"mat-icon",49),e.YNc(68,pe,2,0,"mat-icon",49),e.TgZ(69,"span"),e._uU(70),e.qZA()()()()()()()}if(2&i){const t=o.$implicit,n=e.MAs(10);e.xp6(3),e.Q6J("ngIf",0==t.RowDelete),e.xp6(1),e.Q6J("ngIf",1==t.RowDelete),e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(20),e.Q6J("ngIf",t.userPicture),e.xp6(1),e.Q6J("ngIf",!t.userPicture),e.xp6(1),e.Q6J("ngIf",1==t.RowDelete),e.xp6(2),e.Q6J("checked",1==t.RowDelete),e.xp6(1),e.ekj("blocked",1==t.RowDelete),e.xp6(6),e.Oqu(t.userJobName),e.xp6(6),e.Oqu(t.email),e.xp6(5),e.Oqu(t.UserMobile),e.xp6(5),e.Oqu(t.userAddress),e.xp6(6),e.hij("Registration ",e.xi3(59,18,t.EntryDate,"dd MMMM, yyyy 'at' HH:mm"),""),e.xp6(6),e.hij("Joined ",e.xi3(65,21,t.joinedDate,"dd MMMM, yyyy 'at' HH:mm"),""),e.xp6(3),e.Q6J("ngIf",1==t.RowDelete),e.xp6(1),e.Q6J("ngIf",0==t.RowDelete),e.xp6(2),e.Oqu(1==t.RowDelete?"Blocked":"Active")}}function de(i,o){if(1&i&&(e.TgZ(0,"div",16),e.YNc(1,ce,71,24,"div",42),e.ALo(2,"paginate"),e.ALo(3,"EmpSearchPipe"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.xi3(3,4,t.users,t.searchText),e.WLB(7,D,t.count,t.page)))}}function ge(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",43)(2,"mat-card",51)(3,"pagination-controls",52),e.NdJ("pageChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l.onPageChanged(r))}),e.qZA()()()()}}function _e(i,o){1&i&&(e.TgZ(0,"div",53),e._UZ(1,"mat-spinner",54),e.qZA())}class f{constructor(o,t,n){this.appSettings=o,this.dialog=t,this.usersService=n,this.count=6,this.unitForDisplay={id:void 0,username:void 0,password:void 0,UserCode:void 0,first_name:void 0,last_name:void 0,UserBirthDate:void 0,EntryDate:void 0,joinedDate:void 0,UserMobile:void 0,email:void 0,is_superuser:void 0,is_staff:void 0,is_active:void 0,is_employee:void 0,is_teacher:void 0,periorty:void 0,COMId:void 0,branch_KeyField:void 0,userPicture:void 0,gender:void 0,RowDelete:void 0,LoginFrom:void 0,userJobName:void 0,userFacebook:void 0,userTwitter:void 0,userGoogle:void 0,userAddress:void 0},this.settings=this.appSettings.settings}ngOnInit(){this.getUsers()}getUsers(){this.users=null,this.usersService.getAllStaff().subscribe(o=>this.users=o)}addUser(o,t){console.log("====inside addUser== ==="),this.usersService.addEmployee(o,t).subscribe(n=>this.getUsers())}updateUser(o,t){console.log("====inside updateTenant====="),this.usersService.editEmployee(o,t).subscribe(n=>this.getUsers())}deleteUser(o){this.usersService.deleteOneUser(o.id).subscribe(t=>this.getUsers())}onPageChanged(o){this.page=o,this.getUsers(),window.scrollTo(0,0)}openUserDialog(o){this.dialog.open(_,{data:o}).afterClosed().subscribe(n=>{"Cancel"==n.event||("Patch"==n.event?(this.mapFormvalue_to_EmpClass(n.data),this.updateUser(this.unitForDisplay,n.empPic)):"Post"==n.event&&(this.mapFormvalue_to_EmpClass(n.data),this.addUser(this.unitForDisplay,n.empPic)))})}mapFormvalue_to_EmpClass(o){console.log(o),console.log("=================formValue==========================");const t=new m.uU("en-GB").transform(o.UserBirthDate,"dd/MM/yyyy");this.is_Employee=o.work.is_employee?"T":"F",this.empDeleted=o.settings.isDeleted?1:0,this.unitForDisplay.id=o.id,this.unitForDisplay.username=o.username,this.unitForDisplay.password=o.password,this.unitForDisplay.UserCode=o.UserCode,this.unitForDisplay.first_name=o.first_name,this.unitForDisplay.last_name=o.last_name,this.unitForDisplay.userPicture=o.userPicture,this.unitForDisplay.gender=o.gender,null!=o.UserBirthDate&&(this.unitForDisplay.UserBirthDate=t),this.unitForDisplay.userJobName=o.work.userJobName,this.unitForDisplay.is_superuser=o.work.is_superuser,this.unitForDisplay.is_staff=o.work.is_staff,this.unitForDisplay.is_active=o.work.is_active,this.unitForDisplay.is_employee=this.is_Employee,this.unitForDisplay.email=o.contacts.email,this.unitForDisplay.UserMobile=o.contacts.UserMobile,this.unitForDisplay.userAddress=o.contacts.userAddress,this.unitForDisplay.RowDelete=this.empDeleted}}f.\u0275fac=function(o){return new(o||f)(e.Y36(G.d),e.Y36(u.uw),e.Y36(A.K))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-employee-list"]],features:[e._Bn([A.K])],decls:26,vars:7,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["fxLayout","row"],["appearance","legacy"],["controls","matButtonToggleGroup"],["value","add",3,"click"],["value","search"],[1,"user-search"],[1,"user-search-input"],["matInput","","placeholder","Search user by name...","name","search","autocomplete","off",3,"ngModel","ngModelChange"],["fxLayout","row","fxLayoutAlign","space-between center"],["appearance","legacy","value","grid"],["viewType","matButtonToggleGroup"],["value","grid"],["value","list"],["fxLayout","row wrap",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","user-spinner",4,"ngIf"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-md","33.3","fxFlex.md","50","class","p-2",4,"ngFor","ngForOf"],["fxFlex","100","fxFlex.gt-md","33.3","fxFlex.md","50",1,"p-2"],["fxLayout","row","fxLayoutAlign","space-between center",1,"bg-primary"],["class","user-name",4,"ngIf"],["mat-icon-button","",3,"matMenuTriggerFor"],["menuTrigger","matMenuTrigger"],["xPosition","before","overlapTrigger","true"],["menu","matMenu"],[3,"mouseleave"],["mat-menu-item","",3,"click"],["fxLayout","row","fxLayoutAlign","space-around center",1,"user-content"],["fxFlex","30","fxLayout","column","fxLayoutAlign","center center"],[1,"user-img"],["class","transition-2",3,"src","blocked",4,"ngIf"],["src","assets/images/others/user.jpg","class","transition-2",3,"blocked",4,"ngIf"],["color","warn",4,"ngIf"],[1,"user-social"],["color","primary",3,"checked","change"],["fxFlex","70","fxLayout","column",1,"user-details","transition-2"],["fxLayout","row","fxLayoutAlign","start center"],[1,"text-muted"],[1,"user-name"],[1,"transition-2",3,"src"],["src","assets/images/others/user.jpg",1,"transition-2"],["color","warn"],["fxFlex","100","class","p-2",4,"ngFor","ngForOf"],["fxFlex","100",1,"p-2"],["fxFlex","20","fxFlex.xs","30","fxLayout","column","fxLayoutAlign","center center"],["src","assets/img/users/default-user.jpg","class","transition-2",3,"blocked",4,"ngIf"],["fxFlex","80","fxFlex.xs","70","fxLayout","row","fxLayout.xs","column",1,"user-details","transition-2"],["fxFlex","30","fxFlex.xs","100","fxLayout","column"],["fxFlex","40","fxFlex.xs","100","fxLayout","column"],["class","text-muted",4,"ngIf"],["src","assets/img/users/default-user.jpg",1,"transition-2"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"],["fxLayout","column","fxLayoutAlign","center center",1,"user-spinner"],["color","primary"]],template:function(o,t){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-button-toggle-group",2,3)(4,"mat-button-toggle",4),e.NdJ("click",function(){return t.openUserDialog(null)}),e.TgZ(5,"mat-icon"),e._uU(6,"person_add"),e.qZA()(),e.TgZ(7,"mat-button-toggle",5)(8,"mat-icon"),e._uU(9,"search"),e.qZA()()()(),e.TgZ(10,"form",6)(11,"mat-form-field",7)(12,"input",8),e.NdJ("ngModelChange",function(r){return t.searchText=r}),e.qZA()()(),e.TgZ(13,"div",9)(14,"mat-button-toggle-group",10,11)(16,"mat-button-toggle",12)(17,"mat-icon"),e._uU(18,"view_module"),e.qZA()(),e.TgZ(19,"mat-button-toggle",13)(20,"mat-icon"),e._uU(21,"view_list"),e.qZA()()()()(),e.YNc(22,ne,4,10,"div",14),e.YNc(23,de,4,10,"div",14),e.YNc(24,ge,4,0,"div",14),e.YNc(25,_e,2,0,"div",15)),2&o){const n=e.MAs(3),r=e.MAs(15);e.xp6(10),e.ekj("show","search"==n.value),e.xp6(2),e.Q6J("ngModel",t.searchText),e.xp6(10),e.Q6J("ngIf","grid"==r.value),e.xp6(1),e.Q6J("ngIf","list"==r.value),e.xp6(1),e.Q6J("ngIf",t.users),e.xp6(1),e.Q6J("ngIf",!t.users)}},dependencies:[m.sg,m.O5,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F,x.LS,d.xw,d.Wh,d.yH,y.RK,E.A9,E.Yi,K.a8,C.Hw,U.Nt,g.KE,h.VK,h.OP,h.p6,$.Ou,W.Rr,m.uU,x._s,b.X$,X.m],styles:[".user-name{padding:0 12px;font-weight:400}.user-content{padding:10px}.user-content .user-img{position:relative}.user-content .user-img img{border-radius:50%;width:80px;height:80px}.user-content .user-img img.blocked{opacity:.5}.user-content .user-img .mat-icon{position:absolute;top:-8px;left:-8px;font-size:96px;height:96px;width:96px}.user-content .mat-mdc-slide-toggle{margin-top:15px}.user-content .user-details span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-content .user-details .mat-icon{padding:2px 10px}.user-content .user-details.blocked{opacity:.5}.user-search{width:0;overflow:hidden;transition:.3s}.user-search .mat-mdc-form-field{width:100%!important;text-align:center!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-infix{min-height:36px;padding:8px 0!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper{display:none}.user-search .mat-mdc-input-element{text-align:center}.user-search.show{width:100%;overflow:visible}.user-spinner{position:absolute;inset:0}.mat-mdc-card{overflow:hidden}\n"],encapsulation:2});var fe=s(529),Ze=s(9132),xe=s(5494),he=s(9045);const w=[{path:"",redirectTo:"employee",pathMatch:"full"},{path:"employee",component:f,pathMatch:"full",data:{breadcrumb:"Employee"}}];class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[m.ez,fe.JF,Ze.Bz.forChild(w),a.u5,a.UX,x.JX,xe.m,he.D]})}}]);