import React from 'react';
import {Link} from 'react-router-dom';
import './Example.less';

/**
 * Пример компонента.
 */
export class Example extends React.Component {
  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  static defaultProps = {};

  /**
   * Конструктор компонента.
   * @param props Свойства переданные в компонент.
   */
  // constructor(props: TExampleProps) {
  //     super(props);
  // }

  /**
   * Вывести компонент.
   * @return {*} Представление.
   */
  render() {
    return (
      <div className="example">
        <h1>Example</h1>
        <div>
          <Link to="/example/list">List</Link>
        </div>
      </div>
    );
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  // componentDidMount() {}

  /**
   * Должен ли компонент обновиться?
   * На самом деле, обычно реакт сам отлично разбирается.
   * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
   * @param props Новые свойства.
   * @param state Новое состояние.
   * @return {*} Должен ли компонент обновиться?
   */
  // shouldComponentUpdate(props, state) {}

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render'а компонента.
   * @param props Предыдущие свойства.
   * @param state Предыдущее состояние.
   */
  // componentDidUpdate(props, state) {}

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  // componentWillUnmount() {}
}