export type Post = {
  id: number;
  title: string;
  text: string;
  authorId: number;
  comments: Comment[];
};
