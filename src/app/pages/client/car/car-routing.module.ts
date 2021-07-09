import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {ListComponent} from "./list/list.component";
import {DetailPostComponent} from "../posts/detail-post/detail-post.component";
import {ShowCommentPostComponent} from "../../../shared/components/post/show-comment-post/show-comment-post.component";
import {AuthGuard} from "../../../Utils/guard/auth.guard";

const routes: Routes = [
  {
    path: 'car',
    component: ListComponent,
  },
  {
    path: 'car/show/:id',
    component: DetailsComponent
  },
  {
    path: 'posts/show/:id',
    component: DetailPostComponent
  },
  {
    path: 'posts/show/:id/comments',
    component: ShowCommentPostComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
