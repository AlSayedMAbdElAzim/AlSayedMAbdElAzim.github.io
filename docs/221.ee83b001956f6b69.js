"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[221],{3221:(j,h,s)=>{s.d(h,{y:()=>m});var f=s(2340),P=s(5783),e=s(4650),l=s(4006),d=s(9132),v=s(7009),x=s(3071),E=s(5298),b=s(7465),p=s(3081),D=s(5412),A=s(4165),C=s(1182),_=s(6895),g=s(4333),c=s(1576),T=s(4859),u=s(811),U=s(3546),M=s(7392),O=s(4144),y=s(9549),Z=s(266),I=s(1419);function L(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(i);const o=e.oxw(2);return e.KtG(o.onClickUsed())}),e.TgZ(1,"mat-icon"),e._uU(2,"vpn_key"),e.qZA()()}}function S(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(i);const o=e.oxw().$implicit,r=e.oxw();return e.KtG(r.onClickSendItToUser(r.AllPermissionsDisplayed,o.codename))}),e.ALo(1,"translate"),e.TgZ(2,"mat-icon"),e._uU(3,"lock"),e.qZA()()}2&a&&e.s9C("matTooltip",e.lcZ(1,1,"BTN.Transfer"))}function w(a,t){if(1&a&&(e.TgZ(0,"div",17)(1,"div",18),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",19),e._uU(5),e.qZA(),e.TgZ(6,"div",18)(7,"div",20),e.YNc(8,L,3,0,"button",21),e.YNc(9,S,4,3,"button",22),e.qZA()()()),2&a){const i=t.$implicit,n=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,4,"SECURITY."+i.codename)),e.xp6(3),e.Oqu(i.codename),e.xp6(3),e.Q6J("ngIf",n.can("add_emp_security_onepermission")&&n.userPerm.indexOf(i.codename)>-1),e.xp6(1),e.Q6J("ngIf",n.can("add_emp_security_onepermission")&&-1==n.userPerm.indexOf(i.codename))}}function R(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"div")(1,"div",25)(2,"mat-card",26)(3,"pagination-controls",27),e.NdJ("pageChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.onPageChanged(o))}),e.qZA()()()()}}function K(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(i);const o=e.oxw().$implicit,r=e.oxw();return e.KtG(r.onClickDeletePerm(o.codename))}),e.ALo(1,"translate"),e.TgZ(2,"mat-icon"),e._uU(3,"delete"),e.qZA()()}2&a&&e.s9C("matTooltip",e.lcZ(1,1,"BTN.REMOVE"))}function B(a,t){if(1&a&&(e.TgZ(0,"div",17)(1,"div",28),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"div",18)(5,"div",20),e.YNc(6,K,4,3,"button",22),e.qZA()()()),2&a){const i=t.$implicit,n=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,2,"SECURITY."+i.codename)," "),e.xp6(4),e.Q6J("ngIf",n.can("delete_emp_security_onepermission"))}}function W(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"div")(1,"div",25)(2,"mat-card",26)(3,"pagination-controls",29),e.NdJ("pageChange",function(o){e.CHM(i);const r=e.oxw();return e.KtG(r.onUserPageChanged(o))}),e.qZA()()()()}}class m{constructor(t,i,n,o,r,Y,F,J,N,H,k,Q){this.formBuilder=t,this.router=i,this.snackBar=n,this.userService=o,this.activatedRoute=r,this.localStore=Y,this.global=F,this.translateService=J,this.fb=N,this.dialog=H,this.settingService=k,this.appSettings=Q,this.config={},this.countAll=8,this.countPerUser=8,this.curCOMId=f.N.comid,this.account=new P.n,this.tempuserPerm=[],this.AllPermissions=[],this.AllPermissionsDisplayed=[],this.tempDisplayed=[],this.UserPermissions=[],this.userPerm=[],this.settings=this.appSettings.settings}ngOnInit(){if(this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")){this.curUserData=JSON.parse(this.localStore.getItem("account")),this.curUserPermissions=JSON.parse(this.localStore.getItem("permissions"));for(let t=0;t<this.curUserPermissions.length;t++)this.tempuserPerm[t]=this.curUserPermissions[t].codename;this.getAllPermissions()}this.sub=this.activatedRoute.params.subscribe(t=>{t.id&&(this.id=+t.id,console.log("params['id']:: "+this.id),this.getUserPermissions(+this.id))})}can(t){return!(!this.curUserData.is_superuser&&!this.tempuserPerm.includes(t))}refreshDisplayed(t){this.AllPermissionsDisplayed=t,this.config={id:"basicPaginate",itemsPerPage:this.countAll,currentPage:1,totalItems:this.AllPermissionsDisplayed.length}}getAllPermissions(){this.userService.getAllPermission().subscribe(t=>{this.AllPermissions=t,this.refreshDisplayed(this.AllPermissions),this.tempDisplayed=t,this.config={id:"basicPaginate",itemsPerPage:this.countAll,currentPage:1,totalItems:this.AllPermissions.length}},t=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getUserPermissions(t){this.userService.getUserPermission(t).subscribe(i=>{this.UserPermissions=i.user_permissions,this.userConfig={id:"userPaginate",itemsPerPage:this.countPerUser,currentPage:1,totalItems:this.UserPermissions.length},this.userPermInArray()},i=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}userPermInArray(){for(let t=0;t<this.UserPermissions.length;t++)this.userPerm[t]=this.UserPermissions[t].codename,console.log("this.userPerm[i]:: "+this.userPerm[t])}manageAllPermissionsDisplayed(){console.log("this.userPerm:: "+this.userPerm),this.tempDisplayed.forEach((t,i)=>{this.userPerm.includes(this.tempDisplayed[i].codename)&&(console.log("**included:: "+this.tempDisplayed[i].codename),delete this.tempDisplayed[i])}),this.refreshDisplayed(this.tempDisplayed)}onClickSendItToUser(t,i){console.log("----// Add it to Table  ----//"),this.userService.addUserPerm(this.id,i).subscribe(n=>{this.refreshDisplayed(t),this.getUserPermissions(this.id)})}onClickDeletePerm(t){console.log("----// Remove Perm from Table  ----//"),this.userService.removeUserPerm(this.id,t).subscribe(i=>{this.getUserPermissions(this.id)})}onClickUsed(){console.log("--** it is used so, will not do anything **--")}onPageChanged(t){this.config.currentPage=t}onUserPageChanged(t){this.userConfig.currentPage=t}onLoginFormSubmit(t){}onRegisterFormSubmit(t){}}m.\u0275fac=function(t){return new(t||m)(e.Y36(l.QS),e.Y36(d.F0),e.Y36(v.ux),e.Y36(x.K),e.Y36(d.gz),e.Y36(E.C),e.Y36(b.U),e.Y36(p.sK),e.Y36(l.qu),e.Y36(D.uw),e.Y36(A.g),e.Y36(C.d))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-emp-security-dialog"]],decls:41,vars:28,consts:[[1,"p-4"],["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["fxLayout","row"],["appearance","legacy"],["controls","matButtonToggleGroup"],["value","search"],[1,"user-search"],[1,"user-search-input"],["matInput","","name","search","autocomplete","off",3,"placeholder","ngModel","ngModelChange"],["fxFlex","100","fxFlex.gt-sm","50",1,"p-3"],[1,"mat-mdc-table","permission-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],[4,"ngIf"],["fxFlex","100","fxFlex.gt-sm","10",1,"p-3"],["fxFlex","100","fxFlex.gt-sm","35",1,"p-3"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"mat-mdc-cell","primary-text","notifbold"],[1,"p-2","actions"],["mat-mini-fab","","color","primary",3,"click",4,"ngIf"],["mat-mini-fab","","color","warn",3,"matTooltip","click",4,"ngIf"],["mat-mini-fab","","color","primary",3,"click"],["mat-mini-fab","","color","warn",3,"matTooltip","click"],["fxFlex","100"],[1,"p-0","text-center"],["id","basicPaginate","autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"],[1,"mat-mdc-cell","selectedbold"],["id","userPaginate","autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(t,i){if(1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"mat-button-toggle-group",3,4)(5,"mat-button-toggle",5)(6,"mat-icon"),e._uU(7,"search"),e.qZA()()()(),e.TgZ(8,"form",6)(9,"mat-form-field",7)(10,"input",8),e.NdJ("ngModelChange",function(o){return i.searchText=o}),e.ALo(11,"translate"),e.qZA()()()(),e.TgZ(12,"div",2)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h2"),e._uU(18),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"div",12)(21,"h2"),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e._UZ(24,"div",12),e.qZA(),e.YNc(25,w,10,6,"div",13),e.ALo(26,"paginate"),e.ALo(27,"PermissionSearchPipe"),e.qZA(),e.YNc(28,R,4,0,"div",14),e.qZA(),e._UZ(29,"div",15),e.TgZ(30,"div",16)(31,"div",10)(32,"div",11)(33,"div",12)(34,"h2"),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e._UZ(37,"div",12),e.qZA(),e.YNc(38,B,7,4,"div",13),e.ALo(39,"paginate"),e.qZA(),e.YNc(40,W,4,0,"div",14),e.qZA()()()),2&t){const n=e.MAs(4);e.xp6(8),e.ekj("show","search"==n.value),e.xp6(2),e.s9C("placeholder",e.lcZ(11,11,"HTML.SEARCH_Window")),e.Q6J("ngModel",i.searchText),e.xp6(8),e.hij(" ",e.lcZ(19,13,"HTML.Description")," "),e.xp6(4),e.hij(" ",e.lcZ(23,15,"HTML.CODE")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(26,17,e.xi3(27,20,i.AllPermissionsDisplayed,i.searchText),i.config)),e.xp6(3),e.Q6J("ngIf",i.AllPermissionsDisplayed.length>0),e.xp6(7),e.hij(" ",e.lcZ(36,23,"HTML.CODE")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(39,25,i.UserPermissions,i.userConfig)),e.xp6(2),e.Q6J("ngIf",i.UserPermissions.length>0)}},dependencies:[_.sg,_.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,g.LS,c.xw,c.Wh,c.yH,T.nh,u.A9,u.Yi,U.a8,M.Hw,O.Nt,y.KE,Z.gM,g._s,I.Vn,p.X$],styles:[".auth{white-space:nowrap;padding:7px 14px;font-weight:500}.notifbold{font-weight:700}.selectedbold{font-weight:700;color:green}.permission-table.mat-mdc-table{display:block;overflow-x:auto}.permission-table.mat-mdc-table .mat-mdc-row,.permission-table.mat-mdc-table .mat-mdc-header-row{display:flex;border-bottom-width:1px;border-bottom-style:solid;align-items:center;min-height:48px;padding:0 16px}.permission-table.mat-mdc-table .mat-mdc-cell,.permission-table.mat-mdc-table .mat-mdc-header-cell{flex:1;overflow:hidden;word-wrap:break-word;padding:0 8px}.permission-table.mat-mdc-table .mat-mdc-cell.image,.permission-table.mat-mdc-table .mat-mdc-header-cell.image{flex-grow:0;flex-shrink:0;flex-basis:60px}.permission-table.mat-mdc-table .mat-mdc-cell.image img,.permission-table.mat-mdc-table .mat-mdc-header-cell.image img{display:block;border-radius:50%;margin:4px 0}.permission-table.mat-mdc-table .mat-mdc-cell.status,.permission-table.mat-mdc-table .mat-mdc-header-cell.status{flex-grow:0;flex-shrink:0;flex-basis:32px}.permission-table.mat-mdc-table .mat-mdc-cell.ratings,.permission-table.mat-mdc-table .mat-mdc-header-cell.ratings{flex-grow:0;flex-shrink:0;flex-basis:80px}.permission-table.mat-mdc-table .mat-mdc-header-cell{font-size:14px}.permission-table.mat-mdc-table .mat-mdc-cell .actions{text-align:right}.permission-table.mat-mdc-table .mat-mdc-cell .actions button{margin:0 4px}.permission-table.mat-mdc-table.header-sm .mat-mdc-header-row{min-height:36px}.permission-table.mat-mdc-table.truncated .mat-mdc-cell,.permission-table.mat-mdc-table.truncated .mat-mdc-header-cell{white-space:nowrap;text-overflow:ellipsis}.user-name{padding:0 12px;font-weight:400}.user-content{padding:10px}.user-content .user-img{position:relative}.user-content .user-img img{border-radius:50%;width:80px;height:80px}.user-content .user-img img.blocked{opacity:.5}.user-content .user-img .mat-icon{position:absolute;top:-8px;left:-8px;font-size:96px;height:96px;width:96px}.user-content .mat-mdc-slide-toggle{margin-top:15px}.user-content .user-details span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-content .user-details .mat-icon{padding:2px 10px}.user-content .user-details.blocked{opacity:.5}.user-search{width:0;overflow:hidden;transition:.3s}.user-search .mat-mdc-form-field{width:100%!important;text-align:center!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-infix{min-height:36px;padding:8px 0!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper{display:none}.user-search .mat-mdc-input-element{text-align:center}.user-search.show{width:100%;overflow:visible}.user-spinner{position:absolute;inset:0}.mat-mdc-card{overflow:hidden}\n"],encapsulation:2})}}]);