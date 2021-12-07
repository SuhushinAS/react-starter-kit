import {appPath} from 'app/constants';
import {TDispatch} from 'app/types';
import {actionExampleGetList} from 'modules/example/actions';
import {ExampleItem} from 'modules/example/components/ExampleItem';
import {ExampleItemPageHead} from 'modules/example/components/ExampleItemPageHead';
import {ExampleList} from 'modules/example/components/ExampleList';
import {ExamplePageHead} from 'modules/example/components/ExamplePageHead';
import {examplePaths} from 'modules/example/constants';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

type TProps = {
  dispatch: TDispatch;
};

/**
 * Пример компонента.
 */
export class Example extends React.Component<TProps> {
  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  static defaultProps = {};

  /**
   * Конструктор компонента.
   * @param {*} props Свойства переданные в компонент.
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
      <div>
        <Routes>
          <Route
            element={
              <ExamplePageHead
                linkText={<Message id="home.title" />}
                linkUrl={appPath.home}
                title={<Message id="example.list.title" />}
              />
            }
            path={examplePaths.list}
          />
          <Route element={<ExampleItemPageHead />} path={examplePaths.item} />
        </Routes>
        <Routes>
          <Route element={<ExampleList />} path={examplePaths.list} />
          <Route element={<ExampleItem />} path={examplePaths.item} />
        </Routes>
      </div>
    );
  }

  /**
   * Компонент примонтировался.
   * В данный момент у нас есть возможность использовать refs,
   * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
   * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
   */
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(actionExampleGetList);
  }

  /**
   * Должен ли компонент обновиться?
   * На самом деле, обычно реакт сам отлично разбирается.
   * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
   * @param {*} props Новые свойства.
   * @param {*} state Новое состояние.
   * @return {*} Должен ли компонент обновиться?
   */
  // shouldComponentUpdate(props, state) {}

  /**
   * Вызывается сразу после render.
   * Не вызывается в момент первого render'а компонента.
   * @param {*} props Предыдущие свойства.
   * @param {*} state Предыдущее состояние.
   */
  // componentDidUpdate(props, state) {}

  /**
   * Вызывается сразу перед тем, как компонент будет удален из DOM.
   */
  // componentWillUnmount() {}
}

export const ExampleContainer = connect(null)(Example);
