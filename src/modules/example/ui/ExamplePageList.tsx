import { appPath } from 'src/app/lib/constants';
import { ExampleHead } from 'src/modules/example/ui/ExampleHead';
import { ExampleList } from 'src/modules/example/ui/ExampleList';
import { Message } from 'src/modules/locale/ui/Message';

export const ExamplePageList = () => {
  return (
    <div className="box">
      <ExampleHead
        linkText={<Message id="home.title" />}
        linkUrl={appPath.home}
        title={<Message id="example.list.title" />}
      />
      <ExampleList />
    </div>
  );
};
