import { Link } from 'react-router-dom';
import { appPath } from 'src/app/lib/constants';
import { useAppSelector } from 'src/app/lib/hooks';
import { Loader } from 'src/modules/common/ui/Loader';
import { exampleIdKey } from 'src/modules/example/lib/constants';
import { exampleActions } from 'src/modules/example/lib/reducers';
import { selectExampleList } from 'src/modules/example/lib/selectors';
import { TExample } from 'src/modules/example/lib/types';
import { selectStatusItem } from 'src/modules/status/lib/selectors';
import { Status } from 'src/modules/status/lib/types';
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
                  <Link to={`${appPath.example}/${item[exampleIdKey]}`}>{`${item[field]}`}</Link>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
