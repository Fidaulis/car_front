import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { DetailComponent } from './detail/detail.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import {SharedModule} from "../../../shared/shared.module";
import { CommentPostComponent } from './comment-post/comment-post.component';


@NgModule({
  declarations: [DetailComponent, DetailPostComponent, CommentPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
