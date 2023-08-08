import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivosComponent } from './components/reactivos/reactivos.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  {path: "home" , component:HomeComponent},
  {path: "reactivos" , component:ReactivosComponent},
  {path: "template" , component:TemplateComponent},
  
  {path: "" , pathMatch: 'full',redirectTo: "home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
