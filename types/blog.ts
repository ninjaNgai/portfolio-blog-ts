export type Post = {
  publishedAt: string | number | Date;
  post: {
    slug: string;
    title: string;
    summary: string;
    tag: string;
    publishedAt: string;
  };
};

export type Posts = {
  posts: Post[];
};
