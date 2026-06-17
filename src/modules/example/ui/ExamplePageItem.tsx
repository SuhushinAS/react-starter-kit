import {useAppSelector} from 'src/app/lib/hooks';
import {appPath} from 'src/app/lib/constants';
import {ExampleHead} from 'src/modules/example/ui/ExampleHead';
import {ExampleItem} from 'src/modules/example/ui/ExampleItem';
import {selectExampleItem} from 'src/modules/example/lib/selectors';
import {Message} from 'src/modules/locale/ui/Message';
import React from 'react';
import {useParams} from 'react-router-dom';

export const ExamplePageItem = () => {
  const {id = ''} = useParams();
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
