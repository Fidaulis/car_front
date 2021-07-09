import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from "./client.component";

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./car/car.module').then(car => car.CarModule)
      },
      {
        path: 'posts/',
        loadChildren: () => import('./posts/posts.module').then(posts => posts.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
