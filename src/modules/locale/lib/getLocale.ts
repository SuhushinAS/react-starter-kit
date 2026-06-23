import { currentLocaleKey, defaultLocale } from 'src/modules/locale/lib/constants';

export const getLocale = (locale?: string) => {
  return locale ?? localStorage.getItem(currentLocaleKey) ?? defaultLocale;
};
