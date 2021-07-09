import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailPostComponent} from "./detail-post/detail-post.component";

const routes: Routes = [
  {
    path: 'show/:id',
    component: DetailPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
