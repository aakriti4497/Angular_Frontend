import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ConfigureComponent } from './admin/configure/configure.component';
import { ProjectallocationComponent } from './admin/projectallocation/projectallocation.component';
import { DeodashboardComponent } from './deo/deodashboard/deodashboard.component';


const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'banner',component:BannerComponent},
  {path:'LoginForm',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'admin',component:DashboardComponent},
  {path:'configure',component:ConfigureComponent},
  {path:'allocate',component:ProjectallocationComponent},
  {path:'deo',component:DeodashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  HeaderComponent,BannerComponent,FooterComponent,DashboardComponent,ConfigureComponent,ProjectallocationComponent,DeodashboardComponent
]
