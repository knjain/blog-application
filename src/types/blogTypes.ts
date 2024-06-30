export interface Blogs {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: IndividualBlog[];
}

export interface SingleBlog {
  success: boolean;
  message: string;
  blog: IndividualBlog;
}

export interface IndividualBlog {
  content_text: string;
  user_id: number;
  title: string;
  photo_url: string;
  created_at: Date;
  id: number;
  description: string;
  content_html: Date;
  category: string;
  updated_at: Date;
}
