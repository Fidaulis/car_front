import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './components/Car/list-car/list-car.component';
import {TruncatePipe} from "../Utils/pipe/truncate.pipe";
import {ClientRoutingModule} from "../pages/client/client-routing.module";
import { ShowCarComponent } from './components/Car/show-car/show-car.component';
import { ListPostsComponent } from './components/post/list-posts/list-posts.component';
import {NgxPaginationModule} from "ngx-pagination";
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { ShowCommentPostComponent } from './components/post/show-comment-post/show-comment-post.component';



@NgModule({
  declarations: [ListCarComponent, TruncatePipe, ShowCarComponent, ListPostsComponent, ShowPostComponent, ShowCommentPostComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    ListCarComponent,
    ShowCarComponent,
    ListPostsComponent,
    ShowPostComponent,
    ShowCommentPostComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
