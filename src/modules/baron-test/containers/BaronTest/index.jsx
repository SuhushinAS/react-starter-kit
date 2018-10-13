// @flow

import type {TActionDefault, TThunk} from 'helpers/types.es';
import BaronTestList from 'modules/baron-test/components/BaronTestList/index.jsx';
import {baronTestActionListGet} from 'modules/baron-test/ducks/index.es';
import {baronTestSelectorList} from 'modules/baron-test/selectors/index.es';
import type {TBaronTest} from 'modules/baron-test/types.es';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Layout from 'modules/common/containers/Layout/index.jsx';
import Baron from 'modules/common/components/Baron/index.jsx';

/**
 * Привязка store к props.
 * @param {*} state Состояние.
 // * @param {*} props Свойства.
 * @return {{prop}} Объкет, элементы которого будут добавлены в props.
 */
function mapStateToProps(state) {
    return {
        baronTestList: baronTestSelectorList(state),
    };
}

/**
 * Привязка actions к props.
 * @param {function} dispatch Функция для вызова редьюсера.
 * @return {{importedAction: *}|B|N} Объкет, элементы которого будут добавлены в props.
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        baronTestActionListGet,
    }, dispatch);
}

type TBaronTestProps = {
    baronTestActionListGet: () => TThunk<TActionDefault>,
    baronTestList: TBaronTest[],
};

class BaronTest extends React.Component<TBaronTestProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        baronTestList: [],
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    // constructor(props) {
    //     super(props);
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
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        return (
            <Layout main={this.renderMain()} />
        );
    }

    renderMain() {
        return (
            <div className="b_0 l_0 o_a po_a r_0 t_0">
                <Baron>
                    <BaronTestList baronTestList={this.props.baronTestList} />
                </Baron>
            </div>
        );
    }

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    componentDidMount() {
        this.props.baronTestActionListGet();
    }

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaronTest));
