import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';

export const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent, pathMatch: 'full', data: { breadcrumb: 'Employee' } },
];



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(UsersData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule
  ]
})
export class EmployeesModule { }
