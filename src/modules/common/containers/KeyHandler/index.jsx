// @flow

import type {CommonTypeKeyList} from 'modules/common/types.es';
import * as React from 'react';

type KeyHandlerTypeProps = {
    keyList: CommonTypeKeyList,
};

class KeyHandler extends React.Component<KeyHandlerTypeProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {};

    /**
     * Добавление слушателей нажатий клавиш.
     * @param {string} eventName Название события.
     * @return {undefined}
     */
    handlerAdd = (eventName: string) => {
        document.addEventListener(eventName, this.handler);
    };

    /**
     * Удаление слушателей нажатий клавиш.
     * @param {string} eventName Название события.
     * @return {undefined}
     */
    handlerRemove = (eventName: string) => {
        document.removeEventListener(eventName, this.handler);
    };

    /**
     * Обработчик нажатия клавиш.
     * @param {*} e Событие.
     * @return {function(*=)} Обработчик нажатия клавиш.
     */
    handler = (e: any) => {
        if (this.props.keyList[e.type]) {
            if (this.props.keyList[e.type][e.keyCode]) {
                this.props.keyList[e.type][e.keyCode](e);
            }
        }
    };

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    componentDidMount() {
        Object.keys(this.props.keyList).forEach(this.handlerAdd);
    }

    /**
     * Компонент получает новые props.
     * Этод метод не вызывается в момент первого render.
     * @param {*} nextProps Новые свойства
     * @return {undefined}
     */
    componentWillReceiveProps(nextProps: KeyHandlerTypeProps) {
        Object.keys(this.props.keyList).forEach(this.handlerRemove);
        Object.keys(nextProps.keyList).forEach(this.handlerAdd);
    }

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     // * @param {*} nextProps Новые свойства.
     // * @param {*} nextState Новое состояние.
     * @return {boolean} Должен ли компонент обновиться?
     */
    shouldComponentUpdate() {
        return false;
    }

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        return null;
    }

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    componentWillUnmount() {
        Object.keys(this.props.keyList).forEach(this.handlerRemove);
    }
}

export default KeyHandler;
