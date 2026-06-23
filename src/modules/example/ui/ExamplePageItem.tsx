import { useParams } from 'react-router-dom';
import { appPath } from 'src/app/lib/constants';
import { useAppSelector } from 'src/app/lib/hooks';
import { selectExampleItem } from 'src/modules/example/lib/selectors';
import { ExampleHead } from 'src/modules/example/ui/ExampleHead';
import { ExampleItem } from 'src/modules/example/ui/ExampleItem';
import { Message } from 'src/modules/locale/ui/Message';

export const ExamplePageItem = () => {
  const { id = '' } = useParams();
  const example = useAppSelector(selectExampleItem(id));

  return (
    <div className="box">
      <ExampleHead
        linkText={<Message id="example.list.title" />}
        linkUrl={appPath.example}
        title={example.name}
      />
      <ExampleItem example={example} />
    </div>
  );
};
