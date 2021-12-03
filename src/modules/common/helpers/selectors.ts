import {TItem, TMap} from 'modules/common/types';

type TGetList = <T = TItem>(data: TMap<T>, list: string[]) => T[];

/**
 * Получить список.
 * @param data Данные.
 * @param list Список.
 * @return {*} Список.
 */
export const getList: TGetList = (data, list) => list.map((id) => data[id]);
