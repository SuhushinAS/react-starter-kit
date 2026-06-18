import {ComponentProps} from 'react';
import {FormattedMessage} from 'react-intl';

export type TMessageProps = Pick<
  ComponentProps<typeof FormattedMessage>,
  'id' | 'values'
>;

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
