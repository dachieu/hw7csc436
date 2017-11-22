import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';


import {JsonpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TwoComponent } from './two/two.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { WikipediaSearchComponent } from './wikipedia-search.component'
import { WikipediaService } from './wikipedia.service';

import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';


const routes: Routes = [
// basic routes{ path: '', redirectTo: 'home', pathMatch: 'full' },{ path: 'settings', component: SettingsComponent },{ path: 'dashboard', component: DashboardComponent },{ path: 'search', component: WikipediaSearchComponent },// authentication demo
  { path: 'login', component: LoginComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [ LoggedInGuard ]
  },


//n nested routes
//{//path: 'products',//component: ProductsComponent,
//children: childRoutes//}

];





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TwoComponent,
    DashboardComponent,
    SettingsComponent,
WikipediaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  RouterModule.forRoot(routes),
    JsonpModule,
ReactiveFormsModule

  ],
  providers: [AUTH_PROVIDERS,
    LoggedInGuard,WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
