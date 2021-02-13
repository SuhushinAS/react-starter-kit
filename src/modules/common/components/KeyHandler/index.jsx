// @flow
import React from 'react';

type TKeyHandlerProps = {
    keyList: any,
};

/**
 * Обработать нажатия клавиш.
 */
export class KeyHandler extends React.Component<TKeyHandlerProps> {
    /**
     * Добавить обработчик.
     * @param {string} eventName Название события.
     */
    handlerAdd = (eventName) => {
        document.addEventListener(eventName, this.handler);
    };

    /**
     * Удалить обработчик.
     * @param {string} eventName Название события.
     */
    handlerRemove = (eventName) => {
        document.removeEventListener(eventName, this.handler);
    };

    /**
     * Обработать событие.
     * @param {*} e событие.
     */
    handler = (e) => {
        const {keyList} = this.props;

        if (keyList[e.type]) {
            if (keyList[e.type][e.keyCode]) {
                keyList[e.type][e.keyCode](e);
            }
        }
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return null;
    }

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
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    componentWillUnmount() {
        Object.keys(this.props.keyList).forEach(this.handlerRemove);
    }

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно react сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     * @param {*} props Новые свойства.
     * @param {*} state Новое состояние.
     * @return {boolean} Должен ли компонент обновиться?
     */
    shouldComponentUpdate(props) {
        Object.keys(this.props.keyList).forEach(this.handlerRemove);
        Object.keys(props.keyList).forEach(this.handlerAdd);
        return false;
    }
}

export default KeyHandler;
