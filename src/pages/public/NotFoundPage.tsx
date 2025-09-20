import { Link } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * 404 Page Component - Shown when route is not found
 */
const NotFoundPage = () => {
  // Handle redirect persistence for SPA behavior
  useEffect(() => {
    // Save current URL before any potential redirect
    sessionStorage.setItem('redirect', window.location.href);

    // On mount, check if we should restore previous URL
    const redirect = sessionStorage.getItem('redirect');
    if (redirect && redirect !== window.location.href) {
      sessionStorage.removeItem('redirect');
      window.history.replaceState(null, '', redirect);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-white p-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          404
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Page not found
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 hover:-translate-y-1 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
          aria-label="Go to homepage"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;