// @flow

/**
 * Функция для получения начальной конфигурации.
 * @return {Promise<*>} Промис, который ресолвится с хостом сервера.
 */
export default async function getConfig(): Promise<ConfigDataType> {
    const response: ConfigType = await fetch('/config.json').then((res: Response) => res.json());

    return response.data;
}

export type ConfigType = {
    data: ConfigDataType,
};

export type ConfigDataType = {
    host: string,
    tile: {
        params: {
            attribution: string,
        },
        url: string,
    },
};
