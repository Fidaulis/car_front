import { Component, OnInit } from '@angular/core';
import {PostsModel} from "../../../../Utils/model/PostsModel";
import {PostsService} from "../../../../Utils/service/posts.service";

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  public posts: PostsModel[];
  public pagePost = 1;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  /**
   * Get all Posts
   */
  public getAllPosts(): any {
    this.postsService.allPosts().subscribe((posts:any) => {
      this.posts = posts;
    })
  }

}
