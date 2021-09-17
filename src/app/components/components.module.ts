import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrandlistComponent } from './brandlist/brandlist.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "../app-routing.module";
import { RegisterDeviceComponent } from './register-device/register-device.component';
import {FormsModule} from "@angular/forms";
import { CityAreasComponent } from './city-areas/city-areas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BrandlistComponent,
    LoginComponent,
    RegisterDeviceComponent,
    CityAreasComponent,
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ]
})
export class ComponentsModule { }
