import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutModule } from './layout/layout.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllUsersComponent } from './admin/view-all-users/view-all-users.component';
import { ViewBidsComponent } from './common/view-bids/view-bids.component';
import { CreateUpdateAuctionComponent } from './common/create-update-auction/create-update-auction.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, AdminDashboardComponent, ViewAllUsersComponent, ViewBidsComponent, CreateUpdateAuctionComponent],
  /** 
   * Add LayoutModule to imports to use LayoutComponent and its child components 
   * The  LayoutModule is custom module created to encapsulate layout-related components
  */
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, LayoutModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
