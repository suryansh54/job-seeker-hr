import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// HR component
import { CreateHrComponent } from './create-hr/create-hr.component';
import { ListHrComponent } from './list-hr/list-hr.component';
import { LoginComponent } from './login/login.component';

// Auth services
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: ListHrComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: 'create-hr',
    component: CreateHrComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: 'edit-hr/:id',
    component: CreateHrComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
