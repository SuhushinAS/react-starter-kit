// @flow
import React from 'react';
import './style.less';

type TIconProps = {|
    name: string,
|};

type TIconState = TImport;

type TImport = {
    default: TIcon,
};

type TIcon = {
    id: string,
    toString: any,
    url: string,
    viewBox: string,
};

/**
 * Класс иконки.
 */
export class SvgIcon extends React.PureComponent<TIconProps, TIconState> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        name: '',
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданные в компонент.
     * @return {undefined}
     */
    constructor(props: TIconProps) {
        super(props);
        const {name} = props;

        if (name && 'string' === typeof name) {
            this.importSvg(name);
        } else {
            console.warn(`${name} is not correct`);
        }
    }

    isMount = true;

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render компонента.
     * @param {*} props Предыдущие свойства.
     // * @param {*} state Предыдущее состояние.
     * @return {undefined}
     */
    componentDidUpdate(props: TIconProps) {
        const {name} = this.props;
        if (name !== props.name) {
            this.importSvg(name);
        }
    }

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    componentWillUnmount() {
        this.isMount = false;
    }

    /**
     * Обработать ошибку.
     */
    handleError = (): void => {
        console.warn(`${this.props.name} is not found`);
    };

    /**
     * Обработать импорт.
     * @param {*} icon Иконка.
     */
    handleImport = (icon: TImport): void => {
        if (this.isMount) {
            this.setState({...icon.default});
        }
    };

    /**
     * Импоритровать СВГ.
     * @param {string} name Название.
     */
    importSvg(name: string) {
        import(
            /* webpackChunkName: "icon" */
            `icons/${name}.svg`
        )
            .then(this.handleImport)
            .catch(this.handleError);
    }

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        const {id, url, viewBox} = this.state;

        if (id) {
            return (
                <svg className="svg-icon" viewBox={viewBox}>
                    <use xlinkHref={url} />
                </svg>
            );
        }

        return null;
    }

    state = {};
}

export default SvgIcon;
