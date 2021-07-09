import {environment} from "../../../environments/environment";

const _api = environment.base_url_api + '/api';
const _apiJsonPlaceHolder = environment.api_jsonPlaceholder;

export const urlList = {
  path_getAllCar: _api + '/car/all',
  path_getOneCar: _api + '/car/',
  path_login: _api + '/user/login',
}

export const urlListPlaceHolder = {
  path_getAllPosts: _apiJsonPlaceHolder + 'posts',
  path_getPosts: _apiJsonPlaceHolder + 'posts/',
  path_getCommentPosts: _apiJsonPlaceHolder + 'posts/',
}
