import {FormatXMLElementFn, PrimitiveType} from 'intl-messageformat';
import {ReactNode} from 'react';

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

export type TMessageProps<V> = {
  id: string;
  values?: V;
};

export type TMessageFormatValues = Record<
  string,
  PrimitiveType | FormatXMLElementFn<string, string>
>;

export type TMessageValues = Record<string, ReactNode | PrimitiveType | FormatXMLElementFn<ReactNode, ReactNode>>;

export type TMessage = (id: string, values?: TMessageFormatValues) => string;
