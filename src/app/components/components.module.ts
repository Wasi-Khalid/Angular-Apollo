import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrandlistComponent } from './brandlist/brandlist.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "../app-routing.module";
import { RegisterDeviceComponent } from './register-device/register-device.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BrandlistComponent,
    LoginComponent,
    RegisterDeviceComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
