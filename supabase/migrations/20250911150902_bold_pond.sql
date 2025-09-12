/*
  # Portfolio Website Database Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `content` (text, optional detailed content)
      - `image_url` (text, optional)
      - `demo_url` (text, optional)
      - `github_url` (text, optional)
      - `technologies` (text array)
      - `category` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamp)

    - `about_sections`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `image_url` (text, optional)
      - `skills` (text array)
      - `updated_at` (timestamp)

    - `site_settings`
      - `id` (uuid, primary key)
      - `site_title` (text)
      - `site_description` (text)
      - `hero_title` (text)
      - `hero_subtitle` (text)
      - `hero_cta_text` (text)
      - `social_links` (jsonb)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access and authenticated admin write access
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  content text,
  image_url text,
  demo_url text,
  github_url text,
  technologies text[] NOT NULL DEFAULT '{}',
  category text NOT NULL DEFAULT 'web',
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create about sections table
CREATE TABLE IF NOT EXISTS about_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  skills text[] NOT NULL DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);

-- Create site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  site_title text NOT NULL DEFAULT 'Portfolio',
  site_description text NOT NULL DEFAULT 'Creative Developer Portfolio',
  hero_title text NOT NULL DEFAULT 'Creative Developer',
  hero_subtitle text NOT NULL DEFAULT 'Transforming ideas into exceptional digital experiences',
  hero_cta_text text NOT NULL DEFAULT 'View My Work',
  social_links jsonb DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for contact messages table
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for about sections table
CREATE POLICY "Anyone can view about sections"
  ON about_sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage about sections"
  ON about_sections
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for site settings table
CREATE POLICY "Anyone can view site settings"
  ON site_settings
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage site settings"
  ON site_settings
  FOR ALL
  TO authenticated
  USING (true);

-- Insert default data
INSERT INTO projects (title, description, technologies, category, featured) VALUES
  ('E-Commerce Platform', 'Full-featured e-commerce platform with React, Node.js, and Stripe integration', '{"React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"}', 'web', true),
  ('Task Management App', 'Collaborative task management application with real-time updates', '{"React", "TypeScript", "Socket.io", "Express", "PostgreSQL"}', 'web', true),
  ('Weather Dashboard', 'Beautiful weather dashboard with forecasts and interactive maps', '{"React", "D3.js", "OpenWeather API", "Chart.js"}', 'web', false);

INSERT INTO about_sections (title, content, skills) VALUES
  ('About Me', 'I''m a passionate full-stack developer with over 5 years of experience creating digital solutions. I specialize in modern web technologies and love building applications that make a difference.', '{"React", "TypeScript", "Node.js", "Python", "AWS", "GraphQL", "MongoDB", "PostgreSQL"}');

INSERT INTO site_settings (site_title, site_description, hero_title, hero_subtitle, social_links) VALUES
  ('Creative Developer Portfolio', 'Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.', 'Creative Developer', 'Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.', '{"github": "https://github.com", "linkedin": "https://linkedin.com", "email": "hello@portfolio.com"}');