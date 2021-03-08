// @flow
import config from 'modules/config/reducers';
import example from 'modules/example/reducers';
import load from 'modules/load/reducers';
import locale from 'modules/locale/reducers';

export const reducers = {
    config,
    example,
    load,
    locale,
};

export type TReducers = typeof reducers;
