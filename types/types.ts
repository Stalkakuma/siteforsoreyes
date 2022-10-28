type Author = {
  name: string;
  image: string;
};

export interface PostData {
  post: PostType;
}

export interface PostType {
  id: string;
  createdAt: Date;
  title: String;
  published: Boolean;
  author: Author;
  authorId: String;
}
