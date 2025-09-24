// RedirectToLocale.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import i18n from '../../i18n';

const RedirectToLocale = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const detected = i18n.language || 'en';
    const lang = ['en', 'ar'].includes(detected) ? detected : 'en';
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);

  return null;
};

export default RedirectToLocale;