type Author = {
  name: string;
  image: string;
};

export type ForumDataTypes = {
  id: string;
  title: String;
  body: String;
  authorId: string;
  author: Author;
  published: boolean;
  createdAt: Date;
  posts?: ForumDataTypes[];
};

export type ForumData = {
  threadData: ForumDataTypes;
};
