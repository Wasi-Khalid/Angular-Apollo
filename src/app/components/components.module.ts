import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrandlistComponent } from './brandlist/brandlist.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BrandlistComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
