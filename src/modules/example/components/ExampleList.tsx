import {useAppSelector} from 'app/lib/hooks';
import {appPath} from 'app/model/constants';
import {Loader} from 'modules/common/components/Loader';
import {exampleIdKey} from 'modules/example/model/constants';
import {exampleActions} from 'modules/example/model/reducers';
import {selectExampleList} from 'modules/example/model/selectors';
import {TExample} from 'modules/example/model/types';
import {selectStatusItem} from 'modules/status/model/selectors';
import {Status} from 'modules/status/model/types';
import React from 'react';
import {Link} from 'react-router-dom';
import './ExampleList.less';

const fields: Array<keyof TExample> = ['name', 'email', 'age', 'balance'];

export const ExampleList = () => {
  const list = useAppSelector(selectExampleList);
  const status = useAppSelector(selectStatusItem(exampleActions.getList.type));

  if (status === Status.loading) {
    return <Loader />;
  }

  if (status !== Status.success) {
    return null;
  }

  return (
    <table className="ExampleList">
      <thead>
        <tr>
          {fields.map((field) => {
            return (
              <th className="ExampleList__Cell" key={field}>
                {field}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item[exampleIdKey]}>
            {fields.map((field) => {
              return (
                <td className="ExampleList__Cell" key={field}>
                  <Link
                    to={`${appPath.example}/${item[exampleIdKey]}`}
                  >{`${item[field]}`}</Link>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
