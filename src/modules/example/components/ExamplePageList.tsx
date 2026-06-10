import {appPath} from 'src/app/model/constants';
import {ExampleHead} from 'src/modules/example/components/ExampleHead';
import {ExampleList} from 'src/modules/example/components/ExampleList';
import {Message} from 'src/modules/locale/components/Message';
import React from 'react';

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
