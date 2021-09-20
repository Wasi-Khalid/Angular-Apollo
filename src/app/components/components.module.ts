import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrandlistComponent } from './brandlist/brandlist.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "../app-routing.module";
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { FormsModule } from "@angular/forms";
import { CityAreasComponent } from './city-areas/city-areas.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerModule } from "ngx-spinner";



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
        NgbModule,
        AppRoutingModule,
        FormsModule,
        NgxSpinnerModule
    ],
})
export class ComponentsModule { }
