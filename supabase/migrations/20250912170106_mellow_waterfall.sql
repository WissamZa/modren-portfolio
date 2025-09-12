/*
  # Add Demo Data for Portfolio

  1. Sample Projects
    - Add featured projects with different categories
    - Include realistic project data with technologies
  
  2. Sample About Section
    - Add personal information and skills
  
  3. Sample Site Settings
    - Configure default site settings
*/

-- Insert sample projects
INSERT INTO projects (title, description, content, image_url, demo_url, github_url, technologies, category, featured) VALUES
(
  'E-Commerce Platform',
  'A modern, responsive e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
  'This comprehensive e-commerce solution includes user authentication, product catalog management, shopping cart functionality, order processing, and payment integration with Stripe. The platform is built with scalability in mind and includes features like inventory tracking, order history, and customer management.',
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://demo-ecommerce.example.com',
  'https://github.com/example/ecommerce-platform',
  ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
  'web',
  true
),
(
  'Task Management App',
  'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
  'Built with React and Firebase, this application allows teams to create projects, assign tasks, track progress, and collaborate in real-time. Features include drag-and-drop task boards, time tracking, file attachments, and comprehensive reporting.',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://demo-taskmanager.example.com',
  'https://github.com/example/task-manager',
  ARRAY['React', 'Firebase', 'Material-UI', 'TypeScript'],
  'web',
  true
),
(
  'Weather Dashboard',
  'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
  'This weather application provides current conditions, 7-day forecasts, and historical weather data. Built with React and integrated with multiple weather APIs for accurate data. Features include location search, favorite locations, weather alerts, and responsive design.',
  'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://demo-weather.example.com',
  'https://github.com/example/weather-dashboard',
  ARRAY['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
  'web',
  false
),
(
  'Portfolio Website',
  'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
  'This portfolio website features a clean, modern design with smooth animations, project showcases, contact forms, and a complete admin panel for content management. Built with React, TypeScript, and Supabase.',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://portfolio.example.com',
  'https://github.com/example/portfolio',
  ARRAY['React', 'TypeScript', 'Supabase', 'Framer Motion', 'Tailwind CSS'],
  'web',
  true
),
(
  'Mobile Fitness App',
  'A React Native fitness tracking app with workout plans, progress tracking, and social features.',
  'This mobile application helps users track their fitness journey with custom workout plans, progress photos, social sharing, and achievement badges. Includes integration with health APIs and wearable devices.',
  'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
  null,
  'https://github.com/example/fitness-app',
  ARRAY['React Native', 'Expo', 'Firebase', 'Redux'],
  'mobile',
  false
);

-- Insert sample about section
INSERT INTO about_sections (title, content, image_url, skills) VALUES
(
  'About Me',
  'I''m a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. My journey in web development started with a curiosity about how websites work, and it has evolved into a career focused on building exceptional user experiences.

I specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.

When I''m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500',
  ARRAY['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma', 'Agile']
);

-- Insert sample site settings
INSERT INTO site_settings (site_title, site_description, hero_title, hero_subtitle, hero_cta_text, social_links) VALUES
(
  'Creative Developer Portfolio',
  'Modern portfolio showcasing innovative web development projects and creative solutions',
  'Creative Developer',
  'Transforming ideas into exceptional digital experiences with modern technologies and innovative solutions.',
  'View My Work',
  '{
    "github": "https://github.com/example",
    "linkedin": "https://linkedin.com/in/example",
    "twitter": "https://twitter.com/example",
    "email": "hello@example.com"
  }'::jsonb
);