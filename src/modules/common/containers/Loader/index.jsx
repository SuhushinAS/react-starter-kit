// @flow

import * as React from 'react';
import './style.less';

const itemCount = 3;
const itemTypeCount = 3;
const loaderItemList = Array(itemCount).fill(0);

type TLoaderProps = {
    show: boolean,
    size: number,
};

class Loader extends React.Component<TLoaderProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        size: 5,
    };

    /**
     * Вывести пункт загрузчика.
     * @param {*} item Пункт загрузчика.
     * @param {*} key Пункт загрузчика.
     * @return {*} Представление.
     */
    renderItem = (item: mixed, key: number) => {
        const {size} = this.props;
        const sizePx = `${size}px`;
        const propList = {
            className: `loader__item loader__item_${key % itemTypeCount + 1}`,
            style: {
                height: sizePx,
                marginLeft: `${Math.ceil(size / 2)}px`,
                marginRight: `${Math.floor(size / 2)}px`,
                width: sizePx,
            },
        };

        return (
            <div {...propList} key={key} />
        );
    };

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        const {show, size} = this.props;
        const propList = {
            className: 'loader',
            style: {
                height: `${size}px`,
            },
        };

        if (show) {
            return (
                <div {...propList}>
                    {loaderItemList.map(this.renderItem)}
                </div>
            );
        }

        return null;
    }
}

export default Loader;
