import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {exampleIdKey} from 'modules/example/constants';
import {example} from 'modules/example/reducers';
import {selectExampleList} from 'modules/example/selectors';
import {TExample} from 'modules/example/types';
import {selectLoadItem} from 'modules/status/selectors';
import React from 'react';
import {Link} from 'react-router-dom';
import './ExampleList.less';

const fields: Array<keyof TExample> = ['name', 'email', 'age', 'balance'];

/**
 * Компонент.
 * @return {*} Представление.
 */
export const ExampleList = () => {
  const list = useAppSelector(selectExampleList);
  const load = useAppSelector(selectLoadItem(example.actions.getList.type));

  if ('undefined' === typeof load) {
    return null;
  }

  if (load) {
    return <div>Loading...</div>;
  }

  return (
    <table className="ExampleList">
      <thead>
        <tr>
          {fields.map((field) => (
            <th className="ExampleList__Cell" key={field}>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item[exampleIdKey]}>
            {fields.map((field) => (
              <td className="ExampleList__Cell" key={field}>
                <Link to={`${appPath.example}/${item[exampleIdKey]}`}>{item[field]}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
