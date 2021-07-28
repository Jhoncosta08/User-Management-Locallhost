import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './usuarios/clientes/clientes.component';
import { AdminComponent } from './usuarios/admin/admin.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import {SidenavComponent} from './templates/sidenav/sidenav.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    LayoutComponent,
    SidenavComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
