import {appPath} from 'app/constants';
import {ExampleHead} from 'modules/example/components/ExampleHead';
import {ExampleList} from 'modules/example/components/ExampleList';
import {Message} from 'modules/locale/components/Message';
import React from 'react';

export const ExamplePageList = () => (
  <>
    <ExampleHead
      linkText={<Message id="home.title" />}
      linkUrl={appPath.home}
      title={<Message id="example.list.title" />}
    />
    <ExampleList />
  </>
);
