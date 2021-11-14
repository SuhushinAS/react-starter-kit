export type TLocaleStore = {
  current: string;
  data: TLocaleData;
  list: string[];
};

export type TLocaleData = {
  [key: string]: TLocale;
};

export type TLocale = {
  [key: string]: string;
};
