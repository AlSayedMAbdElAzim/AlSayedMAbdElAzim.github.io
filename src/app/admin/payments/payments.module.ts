import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivableDocListComponent } from './receivable-doc-list/receivable-doc-list.component';
import { ReceivableDocDialogComponent } from './receivable-doc-dialog/receivable-doc-dialog.component';
// ===========================================================
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';


export const routes: Routes = [
  { path: '', redirectTo: 'receivable-list', pathMatch: 'full'},
  { path: 'receivable-list', component: ReceivableDocListComponent, data: { breadcrumb: 'Receipt Vouchers' } },

  { path: 'receivable-add/:id', component: ReceivableDocDialogComponent, data: { breadcrumb: 'Edit Receipt Voucher' } },
  { path: 'receivable-add', component: ReceivableDocDialogComponent, data: { breadcrumb: 'Add Receipt Voucher' } },

];

@NgModule({
  declarations: [
    ReceivableDocListComponent,
    ReceivableDocDialogComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    // // --------------------------------------
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class PaymentsModule { }
