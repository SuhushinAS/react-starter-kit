// @flow
import type {TDispatch} from 'app/types';
import {actionExampleListGet} from 'modules/example/actions';
import ExampleItem from 'modules/example/components/ExampleItem';
import {selectExampleList} from 'modules/example/selectors';
import type {TExample} from 'modules/example/types';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

type TExampleListProps = {
    dispatch: TDispatch,
    exampleList: TExample[],
};

/**
 * Пример компонента.
 */
export class ExampleList extends React.Component<TExampleListProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        exampleList: [],
    };

    /**
     * Вывести компонент.
     * @return {JSX.Element} Представление.
     */
    render() {
        return <div className="box">{this.props.exampleList.map(this.renderItem)}</div>;
    }

    /**
     * Вывести элемент.
     * @param {*} item Идентификатор.
     * @return {JSX.Element} Представление.
     */
    renderItem = (item: TExample) => (
        <div className="example__item" key={item.id}>
            <ExampleItem item={item} />
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
}

export default compose(
    connect((state) => ({
        exampleList: selectExampleList(state),
    }))
)(ExampleList);
