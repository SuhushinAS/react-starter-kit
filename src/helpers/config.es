// @flow

/**
 * Функция для получения начальной конфигурации.
 * @return {Promise<*>} Промис, который ресолвится с хостом сервера.
 */
export default function getConfig(): Promise<ConfigType> {
    return fetch('/api/v1/config').then((res: Response) => res.json());
}

export type ConfigType = {
    host: string,
};
