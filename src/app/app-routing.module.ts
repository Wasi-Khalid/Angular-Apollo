import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DefaultComponent } from "./default/default.component";
import {BrandlistComponent} from "./components/brandlist/brandlist.component";

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
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
