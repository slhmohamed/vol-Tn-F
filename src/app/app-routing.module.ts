import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './page/add-categorie/add-categorie.component';
import { AddMatrialComponent } from './page/add-matrial/add-matrial.component';
import { ListMatrialComponent } from './page/list-matrial/list-matrial.component';
import { ListeCategorieComponent } from './page/liste-categorie/liste-categorie.component';
import { UpdateCategorieComponent } from './page/update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './page/update-matrial/update-matrial.component';
 

const routes: Routes = [
   
 {
   path:'add-categorie',component:AddCategorieComponent
 }, 
 {
  path:'add-matrial',component:AddMatrialComponent
}, 
 {
  path:'liste-categorie',component:ListeCategorieComponent
}, 
{
  path:'update-categorie/:id',component:UpdateCategorieComponent
}, 
{
  path:'liste-matrial',component:ListMatrialComponent
}, 
{
  path:'update-matrial/:id',component:UpdateMatrialComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }