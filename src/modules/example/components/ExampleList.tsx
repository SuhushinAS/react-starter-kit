import {useAppSelector} from 'src/app/lib/hooks';
import {appPath} from 'src/app/model/constants';
import {Loader} from 'src/modules/common/components/Loader';
import {exampleIdKey} from 'src/modules/example/model/constants';
import {exampleActions} from 'src/modules/example/model/reducers';
import {selectExampleList} from 'src/modules/example/model/selectors';
import {TExample} from 'src/modules/example/model/types';
import {selectStatusItem} from 'src/modules/status/model/selectors';
import {Status} from 'src/modules/status/model/types';
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
