"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[463],{463:(A,v,o)=>{o.r(v),o.d(v,{ReviewsModule:()=>c,routes:()=>x});var s=o(6895),e=o(9132),f=o(8865),g=o(4333),Z=o(2887),t=o(4650),h=o(5412),r=o(1576),l=o(4859),C=o(3546),T=o(7392),_=o(4850),w=o(266),I=o(9515),U=o(6660);function y(i,n){if(1&i){const a=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(a);const m=t.oxw().$implicit,u=t.oxw();return t.KtG(u.unApprove(m))}),t.TgZ(1,"mat-icon"),t._uU(2,"undo"),t.qZA()()}}function O(i,n){if(1&i){const a=t.EpF();t.TgZ(0,"div",10)(1,"div",11)(2,"mat-icon",12),t.ALo(3,"filterById"),t._uU(4),t.qZA()(),t.TgZ(5,"div",13),t._UZ(6,"img",14),t.qZA(),t.TgZ(7,"div",15),t._uU(8),t.qZA(),t.TgZ(9,"div",15),t._uU(10),t.qZA(),t.TgZ(11,"div",16),t._UZ(12,"app-rating",17),t.qZA(),t.TgZ(13,"div",15),t._uU(14),t.ALo(15,"filterById"),t.qZA(),t.TgZ(16,"div",15),t._uU(17),t.ALo(18,"date"),t.qZA(),t.TgZ(19,"div",15)(20,"div",18),t.YNc(21,y,3,0,"button",19),t.TgZ(22,"button",20),t.NdJ("click",function(){const u=t.CHM(a).$implicit,R=t.oxw();return t.KtG(R.remove(u))}),t.TgZ(23,"mat-icon"),t._uU(24,"delete"),t.qZA()()()()()}if(2&i){const a=n.$implicit,d=t.oxw();let m,u;t.xp6(2),t.Q6J("color",1==a.statusId?"primary":"warn")("matTooltip",null==(m=t.xi3(3,13,d.statuses,a.statusId))?null:m.name),t.xp6(2),t.Oqu(1==a.statusId?"check_circle":"access_time"),t.xp6(2),t.Q6J("src",a.image,t.LSH),t.xp6(2),t.Oqu(a.author),t.xp6(2),t.Oqu(a.comment),t.xp6(2),t.Q6J("ratingsCount",null==a?null:a.ratingsCount)("ratingsValue",null==a?null:a.ratingsValue)("showText",!1)("direction","row"),t.xp6(2),t.Oqu(null==(u=t.xi3(15,16,d.stores,a.storeId))?null:u.name),t.xp6(3),t.Oqu(t.xi3(18,19,a.date,"dd MMMM, yyyy 'at' HH:mm")),t.xp6(4),t.Q6J("ngIf",1==a.statusId)}}function D(i,n){if(1&i){const a=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"mat-card",24)(3,"pagination-controls",25),t.NdJ("pageChange",function(m){t.CHM(a);const u=t.oxw();return t.KtG(u.onPageChanged(m))}),t.qZA()()()()}}const M=function(i,n){return{itemsPerPage:i,currentPage:n}};class p{constructor(n){this.dialog=n,this.reviews=[{id:1,statusId:1,image:"assets/images/profile/michael.jpg",author:"Michael Blair",comment:"lorem ipsum",ratingsCount:4,ratingsValue:350,storeId:1,date:new Date(2020,1,15,14,30)},{id:2,statusId:2,image:"assets/images/profile/tereza.jpg",author:"Tereza Stiles",comment:"lorem ipsum",ratingsCount:3,ratingsValue:290,storeId:2,date:new Date(2020,2,5,22,20)},{id:3,statusId:2,image:"assets/images/profile/adam.jpg",author:"Adam Sandler",comment:"lorem ipsum",ratingsCount:5,ratingsValue:450,storeId:1,date:new Date(2020,3,29,13,15)},{id:4,statusId:1,image:"assets/images/profile/julia.jpg",author:"Julia Aniston",comment:"lorem ipsum",ratingsCount:4,ratingsValue:350,storeId:2,date:new Date(2020,4,12,11,50)},{id:5,statusId:2,image:"assets/images/profile/bruno.jpg",author:"Bruno Vespa",comment:"lorem ipsum",ratingsCount:3,ratingsValue:300,storeId:2,date:new Date(2020,5,5,16,25)},{id:6,statusId:1,image:"assets/images/profile/ashley.jpg",author:"Ashley Ahlberg",comment:"lorem ipsum",ratingsCount:5,ratingsValue:300,storeId:1,date:new Date(2020,6,18,12,30)},{id:7,statusId:1,image:"assets/images/avatars/avatar-5.png",author:"Michelle Ormond",comment:"lorem ipsum",ratingsCount:4,ratingsValue:300,storeId:1,date:new Date(2020,6,28,17,23)}],this.statuses=[{id:1,name:"Approved"},{id:2,name:"Pending"}],this.stores=[{id:1,name:"Store 1"},{id:2,name:"Store 2"}],this.count=6}ngOnInit(){}onPageChanged(n){this.page=n,window.scrollTo(0,0)}unApprove(n){const a=this.reviews.findIndex(d=>d.id==n.id);-1!==a&&(n.statusId=2,this.reviews[a]=n)}remove(n){this.dialog.open(Z.$,{maxWidth:"400px",data:{title:"Confirm Action",message:"Are you sure you want remove this review?"}}).afterClosed().subscribe(d=>{if(d){const m=this.reviews.indexOf(n);-1!==m&&this.reviews.splice(m,1)}})}}p.\u0275fac=function(n){return new(n||p)(t.Y36(h.uw))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-reviews"]],decls:25,vars:8,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell","status"],[1,"mat-mdc-header-cell","image"],[1,"mat-mdc-header-cell"],[1,"mat-mdc-header-cell","ratings"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell","status"],[3,"color","matTooltip"],[1,"mat-mdc-cell","image"],["alt","","width","50",3,"src"],[1,"mat-mdc-cell"],[1,"mat-mdc-cell","ratings"],[3,"ratingsCount","ratingsValue","showText","direction"],[1,"p-2","actions"],["mat-mini-fab","","color","primary","matTooltip","UnApprove",3,"click",4,"ngIf"],["mat-mini-fab","","color","warn","matTooltip","Delete",1,"mx-1",3,"click"],["mat-mini-fab","","color","primary","matTooltip","UnApprove",3,"click"],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),t._uU(4,"Store Reviews"),t.qZA()(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",2)(7,"div",3),t._UZ(8,"div",4),t.TgZ(9,"div",5),t._uU(10,"Image"),t.qZA(),t.TgZ(11,"div",6),t._uU(12,"Author"),t.qZA(),t.TgZ(13,"div",6),t._uU(14,"Comment"),t.qZA(),t.TgZ(15,"div",7),t._uU(16,"Rating"),t.qZA(),t.TgZ(17,"div",6),t._uU(18,"Store"),t.qZA(),t.TgZ(19,"div",6),t._uU(20,"Date"),t.qZA(),t._UZ(21,"div",6),t.qZA(),t.YNc(22,O,25,22,"div",8),t.ALo(23,"paginate"),t.qZA()(),t.YNc(24,D,4,0,"div",9),t.qZA()),2&n&&(t.xp6(22),t.Q6J("ngForOf",t.xi3(23,2,a.reviews,t.WLB(5,M,a.count,a.page))),t.xp6(2),t.Q6J("ngIf",a.reviews.length>0))},dependencies:[s.sg,s.O5,r.xw,r.Wh,r.yH,l.nh,C.a8,T.Hw,_.d,w.gM,I.A,g.LS,s.uU,U.H,g._s]});const x=[{path:"",component:p,pathMatch:"full"}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[s.ez,e.Bz.forChild(x),f.m,g.JX]})},2887:(A,v,o)=>{o.d(v,{$:()=>t});var s=o(5412),e=o(4650),f=o(1576),g=o(4859),Z=o(3081);class t{constructor(r,l){this.dialogRef=r,this.data=l}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}t.\u0275fac=function(r){return new(r||t)(e.Y36(s.so),e.Y36(s.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:13,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(r,l){1&r&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1)(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"div",2)(6,"div",3)(7,"button",4),e.NdJ("click",function(){return l.onDismiss()}),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"button",5),e.NdJ("click",function(){return l.onConfirm()}),e._uU(11),e.ALo(12,"translate"),e.qZA()()()),2&r&&(e.xp6(1),e.Oqu(null==l.data?null:l.data.title),e.xp6(3),e.Oqu(null==l.data?null:l.data.message),e.xp6(4),e.Oqu(e.lcZ(9,4,"BTN.NO")),e.xp6(3),e.Oqu(e.lcZ(12,6,"BTN.YES")))},dependencies:[f.xw,f.Wh,g.lW,s.uh,s.xY,s.H8,Z.X$]})}}]);