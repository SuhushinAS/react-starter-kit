// @flow

/**
 * Функция для получения начальной конфигурации.
 * @return {Promise<*>} Промис, который ресолвится с хостом сервера.
 */
export default async function getConfig(): Promise<ConfigType> {
    return await fetch('/api/v1/config').then((res: Response) => res.json());
}

export type ConfigType = {
    host: string,
};
