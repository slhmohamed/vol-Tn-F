import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { AddCategorieComponent } from './page/add-categorie/add-categorie.component';
import { CommonModule } from '@angular/common';
import { ListeCategorieComponent } from './page/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './page/update-categorie/update-categorie.component';
import { ToastrModule } from 'ngx-toastr';
import { AddMatrialComponent } from './page/add-matrial/add-matrial.component';
import { ListMatrialComponent } from './page/list-matrial/list-matrial.component';
import { UpdateMatrialComponent } from './page/update-matrial/update-matrial.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategorieComponent,
    ListeCategorieComponent,
    UpdateCategorieComponent,
    AddMatrialComponent,
    ListMatrialComponent,
    UpdateMatrialComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
     
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
