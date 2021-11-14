import React from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';

type TRoutesProps = {
  list: TRoute[];
  root: string;
};

export type TRoute = {
  component: React.ComponentType<any>;
  path: string;
};

/**
 * Маршруты.
 */
export class Routes extends React.Component<TRoutesProps> {
  /**
   * Значения свойств по-умолчанию.
   * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
   */
  static defaultProps = {
    list: [],
    root: '',
  };

  /**
   * Вывести компонент.
   * @return {JSX.Element} Представление.
   */
  render() {
    const {list, root} = this.props;

    if (0 === list.length) {
      return null;
    }

    return (
      <ReactRoutes>
        {list.map(this.renderRoute)}
        <Route element={<Navigate replace to={root} />} path="/" />
      </ReactRoutes>
    );
  }

  /**
   * Вывести Маршрут.
   * @param {*} component Компонент.
   * @param {string} path Путь.
   * @return {JSX.Element} Представление.
   */
  renderRoute = ({component: Component, path}: TRoute) => <Route element={<Component />} key={path} path={path} />;
}
