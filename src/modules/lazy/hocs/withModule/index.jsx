import storage from 'app/helpers/storage';

/**
 * Добавить модуль.
 * @param {*} name Название
 * @param {*} reducers Редьюсеры.
 * @return {*} Модуль.
 */
const withModule = (name, reducers) => (Component) => {
    storage.updateStore({[name]: reducers});

    /**
     * Вывести компонент.
     * @param {*} props Свойства.
     * @return {*} Представление.
     */
    return Component;
};

export default withModule;
