/**
 * Функция для получения начальной конфигурации.
 * @param {*} data данные курьера
 * @param {*} id индекс курьера
 * @return {*} возвращает конкатенированную строку типа "Фамилия И.О."
 */

export function concateFIO(data, id) {
    const courier = data && data[id];
    const lastName = courier.lastName ? courier.lastName : '';
    const firstName = courier.firstName ? `${courier.firstName.charAt(0).toUpperCase() }.` : '';
    const patronymic = courier.patronymic ? `${courier.patronymic.charAt(0).toUpperCase() }.` : '';

    return courier && `${lastName } ${ firstName }${patronymic}` || '';
}
