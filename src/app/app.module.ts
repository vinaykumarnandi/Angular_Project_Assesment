import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectService } from './modules/project/services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './modules/user/services/user.service';
import { TaskService } from './modules/task/services/task.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [ProjectService,UserService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
