export const defaultLocale = 'ru';
export const currentLocaleKey = 'currentLocale';

export const getLocale = (locale?: string) => {
  return locale ?? localStorage.getItem(currentLocaleKey) ?? defaultLocale;
};
