import {useAppSelector} from 'app/lib/hooks';
import {appPath} from 'app/model/constants';
import {ExampleHead} from 'modules/example/components/ExampleHead';
import {ExampleItem} from 'modules/example/components/ExampleItem';
import {selectExampleItem} from 'modules/example/model/selectors';
import {Message} from 'modules/locale/components/Message';
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
