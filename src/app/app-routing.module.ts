import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewAllUsersComponent } from './admin/view-all-users/view-all-users.component';
import { ViewBidsComponent } from './common/view-bids/view-bids.component';
import { CreateUpdateAuctionComponent } from './common/create-update-auction/create-update-auction.component';

const routes: Routes = [
  // Public routes
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Layout-protected routes
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin/dashboard',
        component: AdminDashboardComponent
      },
       {
        path: 'admin/view-users',
        component: ViewAllUsersComponent
      },
      {
        path: 'admin/view-bids',
        component: ViewBidsComponent
      },
      {
        path: 'admin/create-auction',
        component: CreateUpdateAuctionComponent
      }
     ]
  },

  // Redirect empty path to login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Catch-all
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
