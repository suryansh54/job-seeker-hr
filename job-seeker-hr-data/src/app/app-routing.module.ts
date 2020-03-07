import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// HR component
import { CreateHrComponent } from './create-hr/create-hr.component';
import { ListHrComponent } from './list-hr/list-hr.component';

const routes: Routes = [
  {
    path:'',
    component: ListHrComponent
  }, 
  {
    path: 'create-hr',
    component: CreateHrComponent
  }, 
  {
    path: 'edit-hr/:id',
    component: CreateHrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
