export class CommentModel {
  public constructor(
    public id: string,
    public postId: string,
    public name: string,
    public email: string,
    public body: string,
  ) {
  }
}
