"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[893],{8893:($,A,t)=>{t.r(A),t.d(A,{SettingsModule:()=>g,routes:()=>T});var u=t(6895),w=t(9132),Z=t(529),d=t(4006),h=t(4333),S=t(589),L=t(9045),b=t(2340),C=t(5783),s=t(5412),I=t(4459),e=t(4650),U=t(6838),y=t(7009),x=t(5298),c=t(1576),v=t(4859),E=t(4144),P=t(9549),_=t(3081);function M(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.onSave())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}if(2&i){const n=e.oxw();e.Q6J("mat-dialog-close",n.form.value)("disabled",!n.form.valid),e.xp6(1),e.Oqu(e.lcZ(2,3,"BTN.SAVE"))}}class l{constructor(a,n,r,o,m,f){this.dialogRef=a,this.codesService=n,this.snackBar=r,this.data=o,this.localStore=m,this.fb=f,this.curCOMId=b.N.comid,this.account=new C.n,this.currency_const=(new I.I).Currency,this.userPerm=[]}ngOnInit(){this.curUserData=JSON.parse(this.localStore.getItem("account")),this.curUserPermissions=JSON.parse(this.localStore.getItem("permissions"));for(let a=0;a<this.curUserPermissions.length;a++)this.userPerm[a]=this.curUserPermissions[a].codename;this.form=this.fb.group({id:null,APACode:{value:null,disabled:!0},APAName:{value:null,disabled:!0},APAValue:[null,d.kI.required],RowConfirm:0,RowDelete:0,RowStatus:0}),this.data.paramRow?(this.action="Patch",this.form.patchValue(this.data.paramRow)):this.action="Post"}can(a){return!(!this.curUserData.is_superuser&&!this.userPerm.includes(a))}onSave(){this.form.valid&&this.dialogRef.close({event:this.action,data:this.form.value})}close(){this.action="Cancel",this.dialogRef.close({event:this.action})}}l.\u0275fac=function(a){return new(a||l)(e.Y36(s.so),e.Y36(U.d),e.Y36(y.ux),e.Y36(s.WI),e.Y36(x.C),e.Y36(d.QS))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-applicationparam-dialog"]],decls:31,vars:17,consts:[["mat-dialog-title",""],["autocomplete","off",3,"formGroup"],["mat-dialog-content",""],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","49.8",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","APACode"],["matInput","","formControlName","APAName"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["fxFlex","100","fxFlex.gt-sm","100",1,"px-1"],["matInput","","formControlName","APAValue","required",""],["mat-dialog-actions",""],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled","click",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled","click"]],template:function(a,n){1&a&&(e.TgZ(0,"h1",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"form",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"input",6),e.qZA()(),e.TgZ(12,"div",4)(13,"mat-form-field",5)(14,"mat-label"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e._UZ(17,"input",7),e.qZA()(),e.TgZ(18,"div",8)(19,"div",9)(20,"mat-form-field",5)(21,"mat-label"),e._uU(22),e.ALo(23,"translate"),e.qZA(),e._UZ(24,"input",10),e.qZA()()()()(),e.TgZ(25,"div",11)(26,"div",8),e.YNc(27,M,3,5,"button",12),e.TgZ(28,"button",13),e.NdJ("click",function(){return n.close()}),e._uU(29),e.ALo(30,"translate"),e.qZA()()()()),2&a&&(e.xp6(1),e.Oqu(e.lcZ(2,7,"ADMIN_NAV.BRANCH")),e.xp6(2),e.Q6J("formGroup",n.form),e.xp6(6),e.Oqu(e.lcZ(10,9,"HTML.CODE")),e.xp6(6),e.Oqu(e.lcZ(16,11,"FIELD.NAME")),e.xp6(7),e.Oqu(e.lcZ(23,13,"HTML.Value")),e.xp6(5),e.Q6J("ngIf",n.can("change_oneapplicationparam")),e.xp6(2),e.Oqu(e.lcZ(30,15,"BTN.CANCEL")))},dependencies:[u.O5,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.sg,d.u,c.xw,c.Wh,c.yH,v.lW,s.ZT,s.uh,s.xY,s.H8,E.Nt,P.KE,P.hX,_.X$]});var N=t(7465),D=t(3071),O=t(4165),J=t(1182),Y=t(3546),F=t(7392),B=t(4850),H=t(266);function R(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.onClickArrangePermissions())}),e.TgZ(1,"h2"),e._uU(2,"Arrange"),e.qZA()()}}function G(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(n);const o=e.oxw().$implicit,m=e.oxw();return e.KtG(m.openParamDialog(o))}),e.ALo(1,"translate"),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()()}2&i&&e.s9C("matTooltip",e.lcZ(1,1,"BTN.EDIT"))}function W(i,a){if(1&i&&(e.TgZ(0,"div",9)(1,"div",10),e._uU(2),e.qZA(),e.TgZ(3,"div",11),e._uU(4),e.qZA(),e.TgZ(5,"div",10),e._uU(6),e.qZA(),e.TgZ(7,"div",10)(8,"div",12),e.YNc(9,G,4,3,"button",13),e.qZA()()()),2&i){const n=a.$implicit,r=e.oxw();e.xp6(2),e.Oqu(n.APACode),e.xp6(2),e.Oqu(n.APAName),e.xp6(2),e.Oqu(n.APAValue),e.xp6(3),e.Q6J("ngIf",r.can("view_oneapplicationparam"))}}function V(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"mat-card",17)(3,"pagination-controls",18),e.NdJ("pageChange",function(o){e.CHM(n);const m=e.oxw();return e.KtG(m.onPageChanged(o))}),e.qZA()()()()}}const Q=function(i,a){return{itemsPerPage:i,currentPage:a}};class p{constructor(a,n,r,o,m,f,k,q,K,j){this.localStore=a,this.global=n,this.router=r,this.userService=o,this.snackBar=m,this.translateService=f,this.fb=k,this.dialog=q,this.settingService=K,this.appSettings=j,this.count=10,this.curCOMId=b.N.comid,this.account=new C.n,this.userPerm=[],this.AllParameters=[],this.arrangePermission=[{id:1,codename:"view_dashboard",arrangement:"100"},{id:2,codename:"view_dash_CustomerDebt",arrangement:"110"},{id:3,codename:"view_dash_CustomerDebtTotal",arrangement:"111"},{id:4,codename:"view_dash_CustomerDebtTenant",arrangement:"112"},{id:5,codename:"view_dash_Contracts",arrangement:"120"},{id:6,codename:"view_dash_Contracts_showContract",arrangement:"121"},{id:7,codename:"view_dash_Contracts_showInstallments",arrangement:"122"},{id:8,codename:"view_dash_ContractsLT60",arrangement:"130"},{id:9,codename:"view_dash_ContractsLT60_showContract",arrangement:"131"},{id:10,codename:"view_dash_ContractsLT60_showInstallments",arrangement:"132"},{id:11,codename:"view_dash_ContractsGT60",arrangement:"140"},{id:12,codename:"view_dash_ContractsGT60_showContract",arrangement:"141"},{id:13,codename:"view_dash_ContractsGT60_showInstallments",arrangement:"142"},{id:14,codename:"view_dash_ContractsAlarm",arrangement:"150"},{id:15,codename:"view_dash_ContractsAlarm_showContract",arrangement:"151"},{id:16,codename:"view_dash_ContractsAlarm_showInstallments",arrangement:"152"},{id:17,codename:"view_dash_DailyWork",arrangement:"160"},{id:18,codename:"view_dash_DailyWork_recievable",arrangement:"161"},{id:19,codename:"view_dash_DailyWork_recievableTotal",arrangement:"162"},{id:20,codename:"view_dash_DailyWork_payable",arrangement:"163"},{id:21,codename:"view_dash_DailyWork_payableTotal",arrangement:"164"},{id:22,codename:"view_maindatamenu",arrangement:"170"},{id:23,codename:"view_company",arrangement:"171"},{id:24,codename:"change_company",arrangement:"172"},{id:25,codename:"view_branch",arrangement:"173"},{id:26,codename:"add_branch",arrangement:"174"},{id:27,codename:"change_branch",arrangement:"175"},{id:28,codename:"delete_branch",arrangement:"176"},{id:29,codename:"view_systemcodes",arrangement:"180"},{id:30,codename:"view_country",arrangement:"181"},{id:31,codename:"add_country",arrangement:"182"},{id:32,codename:"change_country",arrangement:"183"},{id:33,codename:"delete_country",arrangement:"184"},{id:34,codename:"view_governorate",arrangement:"185"},{id:35,codename:"add_governorate",arrangement:"186"},{id:36,codename:"change_governorate",arrangement:"187"},{id:37,codename:"delete_governorate",arrangement:"188"},{id:38,codename:"view_city",arrangement:"189"},{id:39,codename:"add_city",arrangement:"190"},{id:40,codename:"change_city",arrangement:"191"},{id:41,codename:"delete_city",arrangement:"192"},{id:42,codename:"view_region",arrangement:"193"},{id:43,codename:"add_region",arrangement:"194"},{id:44,codename:"change_region",arrangement:"195"},{id:45,codename:"delete_region",arrangement:"196"},{id:46,codename:"view_buildingfeature",arrangement:"197"},{id:47,codename:"add_buildingfeature",arrangement:"198"},{id:48,codename:"change_buildingfeature",arrangement:"199"},{id:49,codename:"delete_buildingfeature",arrangement:"200"},{id:50,codename:"view_ownershipdoc",arrangement:"201"},{id:51,codename:"add_ownershipdoc",arrangement:"202"},{id:52,codename:"change_ownershipdoc",arrangement:"203"},{id:53,codename:"delete_ownershipdoc",arrangement:"204"},{id:54,codename:"view_currency",arrangement:"205"},{id:55,codename:"add_currency",arrangement:"206"},{id:56,codename:"change_currency",arrangement:"207"},{id:57,codename:"delete_currency",arrangement:"208"},{id:58,codename:"view_expenses",arrangement:"209"},{id:59,codename:"add_expenses",arrangement:"210"},{id:60,codename:"change_expenses",arrangement:"211"},{id:61,codename:"delete_expenses",arrangement:"212"},{id:62,codename:"view_notification",arrangement:"213"},{id:63,codename:"add_notification",arrangement:"214"},{id:64,codename:"change_notification",arrangement:"215"},{id:65,codename:"delete_notification",arrangement:"216"},{id:66,codename:"view_buildingmenu",arrangement:"220"},{id:67,codename:"view_building",arrangement:"221"},{id:68,codename:"view_onebuilding",arrangement:"222"},{id:69,codename:"add_building",arrangement:"223"},{id:70,codename:"change_building",arrangement:"224"},{id:71,codename:"delete_building",arrangement:"225"},{id:72,codename:"view_buildCustomerDept",arrangement:"226"},{id:73,codename:"view_units",arrangement:"230"},{id:74,codename:"view_oneunit",arrangement:"231"},{id:75,codename:"add_units",arrangement:"232"},{id:76,codename:"change_units",arrangement:"233"},{id:77,codename:"delete_units",arrangement:"234"},{id:78,codename:"view_unititemexpenses",arrangement:"235"},{id:79,codename:"view_addunitexpenses",arrangement:"236"},{id:80,codename:"view_deleteunitexpenses",arrangement:"237"},{id:81,codename:"view_tenant",arrangement:"240"},{id:82,codename:"view_onetenant",arrangement:"241"},{id:83,codename:"add_tenant",arrangement:"242"},{id:84,codename:"change_tenant",arrangement:"243"},{id:85,codename:"delete_tenant",arrangement:"244"},{id:86,codename:"confirm_tenant",arrangement:"245"},{id:87,codename:"view_tenantstatements",arrangement:"246"},{id:88,codename:"view_tenantrelative",arrangement:"247"},{id:89,codename:"add_tenantrelative",arrangement:"248"},{id:90,codename:"delete_tenantrelative",arrangement:"249"},{id:91,codename:"view_contractsmenu",arrangement:"250"},{id:92,codename:"view_rentcontracts",arrangement:"251"},{id:93,codename:"view_onecontract",arrangement:"252"},{id:94,codename:"view_contractinstallments",arrangement:"253"},{id:95,codename:"view_renewcontract",arrangement:"254"},{id:96,codename:"add_rentcontracts",arrangement:"255"},{id:97,codename:"change_rentcontracts",arrangement:"256"},{id:98,codename:"delete_rentcontracts",arrangement:"257"},{id:99,codename:"view_installment",arrangement:"258"},{id:100,codename:"add_installment",arrangement:"259"},{id:101,codename:"change_installment",arrangement:"260"},{id:102,codename:"delete_installment",arrangement:"261"},{id:103,codename:"view_documentsmenu",arrangement:"270"},{id:104,codename:"view_receivable",arrangement:"271"},{id:105,codename:"view_onereceivable",arrangement:"272"},{id:106,codename:"add_onereceivable",arrangement:"273"},{id:107,codename:"change_onereceivable",arrangement:"274"},{id:108,codename:"delete_onereceivable",arrangement:"275"},{id:109,codename:"view_payable",arrangement:"276"},{id:110,codename:"view_onepayable",arrangement:"277"},{id:111,codename:"add_onepayable",arrangement:"278"},{id:112,codename:"change_onepayable",arrangement:"279"},{id:113,codename:"delete_onepayable",arrangement:"280"},{id:114,codename:"view_employeemenu",arrangement:"285"},{id:115,codename:"view_employee",arrangement:"286"},{id:116,codename:"view_oneemployee",arrangement:"287"},{id:117,codename:"add_employee",arrangement:"288"},{id:118,codename:"change_employee",arrangement:"289"},{id:119,codename:"delete_employee",arrangement:"290"},{id:120,codename:"view_emp_securitybuildings",arrangement:"291"},{id:121,codename:"add_emp_security_onebuilding",arrangement:"292"},{id:122,codename:"delete_emp_security_onebuilding",arrangement:"293"},{id:123,codename:"view_emp_securitypermissions",arrangement:"294"},{id:124,codename:"add_emp_security_onepermission",arrangement:"295"},{id:125,codename:"delete_emp_security_onepermission",arrangement:"296"},{id:126,codename:"view_settingsmenu",arrangement:"300"},{id:127,codename:"view_applicationparamlist",arrangement:"301"},{id:128,codename:"view_oneapplicationparam",arrangement:"302"},{id:129,codename:"change_oneapplicationparam",arrangement:"303"},{id:123,codename:"arrange_permissionslist",arrangement:"304"}],this.settings=this.appSettings.settings}ngOnInit(){if(this.userSUb=this.global.user.subscribe(a=>{this.account=a}),this.localStore.getItem("token")&&this.localStore.getItem("account")){this.curUserData=JSON.parse(this.localStore.getItem("account")),this.curUserPermissions=JSON.parse(this.localStore.getItem("permissions"));for(let a=0;a<this.curUserPermissions.length;a++)this.userPerm[a]=this.curUserPermissions[a].codename;this.prepareMsgLanguage(),this.getAllParam(this.curCOMId,this.account.periorty)}else this.router.navigate(["/sign-in"])}can(a){return!(!this.curUserData.is_superuser&&!this.userPerm.includes(a))}getAllParam(a,n){this.settingService.getAllParam(a,n).subscribe(r=>{this.AllParameters=r},r=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}onPageChanged(a){this.page=a,window.scrollTo(0,0)}onClickArrangePermissions(){for(let a=0;a<this.arrangePermission.length;a++)this.userService.arrangeUserPerm(this.arrangePermission[a].codename,this.arrangePermission[a].arrangement).subscribe(n=>{a==this.arrangePermission.length-1&&console.log("-----Finished"),console.log("arrangePermissionID:: "+this.arrangePermission[a].id)})}openParamDialog(a){console.log("-----Data:: "+a),this.dialog.open(l,{data:{paramRow:a,periorty:this.account.periorty},panelClass:["theme-dialog"],autoFocus:!1,direction:this.settings.rtl?"rtl":"ltr"}).afterClosed().subscribe(r=>{"Cancel"==r.event||("Patch"==r.event?this.settingService.editParam(r.data,r.data.id).subscribe(o=>{this.snackBar.open("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.getAllParam(this.curCOMId,this.account.periorty)},o=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u062a\u0639\u062f\u064a\u0644 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}):"Post"==r.event&&this.settingService.addParam(r.data).subscribe(o=>{this.snackBar.open("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0641\u064a \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.getAllParam(this.curCOMId,this.account.periorty)},o=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0625\u0636\u0627\u0641\u0629 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}))})}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(a=>{this.errorRetrieveMsg=a}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(a=>{this.askToDeletedMsg=a}),this.translateService.get("MESSAGE.DELETED").subscribe(a=>{this.deletedMsg=a}),this.translateService.get("MESSAGE.ConfirmAction").subscribe(a=>{this.deletedTitleMsg=a})}}p.\u0275fac=function(a){return new(a||p)(e.Y36(x.C),e.Y36(N.U),e.Y36(w.F0),e.Y36(D.K),e.Y36(y.ux),e.Y36(_.sK),e.Y36(d.qu),e.Y36(s.uw),e.Y36(O.g),e.Y36(J.d))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-applicationparam-list"]],decls:26,vars:21,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"mat-mdc-cell","primary-text","notifbold"],[1,"p-2","actions"],["mat-mini-fab","","color","primary",3,"matTooltip","click",4,"ngIf"],["mat-mini-fab","","color","primary",3,"matTooltip","click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"p-0","text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.YNc(6,R,3,0,"button",2),e.qZA(),e._UZ(7,"mat-divider"),e.TgZ(8,"div",3)(9,"div",4)(10,"div",5)(11,"h2"),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"div",5)(15,"h2"),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.TgZ(18,"div",5)(19,"h2"),e._uU(20),e.ALo(21,"translate"),e.qZA()(),e._UZ(22,"div",5),e.qZA(),e.YNc(23,W,10,4,"div",6),e.ALo(24,"paginate"),e.qZA()(),e.YNc(25,V,4,0,"div",7),e.qZA()),2&a&&(e.xp6(4),e.Oqu(e.lcZ(5,7,"ADMIN_NAV.ApplicationParam")),e.xp6(2),e.Q6J("ngIf",n.can("arrange_permissionslist")),e.xp6(6),e.hij(" ",e.lcZ(13,9,"HTML.CODE")," "),e.xp6(4),e.hij(" ",e.lcZ(17,11,"FIELD.NAME")," "),e.xp6(4),e.hij(" ",e.lcZ(21,13,"HTML.Value")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(24,15,n.AllParameters,e.WLB(18,Q,n.count,n.page))),e.xp6(2),e.Q6J("ngIf",n.AllParameters.length>0))},dependencies:[u.sg,u.O5,h.LS,c.xw,c.Wh,c.yH,v.lW,v.nh,Y.a8,F.Hw,B.d,H.gM,h._s,_.X$],styles:[".notifbold[_ngcontent-%COMP%]{font-weight:700}"]});var X=t(3221);const T=[{path:"",redirectTo:"parameters",pathMatch:"full"},{path:"parameters",component:p,pathMatch:"full",data:{breadcrumb:"Parameters"}},{path:"parameters-add/:id",component:l,data:{breadcrumb:"EditParameter"}},{path:"permissions-all/:id",component:X.y,data:{breadcrumb:"Permissions"}}];class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[u.ez,w.Bz.forChild(T),Z.JF,d.u5,h.JX,L.D,d.UX,S.m,h.JX]})}}]);