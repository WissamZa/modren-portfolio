export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  content?: string;
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  skills: string[];
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  site_title: string;
  site_description: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_text: string;
  social_links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  updated_at: string;
}

export type Skills = string[];