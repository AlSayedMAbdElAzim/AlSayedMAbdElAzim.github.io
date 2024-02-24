"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[624],{6002:(F,I,r)=>{r.d(I,{Z:()=>h});var u=r(5521),A=r(2340),o=r(4650),T=r(529),C=r(7465);class h{constructor(a,i){this.http=a,this.globalServ=i,this.baseUrl=(new u.P).api_Ip,this.secondPartUrl=(new u.P).api_constant,this.curCOMId=A.N.comid}getAllBranch(a,i){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/branch/allBranches/?M="+a+"&C="+i,this.globalServ.getAuthHeaders())}getOneBranch(a){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/branch/"+a+"/",this.globalServ.getAuthHeaders())}getMainBranch(a,i){return this.http.get(this.baseUrl+this.secondPartUrl+"atlas/branch/branchPerSpec/?M="+a+"&C="+i+"&Main=T",this.globalServ.getAuthHeaders())}sendSms(a,i,g){return this.http.post(a,i,this.globalServ.smsHeaders(g))}sendSmsData(a,i){console.log("-----smsUrl:: "+a),console.log("-----smsToken:: "+i);const g=new FormData;return g.append("bearerTokens",i),g.append("sender","Jeddah Lake"),g.append("recipients","966503002323"),g.append("body","125478"),this.http.post(a,g,this.globalServ.smsHeaders(i))}sendSmsGet(a){return this.http.get(a)}sendSmsGetToken(a,i){return this.http.get(a,this.globalServ.smsHeaders(i))}addBranch(a){return this.http.post(this.baseUrl+this.secondPartUrl+"atlas/branch/",a,this.globalServ.getAuthHeaders())}editBranch(a,i){return this.http.put(this.baseUrl+this.secondPartUrl+"atlas/branch/"+i+"/",a,this.globalServ.getAuthHeaders())}deleteBranch(a){return this.http.delete(this.baseUrl+this.secondPartUrl+"atlas/branch/"+a+"/",this.globalServ.getAuthHeaders())}softDeleteBranch(a){return this.http.put(this.baseUrl+this.secondPartUrl+"atlas/branch/"+a+"/",{RowDelete:1},this.globalServ.getAuthHeaders())}}h.\u0275fac=function(a){return new(a||h)(o.LFG(T.eN),o.LFG(C.U))},h.\u0275prov=o.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})},624:(F,I,r)=>{r.r(I),r.d(I,{SignInModule:()=>p,routes:()=>Z});var u=r(6895),A=r(9132),o=r(4006),T=r(589),C=r(5861),h=r(8955),O=r(3071),a=r(2340),i=r(5783),g=r(5412),e=r(4650),d=r(1576),M=r(4859),P=r(4144),m=r(9549),L=r(3081);function w(n,s){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Code is required"),e.qZA())}class f{constructor(s,t,l){this.dialogRef=s,this.data=t,this.fb=l}ngOnInit(){this.form=this.fb.group({otp:[null,o.kI.required]})}onSubmit(){console.log(this.form.value),this.form.valid&&this.dialogRef.close(this.form.value)}onSave(){this.form.valid&&(this.action="Ok",this.dialogRef.close({event:this.action,data:this.form.value}))}close(){this.action="Cancel",this.dialogRef.close({event:this.action})}}f.\u0275fac=function(s){return new(s||f)(e.Y36(g.so),e.Y36(g.WI),e.Y36(o.QS))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-otp-dialog"]],decls:21,vars:16,consts:[["mat-dialog-title",""],["autocomplete","off",3,"formGroup"],["mat-dialog-content",""],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","90.0",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","otp","required",""],[4,"ngIf"],["mat-dialog-actions",""],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["mat-raised-button","","color","primary",3,"mat-dialog-close","disabled","click"],["mat-raised-button","","color","warn",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"h4",0),e._uU(1),e.ALo(2,"translate"),e.qZA(),e.TgZ(3,"form",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"input",6),e.YNc(12,w,2,0,"mat-error",7),e.qZA()()()(),e.TgZ(13,"div",8)(14,"div",9)(15,"button",10),e.NdJ("click",function(){return t.onSave()}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"button",11),e.NdJ("click",function(){return t.close()}),e._uU(19),e.ALo(20,"translate"),e.qZA()()()()),2&s&&(e.xp6(1),e.Oqu(e.lcZ(2,8,t.data.cttRow)),e.xp6(2),e.Q6J("formGroup",t.form),e.xp6(6),e.Oqu(e.lcZ(10,10,"HTML.OTPCode")),e.xp6(3),e.Q6J("ngIf",null==t.form.controls.otp.errors?null:t.form.controls.otp.errors.required),e.xp6(3),e.Q6J("mat-dialog-close",t.form.value)("disabled",!t.form.valid),e.xp6(1),e.Oqu(e.lcZ(17,12,"BTN.OK")),e.xp6(3),e.Oqu(e.lcZ(20,14,"BTN.CANCEL")))},dependencies:[u.O5,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,d.xw,d.Wh,d.yH,M.lW,g.ZT,g.uh,g.xY,g.H8,P.Nt,m.KE,m.hX,m.TO,L.X$]});var U=r(4459),x=r(7009),N=r(5298),D=r(7465),y=r(2854),B=r(4165),R=r(6002),Y=r(1182),G=r(3546),k=r(7392);function H(n,s){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"HTML.USERNAMEREQ")))}function J(n,s){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"MESSAGE.MinLength")))}function Q(n,s){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"HTML.PasswordREQ")))}function q(n,s){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"MESSAGE.MinLength6")))}class v{constructor(s,t,l,c,E,S,b,K,V,W,X,z){this.formBuilder=s,this.router=t,this.snackBar=l,this.localStore=c,this.userService=E,this.global=S,this.staff=b,this.settingService=K,this.dialog=V,this.translateService=W,this.atlasService=X,this.appSettings=z,this.curCOMId=a.N.comid,this.curBraId=a.N.braid,this.account=new i.n,this.codeForSendOTP=(new U.$).getisAppSendOTP(),this.codeForOTPLength=(new U.$).getlengthOfOTP(),this.allowedChar="1234567890",this.settings=this.appSettings.settings}ngOnInit(){this.getParamValueLegnthOfOTP(this.curCOMId,1,this.codeForOTPLength),this.getParamValueAppSendOTP(this.curCOMId,1,this.codeForSendOTP),this.loginForm=this.formBuilder.group({username:["",o.kI.compose([o.kI.required,o.kI.minLength(3)])],password:["",o.kI.compose([o.kI.required,o.kI.minLength(6)])]}),this.registerForm=this.formBuilder.group({username:["",o.kI.compose([o.kI.required,o.kI.minLength(3)])],first_name:["",o.kI.compose([o.kI.required,o.kI.minLength(3)])],email:["",o.kI.compose([o.kI.required,h.L])],password:["",o.kI.required],confirmPassword:["",o.kI.required]},{validator:(0,h.z)("password","confirmPassword")}),this.prepareMsgLanguage(),this.setInitialValues()}getParamValueLegnthOfOTP(s,t,l){this.settingService.getValueForCode(s,t,l).subscribe(c=>(this.lengthOfCode=c[0].APAValue,c[0].APAValue),c=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getParamValueAppSendOTP(s,t,l){this.settingService.getValueForCode(s,t,l).subscribe(c=>(this.appSendOTP=c[0].APAValue,c[0].APAValue),c=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0646\u0638\u0627\u0645","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}prepareMsgLanguage(){this.translateService.get("MESSAGE.LOGGEDIN").subscribe(s=>{this.loggedInMsg=s}),this.translateService.get("MESSAGE.NOTLOGGEDIN").subscribe(s=>{this.notLoggedInMsg=s}),this.translateService.get("MESSAGE.REGISTERD").subscribe(s=>{this.registeredMsg=s}),this.translateService.get("MESSAGE.NOTREGISTERD").subscribe(s=>{this.notRegisteredMsg=s}),this.translateService.get("MESSAGE.EnterMsgSentTo").subscribe(s=>{this.enterMsgSentTo=s})}getOneUser(s){console.log("**** sign-in.component line 103 *****getOneUser::: "+s),this.staff.getOneUserbyId(s).subscribe(t=>{this.global.me=t,console.log(t.userPicture)})}onLoginFormSubmit(s){this.loginForm.valid&&this.userService.login(this.loginForm).subscribe(t=>{console.log("========*-*-*-*-*-*-*-*-*-*-*-*-*======="),console.log("---open OTP dialog-----"),console.log(t.user.UserMobile),"YES"!=this.appSendOTP.toUpperCase()||t.user.is_superuser?(localStorage.setItem("pointer","signinReload"),this.localStore.setItem("token",t.token),this.global.me=t.user,this.global.userLoggedIn=!0,localStorage.setItem("windowCount","1"),this.localStore.setItem("smsCode","Accepted"),this.localStore.setItem("signedIn","Done"),this.userService.getUserPermission(t.user.id).subscribe(l=>{this.localStore.setItem("permissions",JSON.stringify(l.user_permissions))}),this.snackBar.open(this.loggedInMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.waitAndNavigate()):this.openOTPDialog(t.user,t.token,t.user.id,t.user.UserMobile),console.log("---Wait for OTP dialog-------")},t=>{console.log("========*-*-*-*-*-*Error not Connected-*-*-*-*-*======="),this.global.userLoggedIn=!1,this.snackBar.open(this.notLoggedInMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}),this.router.navigate(["/"]).then(()=>{window.location.reload()})})}delay(s){return new Promise(t=>setTimeout(t,s))}waitAndNavigate(){var s=this;return(0,C.Z)(function*(){yield s.delay(2e3),s.router.navigate(["/"]).then(()=>{window.location.reload()})})()}onRegisterFormSubmit(s){this.registerForm.valid?this.userService.registerUser(this.registerForm).subscribe(t=>{this.snackBar.open(this.registeredMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["/units/unit"])},t=>{console.log("error",t),this.snackBar.open(this.notRegisteredMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}):(console.log("this.registerForm not valid"),this.snackBar.open(this.notRegisteredMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}))}setInitialValues(){this.newUser={id:null,username:"",UserCode:null,first_name:"",last_name:"",UserBirthDate:null,EntryDate:null,joinedDate:null,UserMobile:"",email:"",is_superuser:!1,is_staff:!1,is_active:!0,is_employee:"T",periorty:0,COMId:this.curCOMId,branch_KeyField:null,customer_KeyField:null,userPicture:null,gender:"",password:"",repassword:"",is_teacher:"F",RowDelete:0,LoginFrom:"N",userJobName:"",userFacebook:"",userTwitter:"",userGoogle:"",userAddress:""}}mapRegisterFormTo_UserClass(){this.newUser.username=this.registerForm.value.username,this.newUser.email=this.registerForm.value.email,this.newUser.password=this.registerForm.value.password,this.newUser.repassword=this.registerForm.value.confirmPassword}mapToOneUser(){this.oneuser.username=this.registerForm.value.username,this.oneuser.email=this.registerForm.value.email}openOTPDialog(s,t,l,c){console.log("=====this.codeForOTPLength-*=-*=-*=-*=:: "+this.codeForOTPLength),this.localStore.setItem("token",t),this.otpCode=this.createRandomString(this.lengthOfCode,this.allowedChar),console.log("-*=-*=-*=-*=-*=-*=-*=-*=-*=-*=-*=-*="),console.log("=====this.otpCode-*=-*=-*=-*=:: "+this.otpCode),console.log("-*=-*=-*=-*=-*=-*=-*=-*=-*=-*=-*=-*="),this.dialog.open(f,{data:{cttRow:this.enterMsgSentTo+" "+c},panelClass:["theme-dialog"],autoFocus:!1,direction:this.settings.rtl?"rtl":"ltr"}).afterClosed().subscribe(S=>{"Cancel"==S.event?(this.global.userLoggedIn=!1,this.snackBar.open(this.notLoggedInMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}),this.router.navigate(["/"]).then(()=>{window.location.reload()})):"Ok"==S.event&&(S.data.otp==this.otpCode?(localStorage.setItem("pointer","signinReload"),console.log("---EQUAL----"),this.localStore.setItem("token",t),this.global.me=s,this.global.userLoggedIn=!0,localStorage.setItem("windowCount","1"),this.localStore.setItem("smsCode","Accepted"),this.localStore.setItem("signedIn","Done"),this.userService.getUserPermission(l).subscribe(b=>{this.localStore.setItem("permissions",JSON.stringify(b.user_permissions))}),this.snackBar.open(this.loggedInMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.waitAndNavigate()):(console.log("---not EQUAL----"),this.global.userLoggedIn=!1,this.snackBar.open(this.notLoggedInMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}),this.router.navigate(["/"]).then(()=>{window.location.reload()})),console.log("---------------------------"))})}createRandomString(s,t){let l="";for(let c=0;c<s;c++)l+=t.charAt(Math.floor(Math.random()*t.length));return l}}v.\u0275fac=function(s){return new(s||v)(e.Y36(o.QS),e.Y36(A.F0),e.Y36(x.ux),e.Y36(N.C),e.Y36(O.K),e.Y36(D.U),e.Y36(y.x),e.Y36(B.g),e.Y36(g.uw),e.Y36(L.sK),e.Y36(R.Z),e.Y36(Y.d))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-sign-in"]],features:[e._Bn([O.K])],decls:33,vars:23,consts:[[1,"p-4"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","50",1,"p-3"],[1,"text-muted","text-center","mb-3"],[3,"formGroup"],["appearance","outline",1,"w-100","mt-2"],["matInput","","formControlName","username","required","",3,"placeholder"],[4,"ngIf"],["appearance","outline",1,"w-100","mt-1"],["matInput","","formControlName","password","type","password","required","",3,"placeholder"],[1,"text-center","mt-2"],["mat-fab","","color","primary",1,"mat-elevation-z6",3,"click"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mt-3"],[1,"divider","w-100"],[1,"text-muted","auth"]],template:function(s,t){1&s&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"form",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"input",6),e.ALo(12,"translate"),e.YNc(13,H,3,3,"mat-error",7),e.YNc(14,J,3,3,"mat-error",7),e.qZA(),e.TgZ(15,"mat-form-field",8)(16,"mat-label"),e._uU(17),e.ALo(18,"translate"),e.qZA(),e._UZ(19,"input",9),e.ALo(20,"translate"),e.YNc(21,Q,3,3,"mat-error",7),e.YNc(22,q,3,3,"mat-error",7),e.qZA(),e.TgZ(23,"div",10)(24,"button",11),e.NdJ("click",function(){return t.onLoginFormSubmit(t.loginForm.value)}),e.TgZ(25,"mat-icon"),e._uU(26,"key"),e.qZA()()(),e.TgZ(27,"div",12),e._UZ(28,"div",13),e.TgZ(29,"h3",14),e._uU(30),e.ALo(31,"translate"),e.qZA(),e._UZ(32,"div",13),e.qZA()()()()()),2&s&&(e.xp6(4),e.Oqu(e.lcZ(5,11,"HTML.SIGNIN")),e.xp6(2),e.Q6J("formGroup",t.loginForm),e.xp6(3),e.Oqu(e.lcZ(10,13,"HTML.USERNAME")),e.xp6(2),e.s9C("placeholder",e.lcZ(12,15,"HTML.USERNAME")),e.xp6(2),e.Q6J("ngIf",null==t.loginForm.controls.username.errors?null:t.loginForm.controls.username.errors.required),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.username.hasError("minlength")),e.xp6(3),e.Oqu(e.lcZ(18,17,"HTML.PASSWORD")),e.xp6(2),e.s9C("placeholder",e.lcZ(20,19,"HTML.PASSWORD")),e.xp6(2),e.Q6J("ngIf",null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.password.hasError("minlength")),e.xp6(8),e.Oqu(e.lcZ(31,21,"COMPANY.NAME")))},dependencies:[u.O5,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,d.xw,d.Wh,d.yH,M.cs,G.a8,k.Hw,P.Nt,m.KE,m.hX,m.TO,L.X$],styles:[".auth[_ngcontent-%COMP%]{white-space:nowrap;padding:7px 14px;font-weight:500}"]});const Z=[{path:"",component:v,pathMatch:"full"}];class p{}p.\u0275fac=function(s){return new(s||p)},p.\u0275mod=e.oAB({type:p}),p.\u0275inj=e.cJS({imports:[u.ez,A.Bz.forChild(Z),o.UX,T.m]})}}]);