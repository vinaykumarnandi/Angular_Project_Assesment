import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserModule } from '../user/user.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UserModule,
    UserRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule

  ],
  exports:[
    LayoutRoutingModule,
    LoginLayoutComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    // MatToolbarModule,
    // MatCardModule,
    // MatButtonModule,
    // MatDividerModule,
    // MatInputModule,
    // MatSidenavModule,
    // MatMenuModule,
    // MatListModule

  ]
})
export class LayoutModule { }
