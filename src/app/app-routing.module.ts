import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then(client => client.ClientModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(login => login.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
