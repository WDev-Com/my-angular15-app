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

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, AdminDashboardComponent],
  /** 
   * Add LayoutModule to imports to use LayoutComponent and its child components 
   * The  LayoutModule is custom module created to encapsulate layout-related components
  */
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, LayoutModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
