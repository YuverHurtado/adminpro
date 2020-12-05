import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutaas
import { APP_ROUTES } from './app.routes';

//module
import { PegesModule } from './pages/peges.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PegesComponent } from './pages/peges.component';
import { RegisterComponent } from './login/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //NopagefoundComponent,
   // PegesComponent,
   // DashboardComponent,
   // ProgressComponent,
    //Graficas1Component,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent,
    //PegesComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    PegesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
