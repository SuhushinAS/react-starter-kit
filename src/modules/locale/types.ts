import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';

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

export type TMessageProps = {
  id: string;
  values?: TMessageValues;
};

type TMessageValues = Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;

export type TMessage = (id: string, values?: TMessageValues) => string;
