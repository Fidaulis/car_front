import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostsModel} from "../model/PostsModel";
import {urlListPlaceHolder} from "../api/urlList";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get all posts
   */
  public allPosts() {
      return this.httpClient.get<PostsModel[]>(urlListPlaceHolder.path_getAllPosts);
  }

  /**
   * get Post by Id
   */
  public onePost(id: string) {
    return this.httpClient.get(urlListPlaceHolder.path_getPosts + id)
      .pipe(map(
        (response: any) => {
          return response;
        }
      ))
  }

  /**
   * get Comment Post by Id
   */
  public commentPost(id: string) {
    return this.httpClient.get(urlListPlaceHolder.path_getCommentPosts + id + '/comments')
      .pipe(map(
        (response: any) => {
          return response;
        }
      ))
  }
}
