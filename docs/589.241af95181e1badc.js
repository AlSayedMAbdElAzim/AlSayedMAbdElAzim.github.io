"use strict";(self.webpackChunkemporium=self.webpackChunkemporium||[]).push([[589],{1589:(ve,I,s)=>{s.r(I),s.d(I,{PaymentsModule:()=>P,routes:()=>z});var u=s(6895),x=s(2340),C=s(5783),M=s(5521),e=s(4650),q=s(529),S=s(7465);class m{constructor(t,a){this.http=t,this.globalServ=a,this.baseUrl=(new M.P).api_Ip,this.secondPartUrl=(new M.P).api_constant,this.curCOMId=x.N.comid}getAllReceivableDocuments(t,a){return this.http.get(this.baseUrl+this.secondPartUrl+"contracts/paydoc/PayDocsPerSpec/?type=R&M="+t+"&C="+a,this.globalServ.getAuthHeaders())}getAllPayableDocuments(t,a){return this.http.get(this.baseUrl+this.secondPartUrl+"contracts/paydoc/PayDocsPerSpec/?type=P&M="+t+"&C="+a,this.globalServ.getAuthHeaders())}deleteDocument(t){return this.http.delete(this.baseUrl+this.secondPartUrl+"contracts/paydoc/"+t,this.globalServ.getAuthHeaders())}getOneDocs(t){return this.http.get(this.baseUrl+this.secondPartUrl+"contracts/paydoc/"+t,this.globalServ.getAuthHeaders())}addDoc(t){return this.http.post(this.baseUrl+this.secondPartUrl+"contracts/paydoc/",t,this.globalServ.getAuthHeaders_for_files())}editDoc(t){return this.http.patch(this.baseUrl+this.secondPartUrl+"contracts/paydoc/"+t.id+"/",t,this.globalServ.getAuthHeaders_for_files())}}m.\u0275fac=function(t){return new(t||m)(e.LFG(q.eN),e.LFG(S.U))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var V=s(2887),R=s(1182),Y=s(5412),g=s(9132),L=s(5298),N=s(8959),y=s(3081),K=s(7009),v=s(4333),D=s(1576),b=s(4859),U=s(811),h=s(3546),H=s(7392),B=s(4850),J=s(1572),j=s(266);const ee=function(o){return["/payments/receivable-add/",o]};function te(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._uU(2),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.qZA(),e.TgZ(5,"div",18),e._uU(6),e.qZA(),e.TgZ(7,"div",18),e._uU(8),e.qZA(),e.TgZ(9,"div",18),e._uU(10),e.qZA(),e.TgZ(11,"div",18),e._uU(12),e.qZA(),e.TgZ(13,"div",18),e._uU(14),e.qZA(),e.TgZ(15,"div",18)(16,"div",19)(17,"a",20),e.ALo(18,"translate"),e.TgZ(19,"mat-icon"),e._uU(20,"edit"),e.qZA()(),e.TgZ(21,"button",21),e.NdJ("click",function(){const n=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.removeDocument(n.id))}),e.ALo(22,"translate"),e.TgZ(23,"mat-icon"),e._uU(24,"delete"),e.qZA()()()()()}if(2&o){const a=t.$implicit;e.xp6(2),e.Oqu(a.branch_KeyField),e.xp6(2),e.Oqu(a.build_Name),e.xp6(2),e.Oqu(a.unit_UnitNumber),e.xp6(2),e.hij(" ",a.customer_Name," "),e.xp6(2),e.hij(" ",a.PDODocDate," "),e.xp6(2),e.hij(" ",a.PDOValue," "),e.xp6(2),e.hij(" ",a.PDOPrintedCode," "),e.xp6(3),e.s9C("matTooltip",e.lcZ(18,10,"BTN.EDIT")),e.Q6J("routerLink",e.VKq(14,ee,a.id)),e.xp6(4),e.s9C("matTooltip",e.lcZ(22,12,"BTN.REMOVE"))}}function ae(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"mat-card",24)(3,"pagination-controls",25),e.NdJ("pageChange",function(l){e.CHM(a);const n=e.oxw();return e.KtG(n.onPageChanged(l))}),e.qZA()()()()}}function ie(o,t){1&o&&(e.TgZ(0,"div",26),e._UZ(1,"mat-spinner",27),e.qZA())}const oe=function(o,t){return{itemsPerPage:o,currentPage:t}};class Z{constructor(t,a,i,l,n,c,d,p,O){this.appSettings=t,this.dialog=a,this.paymentService=i,this.router=l,this.global=n,this.localStore=c,this.contractService=d,this.translateService=p,this.snackBar=O,this.curCOMId=x.N.comid,this.account=new C.n,this.count=4,this.settings=this.appSettings.settings}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.prepareMsgLanguage(),this.getDocuments()):this.router.navigate(["/sign-in"])}getDocuments(){this.documentsAll=null,this.paymentService.getAllReceivableDocuments(this.curCOMId,this.account.periorty).subscribe(t=>this.documentsAll=t)}removeDocument(t){this.dialog.open(V.$,{maxWidth:"400px",data:{title:this.deletedTitleMsg,message:this.askToDeletedMsg}}).afterClosed().subscribe(i=>{i&&(this.paymentService.getOneDocs(t).subscribe(l=>{null!=l.installment_KeyField&&(this.oneDocValue=l.PDOValue,this.contractService.getOneInstallment(l.installment_KeyField).subscribe(n=>{this.curInstallmentValue=n.INSValue,this.curInstallmentPayedValue=n.INSPayedValue,null==this.curInstallmentValue&&(this.curInstallmentValue=0),null==this.curInstallmentPayedValue&&(this.curInstallmentPayedValue=0),this.manageInstallmetPayedValue(l.installment_KeyField,this.curInstallmentValue,this.curInstallmentPayedValue,this.oneDocValue)}))}),this.paymentService.deleteDocument(t).subscribe(l=>this.getDocuments()))})}manageInstallmetPayedValue(t,a,i,l){null==i&&(i=0),null==l&&(l=0),null==a&&(a=0);let n=+i-+l;n<=0&&(n=0),this.insStatus=0==n?"N":"T";let c={id:t,INSStatus:this.insStatus,INSPayedValue:n};console.log("===installData:: "+c),this.contractService.editInstallments(c).subscribe(d=>{console.log("==installment after Update:: "+d)},d=>{console.log(d)})}onPageChanged(t){this.page=t,this.getDocuments(),window.scrollTo(0,0)}gotoNewDocument(){this.router.navigate(["/payments/receivable-add/"])}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(t=>{this.errorRetrieveMsg=t}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(t=>{this.askToDeletedMsg=t}),this.translateService.get("MESSAGE.DELETED").subscribe(t=>{this.deletedMsg=t}),this.translateService.get("MESSAGE.ConfirmAction").subscribe(t=>{this.deletedTitleMsg=t})}}Z.\u0275fac=function(t){return new(t||Z)(e.Y36(R.d),e.Y36(Y.uw),e.Y36(m),e.Y36(g.F0),e.Y36(S.U),e.Y36(L.C),e.Y36(N.W),e.Y36(y.sK),e.Y36(K.ux))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-receivable-doc-list"]],features:[e._Bn([m])],decls:58,vars:33,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["fxLayout","row"],["appearance","legacy"],["controls","matButtonToggleGroup"],["value","add",3,"click"],["fxLayout","row","fxLayoutAlign","space-between center"],["appearance","legacy","value","list"],["viewType","matButtonToggleGroup"],["value","list"],["value","grid"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","user-spinner",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"p-2","actions"],["mat-mini-fab","","color","primary",3,"routerLink","matTooltip"],["mat-mini-fab","","color","warn",3,"matTooltip","click"],["fxLayout","row wrap"],["fxFlex","100",1,"p-2"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"],["fxLayout","column","fxLayoutAlign","center center",1,"user-spinner"],["color","primary"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-button-toggle-group",2,3)(4,"mat-button-toggle",4),e.NdJ("click",function(){return a.gotoNewDocument()}),e.TgZ(5,"mat-icon"),e._uU(6,"note_add"),e.qZA()()()(),e.TgZ(7,"div",5)(8,"mat-button-toggle-group",6,7)(10,"mat-button-toggle",8)(11,"mat-icon"),e._uU(12,"view_list"),e.qZA()(),e.TgZ(13,"mat-button-toggle",9)(14,"mat-icon"),e._uU(15,"view_module"),e.qZA()()()()(),e._UZ(16,"mat-divider"),e.TgZ(17,"mat-card")(18,"div",10)(19,"h2"),e._uU(20),e.ALo(21,"translate"),e.qZA()(),e._UZ(22,"mat-divider"),e.TgZ(23,"div",11)(24,"div",12)(25,"div",13)(26,"h2"),e._uU(27),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"div",13)(30,"h2"),e._uU(31),e.ALo(32,"translate"),e.qZA()(),e.TgZ(33,"div",13)(34,"h2"),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e.TgZ(37,"div",13)(38,"h2"),e._uU(39),e.ALo(40,"translate"),e.qZA()(),e.TgZ(41,"div",13)(42,"h2"),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e.TgZ(45,"div",13)(46,"h2"),e._uU(47),e.ALo(48,"translate"),e.qZA()(),e.TgZ(49,"div",13)(50,"h2"),e._uU(51),e.ALo(52,"translate"),e.qZA()(),e._UZ(53,"div",13),e.qZA(),e.YNc(54,te,25,16,"div",14),e.ALo(55,"paginate"),e.qZA()(),e.YNc(56,ae,4,0,"div",15),e.YNc(57,ie,2,0,"div",16)),2&t&&(e.xp6(20),e.Oqu(e.lcZ(21,11,"HTML.ReceivableDoc_List")),e.xp6(7),e.hij(" ",e.lcZ(28,13,"HTML.BRANCH")," "),e.xp6(4),e.hij(" ",e.lcZ(32,15,"HTML.BUILDING")," "),e.xp6(4),e.hij(" ",e.lcZ(36,17,"HTML.UnitNumber")," "),e.xp6(4),e.hij(" ",e.lcZ(40,19,"HTML.TENANT")," "),e.xp6(4),e.hij(" ",e.lcZ(44,21,"HTML.DocDate")," "),e.xp6(4),e.hij(" ",e.lcZ(48,23,"HTML.DocValue")," "),e.xp6(4),e.hij(" ",e.lcZ(52,25,"HTML.DocPrintedNo")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(55,27,a.documentsAll,e.WLB(30,oe,a.count,a.page))),e.xp6(2),e.Q6J("ngIf",a.documentsAll),e.xp6(1),e.Q6J("ngIf",!a.documentsAll))},dependencies:[v.LS,u.sg,u.O5,g.rH,D.xw,D.Wh,D.yH,b.Tq,b.nh,U.A9,U.Yi,h.a8,H.Hw,B.d,J.Ou,j.gM,v._s,y.X$],styles:[".user-name{padding:0 12px;font-weight:400}.user-content{padding:10px}.user-content .user-img{position:relative}.user-content .user-img img{border-radius:50%;width:80px;height:80px}.user-content .user-img img.blocked{opacity:.5}.user-content .user-img .mat-icon{position:absolute;top:-8px;left:-8px;font-size:96px;height:96px;width:96px}.user-content .mat-mdc-slide-toggle{margin-top:15px}.user-content .user-details span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-content .user-details .mat-icon{padding:2px 10px}.user-content .user-details.blocked{opacity:.5}.user-search{width:0;overflow:hidden;transition:.3s}.user-search .mat-mdc-form-field{width:100%!important;text-align:center!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-infix{min-height:36px;padding:8px 0!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper{display:none}.user-search .mat-mdc-input-element{text-align:center}.user-search.show{width:100%;overflow:visible}.user-spinner{position:absolute;inset:0}.mat-mdc-card{overflow:hidden}\n"],encapsulation:2});class G{}var Q=s(6381),k=s(5726),r=s(4006),W=s(3238),f=s(9602),X=s(4144),F=s(9549),$=s(4385);function le(o,t){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.ADD")))}function se(o,t){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.EDIT")))}function ne(o,t){if(1&o&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&o){const a=t.$implicit;e.Q6J("value",a.id),e.xp6(1),e.hij(" ",a.CUSName," ")}}class _{constructor(t,a,i,l,n,c,d,p,O,w,E){this.activatedRoute=t,this.localStore=a,this._companyService=i,this.global=l,this.router=n,this.snackBar=c,this.docsService=d,this.tenantsService=p,this.contractService=O,this.translateService=w,this.fb=E,this.curCOMId=x.N.comid,this.account=new C.n,this.curDocValue=0,this.curDocPayedValue=0,this.AllNotPayedInstallments=[],this.AllTenants=[]}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.getTenants(),this.sub=this.activatedRoute.params.subscribe(t=>{t.id?(this.id=+t.id,this.getDocById(this.id)):this.payDocForDisplay=new G,this.docData_Form=this.fb.group({id:null,PDOCode:null,PDOValue:{value:null,disabled:this.id},PDODocDate:null,PDODocType:"R",PDODocClassType:"A",PDOPrintedCode:null,PDODocSecondPerson:null,PDONotes:null,contract_KeyField:null,branch_KeyField:null,owner_KeyField:null,build_KeyField:null,unit_KeyField:null,installment_KeyField:null,customer_KeyField:null})})):this.router.navigate(["/sign-in"])}getDocById(t){this.docsService.getOneDocs(t).subscribe(a=>{this.fillForm(a),this.payDocForDisplay=a})}fillForm(t){null!=t.PDODocDate&&(this.s_docDate=t.PDODocDate),this.docData_Form.patchValue({id:t.id,contract_KeyField:t.contract_KeyField,branch_KeyField:t.branch_KeyField,owner_KeyField:t.owner_KeyField,build_KeyField:t.build_KeyField,unit_KeyField:t.unit_KeyField,installment_KeyField:t.installment_KeyField,customer_KeyField:t.customer_KeyField,PDOCode:t.PDOCode,PDOValue:t.PDOValue,PDODocType:t.PDODocType,PDODocDate:t.PDODocDate,PDODocClassType:t.PDODocClassType,PDOPrintedCode:t.PDOPrintedCode,PDODocSecondPerson:t.PDODocSecondPerson,PDONotes:t.PDONotes})}readCustumer(t){this.tenantsService.getOneCustomer(t.value).subscribe(a=>{console.log("==tenantName:: "+a.CUSName),this.docData_Form.patchValue({PDODocSecondPerson:a.CUSName})}),this.getCustomerInstallmentsNotPayed(this.curCOMId,this.account.periorty,t.value)}getCustomerInstallmentsNotPayed(t,a,i){this.contractService.getInstallmentsPerCustomer_Payed(t,a,i,"F").subscribe(l=>{this.AllNotPayedInstallments=l,this.curOwnerId=l[0].owner_KeyField,this.curContract=l[0].contract_KeyField,this.curBranch=l[0].branch_KeyField,this.curBuild=l[0].build_KeyField,this.curUnit=l[0].unit_KeyField,this.curInstallment=l[0].id,this.curDocValue=l[0].INSValue,this.curDocPayedValue=l[0].INSPayedValue,null==this.curDocValue&&(this.curDocValue=0),null==this.curDocPayedValue&&(this.curDocPayedValue=0),this.docData_Form.patchValue({contract_KeyField:this.curContract,branch_KeyField:this.curBranch,build_KeyField:this.curBuild,unit_KeyField:this.curUnit,owner_KeyField:this.curOwnerId,installment_KeyField:this.curInstallment,PDOValue:this.curDocValue-this.curDocPayedValue})},l=>{this.snackBar.open("\u062e\u0637\u0623 \u0641\u064a \u0627\u0633\u062a\u0631\u062c\u0627\u0639 \u0627\u0644\u0623\u0642\u0633\u0627\u0637","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}getTenants(){this.AllTenants=null,this.tenantsService.getCustomers(this.curCOMId,this.account.periorty).subscribe(t=>this.AllTenants=t)}mappingFormValue_ToPayDocClass(){const t=new u.uU("en-GB").transform(this.docData_Form.value.PDODocDate,"dd/MM/yyyy");this.payDocForDisplay.id=this.docData_Form.value.id,this.payDocForDisplay.contract_KeyField=this.docData_Form.value.contract_KeyField,this.payDocForDisplay.branch_KeyField=this.docData_Form.value.branch_KeyField,this.payDocForDisplay.owner_KeyField=this.docData_Form.value.owner_KeyField,this.payDocForDisplay.build_KeyField=this.docData_Form.value.build_KeyField,this.payDocForDisplay.unit_KeyField=this.docData_Form.value.unit_KeyField,this.payDocForDisplay.installment_KeyField=this.docData_Form.value.installment_KeyField,this.payDocForDisplay.customer_KeyField=this.docData_Form.value.customer_KeyField,null!=this.docData_Form.value.PDODocDate&&(this.payDocForDisplay.PDODocDate=t),this.payDocForDisplay.PDOCode=this.docData_Form.value.PDOCode,this.payDocForDisplay.PDOValue=this.docData_Form.value.PDOValue,this.payDocForDisplay.PDODocType=this.docData_Form.value.PDODocType,this.payDocForDisplay.PDODocClassType=this.docData_Form.value.PDODocClassType,this.payDocForDisplay.PDOPrintedCode=this.docData_Form.value.PDOPrintedCode,this.payDocForDisplay.PDODocSecondPerson=this.docData_Form.value.PDODocSecondPerson,this.payDocForDisplay.PDONotes=this.docData_Form.value.PDONotes}manageInstallmetPayedValue(t,a,i,l,n){null==i&&(i=0),null==l&&(l=0),null==a&&(a=0);let c=+i+ +l;this.insStatus=c<a?"T":"P";let d={id:t,INSStatus:this.insStatus,INSPayedValue:c,INSPayDate:n,INSPersonPayName:this.payDocForDisplay.PDODocSecondPerson};console.log("===installData:: "+d),this.contractService.editInstallments(d).subscribe(p=>{console.log("==installment after Update:: "+p)},p=>{console.log(p)})}saveEditDocData(t){const a=new u.uU("en-GB").transform(this.docData_Form.value.PDODocDate,"dd/MM/yyyy");this.mappingFormValue_ToPayDocClass(),t?this.docsService.editDoc(this.payDocForDisplay).subscribe(i=>{let l={contract_KeyField:i.contract_KeyField,branch_KeyField:i.branch_KeyField,owner_KeyField:i.owner_KeyField,build_KeyField:i.build_KeyField,unit_KeyField:i.unit_KeyField,installment_KeyField:i.installment_KeyField,customer_KeyField:i.customer_KeyField,TSTCreditValue:i.PDOValue,TSTDebitValue:0,TSTDate:i.PDODocDate,TSTDescription:"\u0642\u064a\u0645\u0629 \u0633\u0646\u062f \u0627\u0644\u0642\u0628\u0636 \u0631\u0642\u0645 "+i.PDOCode,TSTSubject:"RECEIVABLE",TSTSubjectID:i.ID};this.contractService.deleteStatementForSubjectID(this.curCOMId,this.account.periorty,"RECEIVABLE",i.id).subscribe(n=>{this.contractService.addStatement(l).subscribe(c=>{})}),this.snackBar.open("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["payments/receivable-list"])},i=>{this.snackBar.open(" \u062e\u0637\u0623 \u0641\u064a \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}):this.docsService.addDoc(this.payDocForDisplay).subscribe(i=>{this.contractService.addStatement({contract_KeyField:i.contract_KeyField,branch_KeyField:i.branch_KeyField,owner_KeyField:i.owner_KeyField,build_KeyField:i.build_KeyField,unit_KeyField:i.unit_KeyField,installment_KeyField:i.installment_KeyField,customer_KeyField:i.customer_KeyField,TSTCreditValue:i.PDOValue,TSTDebitValue:0,TSTDate:i.PDODocDate,TSTDescription:"\u0642\u064a\u0645\u0629 \u0633\u0646\u062f \u0627\u0644\u0642\u0628\u0636 \u0631\u0642\u0645 "+i.PDOCode,TSTSubject:"RECEIVABLE",TSTSubjectID:i.ID}).subscribe(n=>{}),this.manageInstallmetPayedValue(this.curInstallment,this.curDocValue,this.curDocPayedValue,this.payDocForDisplay.PDOValue,a),this.snackBar.open("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["payments/receivable-list"])},i=>{this.snackBar.open(" \u062e\u0637\u0623 \u0641\u064a \u0627\u0636\u0627\u0641\u0647 \u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(t=>{this.errorRetrieveMsg=t}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(t=>{this.askToDeletedMsg=t}),this.translateService.get("MESSAGE.DELETED").subscribe(t=>{this.deletedMsg=t})}}_.\u0275fac=function(t){return new(t||_)(e.Y36(g.gz),e.Y36(L.C),e.Y36(Q.J),e.Y36(S.U),e.Y36(g.F0),e.Y36(K.ux),e.Y36(m),e.Y36(k.v),e.Y36(N.W),e.Y36(y.sK),e.Y36(r.qu))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-receivable-doc-dialog"]],decls:68,vars:38,consts:[[1,"p-2"],[4,"ngIf"],[1,"pt-3"],["autocomplete","off","fxLayout","row wrap",3,"formGroup","ngSubmit"],["fxFlex","100","fxFlex.gt-sm","40",1,"px-2"],["width","400","height","300","id","campanyLogo",3,"src"],["fxFlex","100","fxFlex.gt-sm","60",1,"px-2"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","25",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","PDOCode"],["fxFlex","100","fxFlex.gt-sm","75",1,"px-1"],["formControlName","customer_KeyField","id","oneCustomOpSel","required","",3,"placeholder","selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","PDODocDate","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["pdoDocDate",""],["fxFlex","100","fxFlex.gt-sm","50",1,"px-1"],["matInput","","formControlName","PDOValue","required",""],["matInput","","formControlName","PDOPrintedCode"],["fxFlex","100","fxFlex.gt-sm","100",1,"px-1"],["matInput","","formControlName","PDODocSecondPerson","required",""],["fxFlex","100",1,"px-1"],["matInput","","formControlName","PDONotes","rows","3"],["fxFlex","100",1,"mt-2","text-center","w-100"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title")(4,"h1"),e.YNc(5,le,3,3,"span",1),e.YNc(6,se,3,3,"span",1),e._uU(7),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"mat-card-content",2)(10,"form",3),e.NdJ("ngSubmit",function(){return a.saveEditDocData(a.payDocForDisplay.id)}),e.TgZ(11,"div",4),e._UZ(12,"img",5),e.qZA(),e.TgZ(13,"div",6)(14,"div",7)(15,"div",8)(16,"mat-form-field",9)(17,"mat-label"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"input",10),e.qZA()(),e.TgZ(21,"div",11)(22,"mat-form-field",9)(23,"mat-label"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"mat-select",12),e.NdJ("selectionChange",function(l){return a.readCustumer(l)}),e.ALo(27,"translate"),e.TgZ(28,"mat-option",13),e._uU(29,"-"),e.qZA(),e.YNc(30,ne,2,2,"mat-option",14),e.qZA()()(),e.TgZ(31,"div",8)(32,"mat-form-field",9)(33,"mat-label"),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"input",15)(37,"mat-datepicker-toggle",16)(38,"mat-datepicker",null,17),e.qZA()(),e.TgZ(40,"div",18)(41,"mat-form-field",9)(42,"mat-label"),e._uU(43),e.ALo(44,"translate"),e.qZA(),e._UZ(45,"input",19),e.qZA()(),e.TgZ(46,"div",8)(47,"mat-form-field",9)(48,"mat-label"),e._uU(49),e.ALo(50,"translate"),e.qZA(),e._UZ(51,"input",20),e.qZA()(),e.TgZ(52,"div",21)(53,"mat-form-field",9)(54,"mat-label"),e._uU(55),e.ALo(56,"translate"),e.qZA(),e._UZ(57,"input",22),e.qZA()(),e.TgZ(58,"div",23)(59,"mat-form-field",9)(60,"mat-label"),e._uU(61),e.ALo(62,"translate"),e.qZA(),e._UZ(63,"textarea",24),e.qZA()(),e.TgZ(64,"div",25)(65,"button",26),e._uU(66),e.ALo(67,"translate"),e.qZA()()()()()()()()),2&t){const i=e.MAs(39);e.xp6(5),e.Q6J("ngIf",!a.payDocForDisplay.id),e.xp6(1),e.Q6J("ngIf",a.payDocForDisplay.id),e.xp6(1),e.hij(" ",e.lcZ(8,18,"HTML.ReceivableDoc"),""),e.xp6(3),e.Q6J("formGroup",a.docData_Form),e.xp6(2),e.Q6J("src","assets/images/paymentDocs/receivable.png",e.LSH),e.xp6(6),e.Oqu(e.lcZ(19,20,"HTML.CODE")),e.xp6(6),e.hij(" ",e.lcZ(25,22,"HTML.TENANT"),""),e.xp6(2),e.s9C("placeholder",e.lcZ(27,24,"HTML.TENANT")),e.xp6(4),e.Q6J("ngForOf",a.AllTenants),e.xp6(4),e.Oqu(e.lcZ(35,26,"HTML.DocDate")),e.xp6(2),e.Q6J("matDatepicker",i),e.xp6(1),e.Q6J("for",i),e.xp6(6),e.Oqu(e.lcZ(44,28,"HTML.DocValue")),e.xp6(6),e.Oqu(e.lcZ(50,30,"HTML.DocPrintedNo")),e.xp6(6),e.Oqu(e.lcZ(56,32,"HTML.DocSecondPart_ReceivableDoc")),e.xp6(6),e.Oqu(e.lcZ(62,34,"HTML.Notes")),e.xp6(4),e.Q6J("disabled",!a.docData_Form.valid),e.xp6(1),e.Oqu(e.lcZ(67,36,"BTN.SAVE"))}},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.Q7,u.sg,u.O5,r.sg,r.u,D.xw,D.yH,W.ey,b.lW,h.a8,h.dn,h.dk,h.n5,f.Mq,f.hl,f.nW,X.Nt,F.KE,F.hX,F.R9,$.gD,y.X$]});var re=s(589),ce=s(9045);const de=function(o){return["/payments/payable-add/",o]};function ue(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._uU(2),e.qZA(),e.TgZ(3,"div",18),e._uU(4),e.qZA(),e.TgZ(5,"div",18),e._uU(6),e.qZA(),e.TgZ(7,"div",18),e._uU(8),e.qZA(),e.TgZ(9,"div",18)(10,"div",19)(11,"a",20),e.ALo(12,"translate"),e.TgZ(13,"mat-icon"),e._uU(14,"edit"),e.qZA()(),e.TgZ(15,"button",21),e.NdJ("click",function(){const n=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.removeDocument(n.id))}),e.ALo(16,"translate"),e.TgZ(17,"mat-icon"),e._uU(18,"delete"),e.qZA()()()()()}if(2&o){const a=t.$implicit;e.xp6(2),e.hij(" ",a.customer_Name," "),e.xp6(2),e.hij(" ",a.PDODocDate," "),e.xp6(2),e.hij(" ",a.PDOValue," "),e.xp6(2),e.hij(" ",a.PDOPrintedCode," "),e.xp6(3),e.s9C("matTooltip",e.lcZ(12,7,"BTN.EDIT")),e.Q6J("routerLink",e.VKq(11,de,a.id)),e.xp6(4),e.s9C("matTooltip",e.lcZ(16,9,"BTN.REMOVE"))}}function me(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",22)(1,"div",23)(2,"mat-card",24)(3,"pagination-controls",25),e.NdJ("pageChange",function(l){e.CHM(a);const n=e.oxw();return e.KtG(n.onPageChanged(l))}),e.qZA()()()()}}function pe(o,t){1&o&&(e.TgZ(0,"div",26),e._UZ(1,"mat-spinner",27),e.qZA())}const De=function(o,t){return{itemsPerPage:o,currentPage:t}};class A{constructor(t,a,i,l,n,c,d,p){this.appSettings=t,this.dialog=a,this.paymentService=i,this.router=l,this.global=n,this.localStore=c,this.translateService=d,this.snackBar=p,this.curCOMId=x.N.comid,this.account=new C.n,this.count=4,this.settings=this.appSettings.settings}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.prepareMsgLanguage(),this.getDocuments()):this.router.navigate(["/sign-in"])}getDocuments(){this.documentsAll=null,this.paymentService.getAllPayableDocuments(this.curCOMId,this.account.periorty).subscribe(t=>this.documentsAll=t)}removeDocument(t){this.dialog.open(V.$,{maxWidth:"400px",data:{title:this.deletedTitleMsg,message:this.askToDeletedMsg}}).afterClosed().subscribe(i=>{i&&this.paymentService.deleteDocument(t).subscribe(l=>this.getDocuments())})}onPageChanged(t){this.page=t,this.getDocuments(),window.scrollTo(0,0)}gotoNewDocument(){this.router.navigate(["/payments/payable-add/"])}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(t=>{this.errorRetrieveMsg=t}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(t=>{this.askToDeletedMsg=t}),this.translateService.get("MESSAGE.DELETED").subscribe(t=>{this.deletedMsg=t}),this.translateService.get("MESSAGE.ConfirmAction").subscribe(t=>{this.deletedTitleMsg=t})}}function he(o,t){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.ADD")))}function ge(o,t){1&o&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"BTN.EDIT")))}function ye(o,t){if(1&o&&(e.TgZ(0,"mat-option",13),e._uU(1),e.qZA()),2&o){const a=t.$implicit;e.Q6J("value",a.id),e.xp6(1),e.hij(" ",a.CUSName," ")}}A.\u0275fac=function(t){return new(t||A)(e.Y36(R.d),e.Y36(Y.uw),e.Y36(m),e.Y36(g.F0),e.Y36(S.U),e.Y36(L.C),e.Y36(y.sK),e.Y36(K.ux))},A.\u0275cmp=e.Xpm({type:A,selectors:[["app-payable-doc-list"]],features:[e._Bn([m])],decls:46,vars:24,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"p-2"],["fxLayout","row"],["appearance","legacy"],["controls","matButtonToggleGroup"],["value","add",3,"click"],["fxLayout","row","fxLayoutAlign","space-between center"],["appearance","legacy","value","list"],["viewType","matButtonToggleGroup"],["value","list"],["value","grid"],["fxLayout","row wrap","fxLayoutAlign","space-between center",1,"w-100","p-3"],[1,"mat-mdc-table","admin-table"],[1,"mat-mdc-header-row"],[1,"mat-mdc-header-cell"],["class","mat-mdc-row",4,"ngFor","ngForOf"],["fxLayout","row wrap",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center","class","user-spinner",4,"ngIf"],[1,"mat-mdc-row"],[1,"mat-mdc-cell"],[1,"p-2","actions"],["mat-mini-fab","","color","primary",3,"routerLink","matTooltip"],["mat-mini-fab","","color","warn",3,"matTooltip","click"],["fxLayout","row wrap"],["fxFlex","100",1,"p-2"],[1,"text-center"],["autoHide","true","maxSize","5",1,"product-pagination",3,"pageChange"],["fxLayout","column","fxLayoutAlign","center center",1,"user-spinner"],["color","primary"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-button-toggle-group",2,3)(4,"mat-button-toggle",4),e.NdJ("click",function(){return a.gotoNewDocument()}),e.TgZ(5,"mat-icon"),e._uU(6,"note_add"),e.qZA()()()(),e.TgZ(7,"div",5)(8,"mat-button-toggle-group",6,7)(10,"mat-button-toggle",8)(11,"mat-icon"),e._uU(12,"view_list"),e.qZA()(),e.TgZ(13,"mat-button-toggle",9)(14,"mat-icon"),e._uU(15,"view_module"),e.qZA()()()()(),e._UZ(16,"mat-divider"),e.TgZ(17,"mat-card")(18,"div",10)(19,"h2"),e._uU(20),e.ALo(21,"translate"),e.qZA()(),e._UZ(22,"mat-divider"),e.TgZ(23,"div",11)(24,"div",12)(25,"div",13)(26,"h2"),e._uU(27),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"div",13)(30,"h2"),e._uU(31),e.ALo(32,"translate"),e.qZA()(),e.TgZ(33,"div",13)(34,"h2"),e._uU(35),e.ALo(36,"translate"),e.qZA()(),e.TgZ(37,"div",13)(38,"h2"),e._uU(39),e.ALo(40,"translate"),e.qZA()(),e._UZ(41,"div",13),e.qZA(),e.YNc(42,ue,19,13,"div",14),e.ALo(43,"paginate"),e.qZA()(),e.YNc(44,me,4,0,"div",15),e.YNc(45,pe,2,0,"div",16)),2&t&&(e.xp6(20),e.Oqu(e.lcZ(21,8,"HTML.PayableDoc_List")),e.xp6(7),e.hij(" ",e.lcZ(28,10,"HTML.TENANT")," "),e.xp6(4),e.hij(" ",e.lcZ(32,12,"HTML.DocDate")," "),e.xp6(4),e.hij(" ",e.lcZ(36,14,"HTML.DocValue")," "),e.xp6(4),e.hij(" ",e.lcZ(40,16,"HTML.DocPrintedNo")," "),e.xp6(3),e.Q6J("ngForOf",e.xi3(43,18,a.documentsAll,e.WLB(21,De,a.count,a.page))),e.xp6(2),e.Q6J("ngIf",a.documentsAll),e.xp6(1),e.Q6J("ngIf",!a.documentsAll))},dependencies:[v.LS,u.sg,u.O5,g.rH,D.xw,D.Wh,D.yH,b.Tq,b.nh,U.A9,U.Yi,h.a8,H.Hw,B.d,J.Ou,j.gM,v._s,y.X$],styles:[".user-name{padding:0 12px;font-weight:400}.user-content{padding:10px}.user-content .user-img{position:relative}.user-content .user-img img{border-radius:50%;width:80px;height:80px}.user-content .user-img img.blocked{opacity:.5}.user-content .user-img .mat-icon{position:absolute;top:-8px;left:-8px;font-size:96px;height:96px;width:96px}.user-content .mat-mdc-slide-toggle{margin-top:15px}.user-content .user-details span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-content .user-details .mat-icon{padding:2px 10px}.user-content .user-details.blocked{opacity:.5}.user-search{width:0;overflow:hidden;transition:.3s}.user-search .mat-mdc-form-field{width:100%!important;text-align:center!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-infix{min-height:36px;padding:8px 0!important}.user-search .mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper{display:none}.user-search .mat-mdc-input-element{text-align:center}.user-search.show{width:100%;overflow:visible}.user-spinner{position:absolute;inset:0}.mat-mdc-card{overflow:hidden}\n"],encapsulation:2});class T{constructor(t,a,i,l,n,c,d,p,O,w,E){this.activatedRoute=t,this.localStore=a,this._companyService=i,this.global=l,this.router=n,this.snackBar=c,this.docsService=d,this.tenantsService=p,this.contractService=O,this.translateService=w,this.fb=E,this.curCOMId=x.N.comid,this.account=new C.n,this.AllTenants=[]}ngOnInit(){this.userSUb=this.global.user.subscribe(t=>{this.account=t}),this.localStore.getItem("token")&&this.localStore.getItem("account")?(this.global.me=JSON.parse(this.localStore.getItem("account")),this.getTenants(),this.sub=this.activatedRoute.params.subscribe(t=>{t.id?(this.id=+t.id,this.getDocById(this.id)):this.payDocForDisplay=new G,this.docData_Form=this.fb.group({id:null,PDOCode:null,PDOValue:{value:null,disabled:this.id},PDODocDate:null,PDODocType:"P",PDODocClassType:"H",PDOPrintedCode:null,PDODocSecondPerson:null,PDONotes:null,contract_KeyField:null,branch_KeyField:null,owner_KeyField:null,build_KeyField:null,unit_KeyField:null,installment_KeyField:null,customer_KeyField:null})})):this.router.navigate(["/sign-in"])}getDocById(t){this.docsService.getOneDocs(t).subscribe(a=>{this.fillForm(a),this.payDocForDisplay=a})}fillForm(t){null!=t.PDODocDate&&(this.s_docDate=t.PDODocDate),this.docData_Form.patchValue({id:t.id,contract_KeyField:t.contract_KeyField,branch_KeyField:t.branch_KeyField,owner_KeyField:t.owner_KeyField,build_KeyField:t.build_KeyField,unit_KeyField:t.unit_KeyField,installment_KeyField:t.installment_KeyField,customer_KeyField:t.customer_KeyField,PDOCode:t.PDOCode,PDOValue:t.PDOValue,PDODocType:t.PDODocType,PDODocDate:t.PDODocDate,PDODocClassType:t.PDODocClassType,PDOPrintedCode:t.PDOPrintedCode,PDODocSecondPerson:t.PDODocSecondPerson,PDONotes:t.PDONotes})}readCustumer(t){this.tenantsService.getOneCustomer(t.value).subscribe(a=>{this.docData_Form.patchValue({PDODocSecondPerson:a.CUSName,contract_KeyField:a.current_contract,branch_KeyField:a.current_branch,build_KeyField:a.current_building,unit_KeyField:a.current_unit,owner_KeyField:a.current_owner})})}getTenants(){this.AllTenants=null,this.tenantsService.getCustomers(this.curCOMId,this.account.periorty).subscribe(t=>this.AllTenants=t)}mappingFormValue_ToPayDocClass(){const t=new u.uU("en-GB").transform(this.docData_Form.value.PDODocDate,"dd/MM/yyyy");this.payDocForDisplay.id=this.docData_Form.value.id,this.payDocForDisplay.contract_KeyField=this.docData_Form.value.contract_KeyField,this.payDocForDisplay.branch_KeyField=this.docData_Form.value.branch_KeyField,this.payDocForDisplay.owner_KeyField=this.docData_Form.value.owner_KeyField,this.payDocForDisplay.build_KeyField=this.docData_Form.value.build_KeyField,this.payDocForDisplay.unit_KeyField=this.docData_Form.value.unit_KeyField,this.payDocForDisplay.installment_KeyField=this.docData_Form.value.installment_KeyField,this.payDocForDisplay.customer_KeyField=this.docData_Form.value.customer_KeyField,null!=this.docData_Form.value.PDODocDate&&(this.payDocForDisplay.PDODocDate=t),this.payDocForDisplay.PDOCode=this.docData_Form.value.PDOCode,this.payDocForDisplay.PDOValue=this.docData_Form.value.PDOValue,this.payDocForDisplay.PDODocType=this.docData_Form.value.PDODocType,this.payDocForDisplay.PDODocClassType=this.docData_Form.value.PDODocClassType,this.payDocForDisplay.PDOPrintedCode=this.docData_Form.value.PDOPrintedCode,this.payDocForDisplay.PDODocSecondPerson=this.docData_Form.value.PDODocSecondPerson,this.payDocForDisplay.PDONotes=this.docData_Form.value.PDONotes}saveEditDocData(t){this.mappingFormValue_ToPayDocClass(),t?this.docsService.editDoc(this.payDocForDisplay).subscribe(a=>{let i={contract_KeyField:a.contract_KeyField,branch_KeyField:a.branch_KeyField,owner_KeyField:a.owner_KeyField,build_KeyField:a.build_KeyField,unit_KeyField:a.unit_KeyField,installment_KeyField:null,customer_KeyField:a.customer_KeyField,TSTCreditValue:0,TSTDebitValue:a.PDOValue,TSTDate:a.PDODocDate,TSTDescription:"\u0642\u064a\u0645\u0629 \u0633\u0646\u062f \u0627\u0644\u0635\u0631\u0641 \u0631\u0642\u0645 "+a.PDOCode,TSTSubject:"PAYABLE",TSTSubjectID:a.ID};this.contractService.deleteStatementForSubjectID(this.curCOMId,this.account.periorty,"PAYABLE",a.id).subscribe(l=>{this.contractService.addStatement(i).subscribe(n=>{})}),this.snackBar.open("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["payments/payable-list"])},a=>{this.snackBar.open(" \u062e\u0637\u0623 \u0641\u064a \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})}):this.docsService.addDoc(this.payDocForDisplay).subscribe(a=>{this.contractService.addStatement({contract_KeyField:a.contract_KeyField,branch_KeyField:a.branch_KeyField,owner_KeyField:a.owner_KeyField,build_KeyField:a.build_KeyField,unit_KeyField:a.unit_KeyField,installment_KeyField:null,customer_KeyField:a.customer_KeyField,TSTCreditValue:0,TSTDebitValue:a.PDOValue,TSTDate:a.PDODocDate,TSTDescription:"\u0642\u064a\u0645\u0629 \u0633\u0646\u062f \u0627\u0644\u0635\u0631\u0641 \u0631\u0642\u0645 "+a.PDOCode,TSTSubject:"PAYABLE",TSTSubjectID:a.ID}).subscribe(l=>{}),this.snackBar.open("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"success",verticalPosition:"top",duration:3e3}),this.router.navigate(["payments/payable-list"])},a=>{this.snackBar.open(" \u062e\u0637\u0623 \u0641\u064a \u0627\u0636\u0627\u0641\u0647 \u0645\u0633\u062a\u0646\u062f","\xd7",{panelClass:"error",verticalPosition:"top",duration:3e3})})}prepareMsgLanguage(){this.translateService.get("MESSAGE.RETRIEVE_ERROR").subscribe(t=>{this.errorRetrieveMsg=t}),this.translateService.get("MESSAGE.SURE_DELETE").subscribe(t=>{this.askToDeletedMsg=t}),this.translateService.get("MESSAGE.DELETED").subscribe(t=>{this.deletedMsg=t})}}T.\u0275fac=function(t){return new(t||T)(e.Y36(g.gz),e.Y36(L.C),e.Y36(Q.J),e.Y36(S.U),e.Y36(g.F0),e.Y36(K.ux),e.Y36(m),e.Y36(k.v),e.Y36(N.W),e.Y36(y.sK),e.Y36(r.qu))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-payable-doc-dialog"]],decls:68,vars:38,consts:[[1,"p-2"],[4,"ngIf"],[1,"pt-3"],["autocomplete","off","fxLayout","row wrap",3,"formGroup","ngSubmit"],["fxFlex","100","fxFlex.gt-sm","40",1,"px-2"],["width","400","height","300","id","campanyLogo",3,"src"],["fxFlex","100","fxFlex.gt-sm","60",1,"px-2"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-sm","25",1,"px-1"],["appearance","outline",1,"w-100"],["matInput","","formControlName","PDOCode"],["fxFlex","100","fxFlex.gt-sm","75",1,"px-1"],["formControlName","customer_KeyField","id","oneCustomOpSel",3,"placeholder","selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","PDODocDate","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["pdoDocDate",""],["fxFlex","100","fxFlex.gt-sm","50",1,"px-1"],["matInput","","formControlName","PDOValue","required",""],["matInput","","formControlName","PDOPrintedCode"],["fxFlex","100","fxFlex.gt-sm","100",1,"px-1"],["matInput","","formControlName","PDODocSecondPerson","required",""],["fxFlex","100",1,"px-1"],["matInput","","formControlName","PDONotes","rows","3"],["fxFlex","100",1,"mt-2","text-center","w-100"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title")(4,"h1"),e.YNc(5,he,3,3,"span",1),e.YNc(6,ge,3,3,"span",1),e._uU(7),e.ALo(8,"translate"),e.qZA()()(),e.TgZ(9,"mat-card-content",2)(10,"form",3),e.NdJ("ngSubmit",function(){return a.saveEditDocData(a.payDocForDisplay.id)}),e.TgZ(11,"div",4),e._UZ(12,"img",5),e.qZA(),e.TgZ(13,"div",6)(14,"div",7)(15,"div",8)(16,"mat-form-field",9)(17,"mat-label"),e._uU(18),e.ALo(19,"translate"),e.qZA(),e._UZ(20,"input",10),e.qZA()(),e.TgZ(21,"div",11)(22,"mat-form-field",9)(23,"mat-label"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"mat-select",12),e.NdJ("selectionChange",function(l){return a.readCustumer(l)}),e.ALo(27,"translate"),e.TgZ(28,"mat-option",13),e._uU(29,"-"),e.qZA(),e.YNc(30,ye,2,2,"mat-option",14),e.qZA()()(),e.TgZ(31,"div",8)(32,"mat-form-field",9)(33,"mat-label"),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"input",15)(37,"mat-datepicker-toggle",16)(38,"mat-datepicker",null,17),e.qZA()(),e.TgZ(40,"div",18)(41,"mat-form-field",9)(42,"mat-label"),e._uU(43),e.ALo(44,"translate"),e.qZA(),e._UZ(45,"input",19),e.qZA()(),e.TgZ(46,"div",8)(47,"mat-form-field",9)(48,"mat-label"),e._uU(49),e.ALo(50,"translate"),e.qZA(),e._UZ(51,"input",20),e.qZA()(),e.TgZ(52,"div",21)(53,"mat-form-field",9)(54,"mat-label"),e._uU(55),e.ALo(56,"translate"),e.qZA(),e._UZ(57,"input",22),e.qZA()(),e.TgZ(58,"div",23)(59,"mat-form-field",9)(60,"mat-label"),e._uU(61),e.ALo(62,"translate"),e.qZA(),e._UZ(63,"textarea",24),e.qZA()(),e.TgZ(64,"div",25)(65,"button",26),e._uU(66),e.ALo(67,"translate"),e.qZA()()()()()()()()),2&t){const i=e.MAs(39);e.xp6(5),e.Q6J("ngIf",!a.payDocForDisplay.id),e.xp6(1),e.Q6J("ngIf",a.payDocForDisplay.id),e.xp6(1),e.hij(" ",e.lcZ(8,18,"HTML.PayableDoc"),""),e.xp6(3),e.Q6J("formGroup",a.docData_Form),e.xp6(2),e.Q6J("src","assets/images/paymentDocs/payable.png",e.LSH),e.xp6(6),e.Oqu(e.lcZ(19,20,"HTML.CODE")),e.xp6(6),e.hij(" ",e.lcZ(25,22,"HTML.TENANT"),""),e.xp6(2),e.s9C("placeholder",e.lcZ(27,24,"HTML.TENANT")),e.xp6(4),e.Q6J("ngForOf",a.AllTenants),e.xp6(4),e.Oqu(e.lcZ(35,26,"HTML.DocDate")),e.xp6(2),e.Q6J("matDatepicker",i),e.xp6(1),e.Q6J("for",i),e.xp6(6),e.Oqu(e.lcZ(44,28,"HTML.DocValue")),e.xp6(6),e.Oqu(e.lcZ(50,30,"HTML.DocPrintedNo")),e.xp6(6),e.Oqu(e.lcZ(56,32,"HTML.DocSecondPart_PayableDoc")),e.xp6(6),e.Oqu(e.lcZ(62,34,"HTML.Notes")),e.xp6(4),e.Q6J("disabled",!a.docData_Form.valid),e.xp6(1),e.Oqu(e.lcZ(67,36,"BTN.SAVE"))}},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.Q7,u.sg,u.O5,r.sg,r.u,D.xw,D.yH,W.ey,b.lW,h.a8,h.dn,h.dk,h.n5,f.Mq,f.hl,f.nW,X.Nt,F.KE,F.hX,F.R9,$.gD,y.X$]});const z=[{path:"",redirectTo:"receivable-list",pathMatch:"full"},{path:"receivable-list",component:Z,data:{breadcrumb:"ReceiptVouchers"}},{path:"receivable-add/:id",component:_,data:{breadcrumb:"EditReceiptVoucher"}},{path:"receivable-add",component:_,data:{breadcrumb:"AddReceiptVoucher"}},{path:"payable-list",component:A,data:{breadcrumb:"PaymentVouchers"}},{path:"payable-add/:id",component:T,data:{breadcrumb:"EditPaymentVoucher"}},{path:"payable-add",component:T,data:{breadcrumb:"AddPaymentVoucher"}}];class P{}P.\u0275fac=function(t){return new(t||P)},P.\u0275mod=e.oAB({type:P}),P.\u0275inj=e.cJS({imports:[q.JF,r.u5,v.JX,ce.D,u.ez,g.Bz.forChild(z),r.UX,re.m,v.JX]})}}]);