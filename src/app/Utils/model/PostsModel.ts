export class PostsModel {
  public constructor(
    public id: string,
    public userId: string,
    public title: string,
    public body: string,
  ) {
  }
}
