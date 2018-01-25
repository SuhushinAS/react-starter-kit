import Example from 'containers/Example/index';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import {exampleSimple, exampleGet, exampleCreate, exampleUpdate, exampleDelete} from 'src/redux/actions/example';

/**
 * Привязка props к store
 *
 * @param state
 * @return {{prop}}
 */
function mapStateToProps(/*state, props*/) {
    return {
        // example: state.example,
    };
}

/**
 * Привязка props к actions
 *
 * @param dispatch
 * @return {{importedAction: *}|B|N}
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // exampleSimple,
        // exampleGet,
        // exampleCreate,
        // exampleUpdate,
        // exampleDelete,
    }, dispatch);
}

class App extends React.Component {
    /**
     * Описание свойств.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    // static propTypes = {prop: PropTypes.bool};

    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    // static defaultProps = {prop: false};

    /**
     * Конструктор компонента
     *
     * @param props - Свойства переданые в компонент.
     * @param context - Контекст.
     * @param updater
     */
    // constructor(props, context, updater) {}

    /**
     * Компонент будет примонтирован.
     * В данный момент у нас нет возможности посмотреть DOM элементы.
     */
    // componentWillMount() {}

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs, а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     */
    // componentDidMount() {}

    /**
     * Компонент получает новые props.
     * Этод метод не вызывается в момент первого render.
     *
     * @param nextProps - Новые свойства
     */
    // componentWillReceiveProps(nextProps) {}

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     *
     * @param nextProps - Новые свойства.
     * @param nextState - Новое состояние.
     *
     * @return bool
     */
    // shouldComponentUpdate(nextProps, nextState) {}

    /**
     * Вызывается прямо перед render, когда новые props и state получены.
     * В этом методе нельзя вызывать setState.
     *
     * @param nextProps - Новые свойства.
     * @param nextState - Новое состояние.
     */

    // componentWillUpdate(nextProps, nextState) {}

    /**
     * Отображение компонента
     */
    render() {
        return <Example />;
    }

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render'а компонента.
     *
     * @param prevProps - Предыдущие свойства.
     * @param prevState - Предыдущее состояние.
     */
    // componentDidUpdate(prevProps, prevState) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     */
    // componentWillUnmount() {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
