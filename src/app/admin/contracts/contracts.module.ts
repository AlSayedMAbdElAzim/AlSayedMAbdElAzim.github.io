import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersDialogComponent } from './customers/customers-dialog/customers-dialog.component';
import { ContractListComponent } from './rentContracts/contract-list/contract-list.component';
import { ContractDialogComponent } from './rentContracts/contract-dialog/contract-dialog.component';
// -------------------------------------------------
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CustomersDetailsComponent } from 'src/app/admin/contracts/customers/customers-details/customers-details.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { InputFileModule } from 'ngx-input-file-uploader';


// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MomentDateModule } from '@angular/material-moment-adapter';

// export const MY_FORMATS = {
//   parse: {
//       dateInput: 'LL'
//   },
//   display: {
//       dateInput: 'YYYY-MM-DD',
//       monthYearLabel: 'YYYY',
//       dateA11yLabel: 'LL',
//       monthYearA11yLabel: 'YYYY'
//   }
// };

export const routes: Routes = [
  { path: '', redirectTo: 'tenant-list', pathMatch: 'full'},
  { path: 'tenant-list', component: CustomersListComponent, data: { breadcrumb: 'Tenants' } },

  { path: 'tenant-add/:id', component: CustomersDetailsComponent, data: { breadcrumb: 'Edit Tenant' } },
  { path: 'tenant-add', component: CustomersDetailsComponent, data: { breadcrumb: 'Add Tenant' } },

  { path: 'contract-list', component: ContractListComponent, data: { breadcrumb: 'Rent Contracts' } },
  { path: 'contract-add/:id', component: ContractDialogComponent, data: { breadcrumb: 'Edit Contract' } },
  { path: 'contract-add', component: ContractDialogComponent, data: { breadcrumb: 'Add Contract' } }

];

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersDialogComponent,
    CustomersDetailsComponent,
    ContractListComponent,
    ContractDialogComponent
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
    SwiperModule,
    InputFileModule
    // ,MatDatepickerModule,
    // MatNativeDateModule,
    // MomentDateModule
  ]
})
export class ContractsModule { }
