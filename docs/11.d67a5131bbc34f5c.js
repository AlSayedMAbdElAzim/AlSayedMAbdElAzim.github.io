"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[11],{2011:(B,m,t)=>{t.r(m),t.d(m,{SignInModule:()=>i,routes:()=>v});var g=t(6895),c=t(9132),s=t(4006),S=t(589),p=t(8955),d=t(3071),h=t(2340),M=t(5783),e=t(4650),L=t(7009),A=t(5298),Z=t(7465),F=t(2854),f=t(3081),l=t(1576),T=t(4859),E=t(3546),U=t(7392),x=t(4144),u=t(9549);function C(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"HTML.USERNAMEREQ")))}function O(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"MESSAGE.MinLength")))}function N(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"HTML.PasswordREQ")))}function w(n,r){1&n&&(e.TgZ(0,"mat-error"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"MESSAGE.MinLength6")))}class a{constructor(r,o,I,b,y,R,G,P){this.formBuilder=r,this.router=o,this.snackBar=I,this.localStore=b,this.userService=y,this.global=R,this.staff=G,this.translateService=P,this.curCOMId=h.N.comid,this.curBraId=h.N.braid,this.account=new M.n}ngOnInit(){this.loginForm=this.formBuilder.group({username:["",s.kI.compose([s.kI.required,s.kI.minLength(3)])],password:["",s.kI.compose([s.kI.required,s.kI.minLength(6)])]}),this.registerForm=this.formBuilder.group({username:["",s.kI.compose([s.kI.required,s.kI.minLength(3)])],first_name:["",s.kI.compose([s.kI.required,s.kI.minLength(3)])],email:["",s.kI.compose([s.kI.required,p.L])],password:["",s.kI.required],confirmPassword:["",s.kI.required]},{validator:(0,p.z)("password","confirmPassword")}),this.prepareMsgLanguage(),this.setInitialValues()}prepareMsgLanguage(){this.translateService.get("MESSAGE.LOGGEDIN").subscribe(r=>{this.loggedInMsg=r}),this.translateService.get("MESSAGE.NOTLOGGEDIN").subscribe(r=>{this.notLoggedInMsg=r}),this.translateService.get("MESSAGE.REGISTERD").subscribe(r=>{this.registeredMsg=r}),this.translateService.get("MESSAGE.NOTREGISTERD").subscribe(r=>{this.notRegisteredMsg=r})}getOneUser(r){console.log("**** sign-in.component line 103 *****getOneUser::: "+r),this.staff.getOneUserbyId(r).subscribe(o=>{this.global.me=o,console.log(o.userPicture)})}onLoginFormSubmit(r){this.loginForm.valid&&this.userService.login(this.loginForm).subscribe(o=>{this.localStore.setItem("token",o.token),this.global.me=o.user,this.global.userLoggedIn=!0,this.prepareMsgLanguage(),this.snackBar.open(this.loggedInMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["/"]).then(()=>{window.location.reload()})},o=>{this.global.userLoggedIn=!1,this.prepareMsgLanguage(),this.snackBar.open(this.notLoggedInMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}),this.router.navigate(["/sign-in"])})}onRegisterFormSubmit(r){console.log("************************************************"),console.log("=====values[username]"+r.username),console.log("=====values[email]"+r.email),this.registerForm.valid?this.userService.registerUser(this.registerForm).subscribe(o=>{this.snackBar.open(this.registeredMsg,"\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["/units/unit"])},o=>{console.log("error",o),this.snackBar.open(this.notRegisteredMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}):(console.log("this.registerForm not valid"),this.snackBar.open(this.notRegisteredMsg,"\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3}))}setInitialValues(){this.newUser={id:null,username:"",UserCode:null,first_name:"",last_name:"",UserBirthDate:null,EntryDate:null,joinedDate:null,UserMobile:"",email:"",is_superuser:!1,is_staff:!1,is_active:!0,is_employee:"T",periorty:0,COMId:this.curCOMId,branch_KeyField:null,userPicture:null,gender:"",password:"",repassword:"",is_teacher:"F",RowDelete:0,LoginFrom:"N",userJobName:"",userFacebook:"",userTwitter:"",userGoogle:"",userAddress:""}}mapRegisterFormTo_UserClass(){this.newUser.username=this.registerForm.value.username,this.newUser.email=this.registerForm.value.email,this.newUser.password=this.registerForm.value.password,this.newUser.repassword=this.registerForm.value.confirmPassword}mapToOneUser(){this.oneuser.username=this.registerForm.value.username,this.oneuser.email=this.registerForm.value.email}}a.\u0275fac=function(r){return new(r||a)(e.Y36(s.QS),e.Y36(c.F0),e.Y36(L.ux),e.Y36(A.C),e.Y36(d.K),e.Y36(Z.U),e.Y36(F.x),e.Y36(f.sK))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sign-in"]],features:[e._Bn([d.K])],decls:33,vars:23,consts:[[1,"p-4"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","50",1,"p-3"],[1,"text-muted","text-center","mb-3"],[3,"formGroup"],["appearance","outline",1,"w-100","mt-2"],["matInput","","formControlName","username","required","",3,"placeholder"],[4,"ngIf"],["appearance","outline",1,"w-100","mt-1"],["matInput","","formControlName","password","type","password","required","",3,"placeholder"],[1,"text-center","mt-2"],["mat-fab","","color","primary",1,"mat-elevation-z6",3,"click"],["fxLayout","row","fxLayoutAlign","space-between center",1,"mt-3"],[1,"divider","w-100"],[1,"text-muted","auth"]],template:function(r,o){1&r&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"form",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"input",6),e.ALo(12,"translate"),e.YNc(13,C,3,3,"mat-error",7),e.YNc(14,O,3,3,"mat-error",7),e.qZA(),e.TgZ(15,"mat-form-field",8)(16,"mat-label"),e._uU(17),e.ALo(18,"translate"),e.qZA(),e._UZ(19,"input",9),e.ALo(20,"translate"),e.YNc(21,N,3,3,"mat-error",7),e.YNc(22,w,3,3,"mat-error",7),e.qZA(),e.TgZ(23,"div",10)(24,"button",11),e.NdJ("click",function(){return o.onLoginFormSubmit(o.loginForm.value)}),e.TgZ(25,"mat-icon"),e._uU(26,"exit_to_app"),e.qZA()()(),e.TgZ(27,"div",12),e._UZ(28,"div",13),e.TgZ(29,"h3",14),e._uU(30),e.ALo(31,"translate"),e.qZA(),e._UZ(32,"div",13),e.qZA()()()()()),2&r&&(e.xp6(4),e.Oqu(e.lcZ(5,11,"HTML.SIGNIN")),e.xp6(2),e.Q6J("formGroup",o.loginForm),e.xp6(3),e.Oqu(e.lcZ(10,13,"HTML.USERNAME")),e.xp6(2),e.s9C("placeholder",e.lcZ(12,15,"HTML.USERNAME")),e.xp6(2),e.Q6J("ngIf",null==o.loginForm.controls.username.errors?null:o.loginForm.controls.username.errors.required),e.xp6(1),e.Q6J("ngIf",o.loginForm.controls.username.hasError("minlength")),e.xp6(3),e.Oqu(e.lcZ(18,17,"HTML.PASSWORD")),e.xp6(2),e.s9C("placeholder",e.lcZ(20,19,"HTML.PASSWORD")),e.xp6(2),e.Q6J("ngIf",null==o.loginForm.controls.password.errors?null:o.loginForm.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",o.loginForm.controls.password.hasError("minlength")),e.xp6(8),e.Oqu(e.lcZ(31,21,"COMPANY.NAME")))},dependencies:[g.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,l.xw,l.Wh,l.yH,T.cs,E.a8,U.Hw,x.Nt,u.KE,u.hX,u.TO,f.X$],styles:[".auth[_ngcontent-%COMP%]{white-space:nowrap;padding:7px 14px;font-weight:500}"]});const v=[{path:"",component:a,pathMatch:"full"}];class i{}i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,c.Bz.forChild(v),s.UX,S.m]})}}]);