import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeodashboardComponent } from './deo/deodashboard/deodashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DeodashboardComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
