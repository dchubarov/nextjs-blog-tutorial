export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  content: string;
  tags?: string[];
  createdAt: Date;
}
