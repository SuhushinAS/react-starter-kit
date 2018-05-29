// @flow

import type {TypeActionDefault, TypeThunk} from 'helpers/types.es';
import ExampleList from 'modules/example/components/ExampleList/index';
import {exampleActionListGet} from 'modules/example/ducks/index.es';
import {exampleSelectorList} from 'modules/example/selectors/index.es';
import type {ExampleType} from 'modules/example/types.es';
import PropTypes from 'prop-types';
import * as React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

/**
 * Привязка store к props.
 * @param {*} state Состояние.
 // * @param {*} props Свойства.
 * @return {{prop}} Объкет, элементы которого будут добавлены в props.
 */
function mapStateToProps(state) {
    return {
        exampleList: exampleSelectorList(state),
    };
}

/**
 * Привязка actions к props.
 * @param {function} dispatch Функция для вызова редьюсера.
 * @return {{importedAction: *}|B|N} Объкет, элементы которого будут добавлены в props.
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        exampleActionListGet,
    }, dispatch);
}

type ExampleTypeProps = {
    exampleActionListGet: () => TypeThunk<TypeActionDefault>,
    exampleList: ExampleType[],
};

class Example extends React.Component<ExampleTypeProps> {
    /**
     * Описание свойств.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static propTypes = {
        exampleActionListGet: PropTypes.func,
        exampleList: PropTypes.any,
    };

    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        exampleList: [],
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @param {*} context Контекст.
     * @return {undefined}
     */
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = this.initState(props);
    // }

    /**
     * Инициализиоовать состояние.
     * @param {*} props Свойства.
     * @return {*} Состояние.
     */
    // initState(props) {
    //     return {};
    // }

    /**
     * Компонент будет примонтирован.
     * В данный момент у нас нет возможности посмотреть DOM элементы.
     * @return {undefined}
     */

    // componentWillMount() {}

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    componentDidMount() {
        this.props.exampleActionListGet();
    }

    /**
     * Компонент получает новые props.
     * Этод метод не вызывается в момент первого render.
     * @param {*} nextProps Новые свойства
     * @return {undefined}
     */
    // componentWillReceiveProps(nextProps) {}

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     * @param {*} nextProps Новые свойства.
     * @param {*} nextState Новое состояние.
     * @return {boolean} Должен ли компонент обновиться?
     */
    // shouldComponentUpdate(nextProps, nextState) {}

    /**
     * Вызывается прямо перед render, когда новые props и state получены.
     * В этом методе нельзя вызывать setState.
     * @param {*} nextProps Новые свойства.
     * @param {*} nextState Новое состояние.
     * @return {undefined}
     */

    // componentWillUpdate(nextProps, nextState) {}

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        return (
            <div>
                <ExampleList exampleList={this.props.exampleList} />
            </div>
        );
    }

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render'а компонента.
     * @param {*} prevProps Предыдущие свойства.
     * @param {*} prevState Предыдущее состояние.
     * @return {undefined}
     */
    // componentDidUpdate(prevProps, prevState) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    // componentWillUnmount() {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Example));
