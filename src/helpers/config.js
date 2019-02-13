// @flow

/**
 * Функция для получения начальной конфигурации.
 * @return {Promise<*>} Промис, который ресолвится с хостом сервера.
 */
export default function getConfig(): Promise<TConfig> {
    return fetch('/api/v1/config').then((res: Response) => res.json());
}

export type TConfig = {
    host: string,
};
