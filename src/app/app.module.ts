import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ReactivosComponent } from './components/reactivos/reactivos.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component'; // Import ReactiveFormsModule
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    ReactivosComponent,
    TemplateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
