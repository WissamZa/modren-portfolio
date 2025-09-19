import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RedirectToLocale: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Redirect immediately on render
  useEffect(() => {
    navigate(`/${i18n.language}`, { replace: true });
  }, [i18n.language, navigate]);

  // Show minimal loading state while redirecting
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-gray-500">Redirecting...</div>
    </div>
  );
};

export default RedirectToLocale;