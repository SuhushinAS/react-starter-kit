import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {exampleIdKey} from 'modules/example/constants';
import {exampleActions} from 'modules/example/reducers';
import {selectExampleList} from 'modules/example/selectors';
import {TExample} from 'modules/example/types';
import {selectStatusItem} from 'modules/status/selectors';
import {Status} from 'modules/status/types';
import React from 'react';
import {Link} from 'react-router-dom';
import './ExampleList.less';

const fields: Array<keyof TExample> = ['name', 'email', 'age', 'balance'];

export const ExampleList = () => {
  const list = useAppSelector(selectExampleList);
  const status = useAppSelector(selectStatusItem(exampleActions.getList.type));

  if (status === Status.loading) {
    return <div>Loading...</div>;
  }

  if (status !== Status.success) {
    return null;
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
                <Link to={`${appPath.example}/${item[exampleIdKey]}`}>{`${item[field]}`}</Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
