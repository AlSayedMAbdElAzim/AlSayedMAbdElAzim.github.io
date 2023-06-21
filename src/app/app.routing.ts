import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './admin/components/menu/menu.component';
import { UserMenuComponent } from './admin/components/user-menu/user-menu.component';
import { FullScreenComponent } from './admin/components/fullscreen/fullscreen.component';
import { MessagesComponent } from './admin/components/messages/messages.component';
import { BreadcrumbComponent } from './admin/components/breadcrumb/breadcrumb.component';
import { InputFileConfig, InputFileModule } from 'ngx-input-file-uploader';
const config: InputFileConfig = {
  fileAccept: '*'
};

export const routes: Routes = [
    {
      path: '',
      component: AdminComponent, children: [
        { path: 'dashboard', loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule), data: { breadcrumb: 'Sign In ' } },
        { path: 'atlas', loadChildren: () => import('./admin/atlas/atlas.module').then(m => m.AtlasModule) },
        { path: 'contracts', loadChildren: () => import('./admin/contracts/contracts.module').then(m => m.ContractsModule) },
        { path: 'units', loadChildren: () => import('./admin/units/units.module').then(m => m.UnitsModule) },
        { path: 'hr', loadChildren: () => import('./admin/employees/employees.module').then(m => m.EmployeesModule) },
        { path: 'products', loadChildren: () => import('./admin/products/products.module').then(m => m.ProductsModule) },
        { path: 'sales', loadChildren: () => import('./admin/sales/sales.module').then(m => m.SalesModule) },
        { path: 'users', loadChildren: () => import('./admin/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
        { path: 'customers', loadChildren: () => import('./admin/customers/customers.module').then(m => m.CustomersModule), data: { breadcrumb: 'Customers' } },
        { path: 'coupons', loadChildren: () => import('./admin/coupons/coupons.module').then(m => m.CouponsModule), data: { breadcrumb: 'Coupons' } },
        { path: 'withdrawal', loadChildren: () => import('./admin/withdrawal/withdrawal.module').then(m => m.WithdrawalModule), data: { breadcrumb: 'Withdrawal' } },
        { path: 'analytics', loadChildren: () => import('./admin/analytics/analytics.module').then(m => m.AnalyticsModule), data: { breadcrumb: 'Analytics' } },
        { path: 'refund', loadChildren: () => import('./admin/refund/refund.module').then(m => m.RefundModule), data: { breadcrumb: 'Refund' } },
        { path: 'followers', loadChildren: () => import('./admin/followers/followers.module').then(m => m.FollowersModule), data: { breadcrumb: 'Followers' } },
        { path: 'support', loadChildren: () => import('./admin/support/support.module').then(m => m.SupportModule), data: { breadcrumb: 'Support' } },
        { path: 'reviews', loadChildren: () => import('./admin/reviews/reviews.module').then(m => m.ReviewsModule), data: { breadcrumb: 'Reviews' } }
      ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    UserMenuComponent,
    FullScreenComponent,
    MessagesComponent,
    BreadcrumbComponent
  ],
    imports: [
      CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule.forRoot(config),
        RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabledBlocking'
})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

// -------------------------------------------------------------------
// ===================================================================

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

// import { PagesComponent } from './pages/pages.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';

// export const routes: Routes = [
//     {
//         path: '',
//         component: PagesComponent, children: [
//             { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
//             { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule), data: { breadcrumb: 'Account Settings' } },
//             { path: 'compare', loadChildren: () => import('./pages/compare/compare.module').then(m => m.CompareModule), data: { breadcrumb: 'Compare' } },
//             { path: 'wishlist', loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: 'Wishlist' } },
//             { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: 'Cart' } },
//             { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: 'Checkout' } },
//             { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact' } },
//             { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule), data: { breadcrumb: 'Sign In ' } },
//             { path: 'brands', loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule), data: { breadcrumb: 'Brands' } },
//             { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), data: { breadcrumb: 'All Products' } }
//         ]
//     },
//     { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
//     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
//     { path: '**', component: NotFoundComponent }
// ];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes, {
//     preloadingStrategy: PreloadAllModules,
//     initialNavigation: 'enabledBlocking'
// })
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class AppRoutingModule { }
