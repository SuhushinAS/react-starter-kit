import { TExample } from 'src/modules/example/lib/types';
import './ExampleItem.less';

type TProps = {
  example: TExample;
};

export const ExampleItem = ({ example }: TProps) => {
  return <pre className="ExampleItem">{JSON.stringify(example, undefined, 2)}</pre>;
};
