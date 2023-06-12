import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingListComponent } from './building/building-list/building-list.component';
import { BuildingDialogComponent } from './building/building-dialog/building-dialog.component';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { UnitDialogComponent } from './unit/unit-dialog/unit-dialog.component';
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


export const routes: Routes = [
  { path: '', redirectTo: 'building', pathMatch: 'full'},
  { path: 'building', component: BuildingListComponent, pathMatch: 'full', data: { breadcrumb: 'Building' } },
  { path: 'building-add/:id', component: BuildingDialogComponent, data: { breadcrumb: 'Edit Building' } },
  { path: 'building-add', component: BuildingDialogComponent, data: { breadcrumb: 'Add Building' } },

  { path: 'unit', component: UnitListComponent, pathMatch: 'full', data: { breadcrumb: 'Units' } },
  { path: 'unit-add/:id', component: UnitDialogComponent, data: { breadcrumb: 'Edit Unit' } },
  { path: 'unit-add', component: UnitDialogComponent, data: { breadcrumb: 'Add Unit' } }
];


@NgModule({
  declarations: [
    BuildingListComponent,
    BuildingDialogComponent,
    UnitListComponent,
    UnitDialogComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    SwiperModule,
    InputFileModule
  ]
})
export class UnitsModule { }
