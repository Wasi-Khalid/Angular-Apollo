import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { AppRoutingModule } from "../app-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";



@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatSidenavModule,

    ]
})
export class DefaultModule { }
