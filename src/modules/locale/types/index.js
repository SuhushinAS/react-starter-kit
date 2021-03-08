// @flow
export type TLocaleState = {|
    locale: TLocaleStore,
|};

export type TLocaleStore = {|
    current: string,
    data: {},
    list: string[],
|};

export type TLocaleData = {|
    [string]: TLocale,
|};

export type TLocale = {|
    [string]: string,
|};
