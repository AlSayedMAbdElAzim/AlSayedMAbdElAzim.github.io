"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[522],{3522:(U,l,o)=>{o.r(l),o.d(l,{SalesModule:()=>i,routes:()=>T});var d=o(6895),y=o(9132),A=o(8865),s=o(4333),t=o(4650),r=o(1576),g=o(4859),v=o(3546),f=o(7392),Z=o(4850),h=o(266);function b(n,e){1&n&&(t.TgZ(0,"button",13)(1,"mat-icon"),t._uU(2,"receipt"),t.qZA()())}function x(n,e){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"span",9),t._uU(3),t.qZA()(),t.TgZ(4,"div",8),t._uU(5),t.qZA(),t.TgZ(6,"div",8),t._uU(7),t.qZA(),t.TgZ(8,"div",8),t._uU(9),t.qZA(),t.TgZ(10,"div",8)(11,"div",10)(12,"button",11)(13,"mat-icon"),t._uU(14,"remove_red_eye"),t.qZA()(),t.YNc(15,b,3,0,"button",12),t.qZA()()()),2&n){const a=e.$implicit;t.xp6(3),t.Oqu(a.number),t.xp6(2),t.Oqu(a.date),t.xp6(2),t.Oqu(a.status),t.xp6(2),t.Oqu(a.total),t.xp6(6),t.Q6J("ngIf",a.invoice)}}function I(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"mat-card",16)(3,"pagination-controls",17),t.NdJ("pageChange",function(u){t.CHM(a);const p=t.oxw();return t.KtG(p.onPageChanged(u))}),t.qZA()()()()}}const O=function(n,e){return{itemsPerPage:n,currentPage:e}};class c{constructor(){this.orders=[{number:"#3258",date:"March 29, 2018",status:"Completed",total:"$140.00 for 2 items",invoice:!0},{number:"#3145",date:"February 14, 2018",status:"On hold",total:"$255.99 for 1 item",invoice:!1},{number:"#2972",date:"January 7, 2018",status:"Processing",total:"$255.99 for 1 item",invoice:!0},{number:"#2971",date:"January 5, 2018",status:"Completed",total:"$73.00 for 1 item",invoice:!0},{number:"#1981",date:"December 24, 2017",status:"Pending Payment",total:"$285.00 for 2 items",invoice:!1},{number:"#1781",date:"September 3, 2017",status:"Refunded",total:"$49.00 for 2 items",invoice:!1},{number:"#3981",date:"December 24, 2017",status:"Pending Payment",total:"$285.00 for 2 items",invoice:!1},{number:"#5781",date:"September 3, 2017",status:"Refunded",total:"$49.00 for 2 items",invoice:!1},{number:"#6258",date:"March 22, 2019",status:"Completed",total:"$140.00 for 2 items",invoice:!0},{number:"#7145",date:"February 14, 2020",status:"On hold",total:"$255.99 for 1 item",invoice:!1},{number:"#1972",date:"January 10, 2018",status:"Processing",total:"$255.99 for 1 item",invoice:!0},{number:"#8971",date:"October 3, 2019",status:"Completed",total:"$73.00 for 1 item",invoice:!0}],this.count=6}ngOnInit(){}onPageChanged(e){this.page=e,window.scrollTo(0,0)}}function q(n,e){if(1&n&&(t.TgZ(0,"div",7)(1,"div",8)(2,"span",9),t._uU(3),t.qZA()(),t.TgZ(4,"div",8),t._uU(5),t.qZA(),t.TgZ(6,"div",8),t._uU(7),t.qZA(),t.TgZ(8,"div",8),t._uU(9),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA(),t.TgZ(12,"div",8),t._uU(13),t.qZA(),t.TgZ(14,"div",8)(15,"div",10)(16,"button",11)(17,"mat-icon"),t._uU(18,"remove_red_eye"),t.qZA()()()()()),2&n){const a=e.$implicit;t.xp6(3),t.Oqu(a.orderId),t.xp6(2),t.Oqu(a.transactionId),t.xp6(2),t.Oqu(a.date),t.xp6(2),t.Oqu(a.paymentMethod),t.xp6(2),t.Oqu(a.status),t.xp6(2),t.Oqu(a.amount)}}function C(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"mat-card",14)(3,"pagination-controls",15),t.NdJ("pageChange",function(u){t.CHM(a);const p=t.oxw();return t.KtG(p.onPageChanged(u))}),t.qZA()()()()}}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-orders"]],decls:20,vars:8,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"order"],[1,"p-2","actions"],["mat-mini-fab","","color","primary","matTooltip","View"],["mat-mini-fab","","color","warn","matTooltip","View invoice","class","btn-invoice",4,"ngIf"],["mat-mini-fab","","color","warn","matTooltip","View invoice",1,"btn-invoice"],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),t._uU(4,"Orders List"),t.qZA()(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4),t._uU(9,"Order"),t.qZA(),t.TgZ(10,"div",4),t._uU(11,"Date"),t.qZA(),t.TgZ(12,"div",4),t._uU(13,"Status"),t.qZA(),t.TgZ(14,"div",4),t._uU(15,"Total"),t.qZA(),t._UZ(16,"div",4),t.qZA(),t.YNc(17,x,16,5,"div",5),t.ALo(18,"paginate"),t.qZA()(),t.YNc(19,I,4,0,"div",6),t.qZA()),2&e&&(t.xp6(17),t.Q6J("ngForOf",t.xi3(18,2,a.orders,t.WLB(5,O,a.count,a.page))),t.xp6(2),t.Q6J("ngIf",a.orders.length>0))},dependencies:[d.sg,d.O5,r.xw,r.Wh,r.yH,g.nh,v.a8,f.Hw,Z.d,h.gM,s.LS,s._s]});const w=function(n,e){return{itemsPerPage:n,currentPage:e}};class m{constructor(){this.transactions=[{orderId:"#2121",transactionId:"#78245214510",date:"March 29, 2018",paymentMethod:"Stripe",status:"Process",amount:"$140.00"},{orderId:"#7255",transactionId:"#58272854525",date:"January 7, 2018",paymentMethod:"Paypal",status:"Pending",amount:"$855.00"},{orderId:"#4122",transactionId:"#48266987452",date:"December 24, 2017",paymentMethod:"Paypal",status:"Delivered",amount:"$420.00"},{orderId:"#4534",transactionId:"#43567578223",date:"March 29, 2018",paymentMethod:"Stripe",status:"Process",amount:"$140.00"},{orderId:"#6512",transactionId:"#54129964355",date:"October 7, 2018",paymentMethod:"Paypal",status:"Pending",amount:"$952.00"},{orderId:"#2345",transactionId:"#75208924544",date:"December 24, 2017",paymentMethod:"Stripe",status:"Delivered",amount:"$45.00"},{orderId:"#1255",transactionId:"#72113456734",date:"October 2, 2019",paymentMethod:"Stripe",status:"Delivered",amount:"$140.00"},{orderId:"#8854",transactionId:"#96455673452",date:"January 7, 2018",paymentMethod:"Paypal",status:"Pending",amount:"$225.00"},{orderId:"#9712",transactionId:"#85643112647",date:"December 24, 2017",paymentMethod:"Stripe",status:"Delivered",amount:"$540.00"},{orderId:"#7342",transactionId:"#95534768943",date:"March 29, 2018",paymentMethod:"Stripe",status:"Pending",amount:"$140.00"},{orderId:"#5414",transactionId:"#34861354666",date:"October 7, 2018",paymentMethod:"Paypal",status:"Pending",amount:"$475.00"},{orderId:"#8906",transactionId:"#23756748667",date:"November 2, 2017",paymentMethod:"Paypal",status:"Delivered",amount:"$420.00"}],this.count=6}ngOnInit(){}onPageChanged(e){this.page=e,window.scrollTo(0,0)}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-transactions"]],decls:24,vars:8,consts:[[1,"p-2"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"order"],[1,"p-2","actions"],["mat-mini-fab","","color","primary","matTooltip","View"],["fxLayout","row wrap"],["fxFlex","100"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"h2"),t._uU(4,"Transactions List"),t.qZA()(),t._UZ(5,"mat-divider"),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4),t._uU(9,"OrderId"),t.qZA(),t.TgZ(10,"div",4),t._uU(11,"TransactionId"),t.qZA(),t.TgZ(12,"div",4),t._uU(13,"Date"),t.qZA(),t.TgZ(14,"div",4),t._uU(15,"Payment Method"),t.qZA(),t.TgZ(16,"div",4),t._uU(17,"Status"),t.qZA(),t.TgZ(18,"div",4),t._uU(19,"Amount"),t.qZA(),t._UZ(20,"div",4),t.qZA(),t.YNc(21,q,19,6,"div",5),t.ALo(22,"paginate"),t.qZA()(),t.YNc(23,C,4,0,"div",6),t.qZA()),2&e&&(t.xp6(21),t.Q6J("ngForOf",t.xi3(22,2,a.transactions,t.WLB(5,w,a.count,a.page))),t.xp6(2),t.Q6J("ngIf",a.transactions.length>0))},dependencies:[d.sg,d.O5,r.xw,r.Wh,r.yH,g.nh,v.a8,f.Hw,Z.d,h.gM,s.LS,s._s]});const T=[{path:"",redirectTo:"orders",pathMatch:"full"},{path:"orders",component:c,data:{breadcrumb:"Orders"}},{path:"transactions",component:m,data:{breadcrumb:"Transactions"}}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,y.Bz.forChild(T),A.m,s.JX]})}}]);