# Modern Portfolio Website

A comprehensive, modern portfolio website built with React 18+, TypeScript, and Supabase. Features a responsive design, admin panel, and smooth animations.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Admin Panel**: Full CRUD operations for content management
- **Authentication**: Secure login system with Supabase
- **Dark/Light Theme**: Toggle between themes
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Lazy loading and optimized builds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Yup validation
- **Backend**: Supabase (Database, Auth, Storage)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

## 🚀 Deployment to GitHub Pages

### Prerequisites
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the Supabase dashboard

### Setup Steps

1. **Update the base path** in `vite.config.ts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

2. **Add GitHub Secrets**:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

The GitHub Action will automatically build and deploy your site to `https://yourusername.github.io/your-repo-name/`

### Important Notes for GitHub Pages

- **Routing**: Uses HashRouter for GitHub Pages compatibility
- **Base Path**: Configured for subdirectory deployment
- **404 Handling**: Custom 404.html for SPA routing
- **Environment Variables**: Stored as GitHub Secrets
- **Build Optimization**: Code splitting and asset optimization

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, Card)
│   ├── layout/         # Layout components (Header, Footer)
│   └── router/         # Router configuration
├── contexts/           # React contexts (Auth, Theme)
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page components
│   └── public/         # Public pages
├── types/              # TypeScript type definitions
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ }
}
```

### Content
- Update personal information in the components
- Add your projects to the Supabase database
- Customize the hero section in `HomePage.tsx`
- Modify contact information in `ContactPage.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes in components
- Animations: Framer Motion variants in components

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Security

- Environment variables for sensitive data
- Supabase Row Level Security (RLS) policies
- Input validation and sanitization
- HTTPS enforcement in production

## 📈 Performance

- Code splitting with dynamic imports
- Image optimization and lazy loading
- Minimal bundle size with tree shaking
- Efficient re-renders with React optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Supabase](https://supabase.com/) - Backend as a Service
- [Lucide React](https://lucide.dev/) - Icon library