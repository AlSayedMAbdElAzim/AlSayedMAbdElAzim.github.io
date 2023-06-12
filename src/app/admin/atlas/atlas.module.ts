import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { InputFileModule } from 'ngx-input-file-uploader';
import { CompanyInfoComponent } from './company/company-info/company-info.component';

import { TranslateService } from '@ngx-translate/core';
import { marker as _ } from "@biesbjerg/ngx-translate-extract-marker";

import { CodeTableTreeConstants } from 'src/app/constants/app-constant';

import { CodetabletreeListComponent } from './codeTableTree/codetabletree-list/codetabletree-list.component';
import { CodetabletreeDialogComponent } from './codeTableTree/codetabletree-dialog/codetabletree-dialog.component';
import { TipsListComponent } from './tips/tips-list/tips-list.component';


// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { ProductZoomComponent } from './product-detail/product-zoom/product-zoom.component';
// import { AddProductComponent } from './add-product/add-product.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { CategoryDialogComponent } from './categories/category-dialog/category-dialog.component';

export const routes: Routes = [ // {{ 'TS.COMPANYDATA' | translate }}
  // { path: '', redirectTo: 'product-list', pathMatch: 'full'},

  { path: 'company', component: CompanyInfoComponent, data: { breadcrumb: 'Company' } },
  { path: 'codetree/country', component: CodetabletreeListComponent, data: { breadcrumb: 'Countries', parentCTT: String(new CodeTableTreeConstants().Countries), relatedCTT: null } },
  { path: 'codetree/govern', component: CodetabletreeListComponent, data: { breadcrumb: 'Governorates', parentCTT: String(new CodeTableTreeConstants().Governorates), relatedCTT: String(new CodeTableTreeConstants().Countries) } },
  { path: 'codetree/city', component: CodetabletreeListComponent, data: { breadcrumb: 'Cities', parentCTT: String(new CodeTableTreeConstants().City), relatedCTT: String(new CodeTableTreeConstants().Governorates) } },
  { path: 'codetree/region', component: CodetabletreeListComponent, data: { breadcrumb: 'Regions', parentCTT: String(new CodeTableTreeConstants().Regions), relatedCTT: String(new CodeTableTreeConstants().City) } },
  { path: 'codetree/features', component: CodetabletreeListComponent, data: { breadcrumb: 'Property Features', parentCTT: String(new CodeTableTreeConstants().BuildingFeatures) } },
  { path: 'codetree/ownershipdoc', component: CodetabletreeListComponent, data: { breadcrumb: 'Types of Ownership Doc', parentCTT: String(new CodeTableTreeConstants().OwnershipDocTypes) } },
  { path: 'tips', component: TipsListComponent, data: { breadcrumb: 'Tips' } },

  // { path: 'codetree/:type', component: CodetabletreeListComponent, data: { breadcrumb: 'Application Codes' } },

  // { path: 'product-detail', component: ProductDetailComponent, data: { breadcrumb: 'Product Detail' } },
  // { path: 'product-detail/:id', component: ProductDetailComponent, data: { breadcrumb: 'Product Detail' } },
  // { path: 'add-product', component: AddProductComponent, data: { breadcrumb: 'Add Product' } },
  // { path: 'add-product/:id', component: AddProductComponent, data: { breadcrumb: 'Edit Product' } },
];

@NgModule({
  declarations: [
    CompanyInfoComponent,
    CodetabletreeListComponent,
    CodetabletreeDialogComponent,
    TipsListComponent

    // ProductZoomComponent,
    // AddProductComponent,
    // CategoriesComponent,
    // CategoryDialogComponent


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    SwiperModule,
    InputFileModule
  ]
})

export class AtlasModule {
  constructor(
    public translateService: TranslateService ) { }
    companyDataMsg ;
    ngOnInit() {
      this.prepareMsgLanguage() ;
    }
    // ==================================================================
  prepareMsgLanguage(){
    this.translateService.get('TS.COMPANYDATA', ).subscribe((res: string) => {
      this.companyDataMsg = res ;
      });

  }
  // ==================================================================
 }
