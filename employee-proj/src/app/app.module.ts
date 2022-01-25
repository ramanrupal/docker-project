import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ShowEmpComponent } from './show-emp/show-emp.component';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import {ReactiveFormsModule,FormsModule,Validators} from '@angular/forms';
import {UpdateEmpComponent} from './update-emp/update-emp.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ShowEmpComponent,
    UpdateEmpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

