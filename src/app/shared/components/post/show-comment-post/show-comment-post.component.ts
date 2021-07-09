import { Component, OnInit } from '@angular/core';
import {CommentModel} from "../../../../Utils/model/CommentModel";
import {PostsService} from "../../../../Utils/service/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-comment-post',
  templateUrl: './show-comment-post.component.html',
  styleUrls: ['./show-comment-post.component.css']
})
export class ShowCommentPostComponent implements OnInit {
  public postComments: CommentModel[];

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCommentPostByIdPost();
  }

  /**
   * get CommentPost by postId
   */
  public getCommentPostByIdPost(): void {
    const idCommentPost = this.activatedRoute.snapshot.paramMap.get('id');
    if (idCommentPost) {
      this.postsService.commentPost(idCommentPost).subscribe((comment: any) => {
        this.postComments = comment;
      })
    }
  }

}
