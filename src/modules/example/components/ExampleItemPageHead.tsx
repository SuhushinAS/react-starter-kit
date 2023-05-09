import {appPath} from 'app/constants';
import {useAppSelector} from 'app/hooks';
import {ExamplePageHead} from 'modules/example/components/ExamplePageHead';
import {selectExampleItem} from 'modules/example/selectors';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {useParams} from 'react-router-dom';

export const ExampleItemPageHead = () => {
  const {id = ''} = useParams();
  const {name} = useAppSelector(selectExampleItem(id)) || {};

  return <ExamplePageHead linkText={<Message id="example.list.title" />} linkUrl={appPath.example} title={name} />;
};
