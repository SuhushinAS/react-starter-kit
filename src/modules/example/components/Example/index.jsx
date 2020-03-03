import withConfig from 'app/context/config';
// import {ReactComponent as Logo} from 'icons/logo.svg';
// import Icon from 'modules/common/components/Icon';
import {actionExampleListGet} from 'modules/example/actions';
import {exampleApi} from 'modules/example/api';
import ExampleItem from 'modules/example/components/ExampleItem';
import reducers from 'modules/example/reducers';
import {selectExampleIdList} from 'modules/example/selectors';
import withModule from 'modules/lazy/hocs/withModule';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import './style.less';

export class Example extends React.Component {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {};

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    constructor(props) {
        super(props);
        const {config} = this.props;

        exampleApi.host = config.host;
    }

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <div className="example">
                {/* <Icon Component={Logo} />*/}
                {this.props.exampleList.map(this.renderItem)}
            </div>
        );
    }

    renderItem = (id) => (
        <div className="example__item" key={id}>
            <ExampleItem id={id} />
        </div>
    );

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    componentDidMount() {
        this.props.dispatch(actionExampleListGet());
    }

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     * @param {*} props Новые свойства.
     * @param {*} state Новое состояние.
     * @return {boolean} Должен ли компонент обновиться?
     */
    // shouldComponentUpdate(props, state) {}

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render'а компонента.
     * @param {*} props Предыдущие свойства.
     * @param {*} state Предыдущее состояние.
     * @return {undefined}
     */
    // componentDidUpdate(props, state) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    // componentWillUnmount() {}
}

export default compose(
    withModule('example', reducers),
    withConfig,
    connect((state) => ({
        exampleList: selectExampleIdList(state),
    }))
)(Example);
