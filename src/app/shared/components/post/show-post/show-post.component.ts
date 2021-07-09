import { Component, OnInit } from '@angular/core';
import {PostsModel} from "../../../../Utils/model/PostsModel";
import {PostsService} from "../../../../Utils/service/posts.service";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../../Utils/service/users.service";

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  public onePost: PostsModel;
  public postNom: any;
  public isConnected: boolean;

  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isConnected = this.usersService.loggedIn();
    this.getPostById();
  }

  /**
   * Get posts by ID
   */
  public getPostById(): void {
    const idPost =this.activatedRoute.snapshot.paramMap.get('id');
    if (idPost) {
      this.postsService.onePost(idPost).subscribe((post: any) => {
        this.onePost = post;
        this.postNom = post.title;
      })
    }
  }

}
