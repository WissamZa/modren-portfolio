// src/hooks/useNavigation.ts
import { useTranslation } from "react-i18next";

export interface NavItem {
  name: string;
  href: string;
}

export const useNavigation = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    { name: t("header.nav.home"), href: '' },
    { name: t("header.nav.about"), href: 'about' },
    { name: t("header.nav.projects"), href: 'projects' },
    { name: t("header.nav.contact"), href: 'contact' },
  ];
};