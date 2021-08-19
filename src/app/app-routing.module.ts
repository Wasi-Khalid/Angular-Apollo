import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultComponent } from "./default/default.component";
import { BrandlistComponent } from "./components/brandlist/brandlist.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guards/AuthGuard/auth.guard";
import { RegisterDeviceComponent } from "./components/register-device/register-device.component";

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children:[{
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },{
    path:'dashboard',
    component: DashboardComponent
  },{
    path:'brandlist',
    component: BrandlistComponent
  },{
    path:'register-device',
    component: RegisterDeviceComponent
  }]
},{
  path:'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
