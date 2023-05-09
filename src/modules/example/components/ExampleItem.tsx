import {useAppSelector} from 'app/hooks';
import {selectExampleItem} from 'modules/example/selectors';
import React from 'react';
import {useParams} from 'react-router-dom';
import './ExampleItem.less';

export const ExampleItem = () => {
  const {id = ''} = useParams();
  const item = useAppSelector(selectExampleItem(id));

  return <pre className="ExampleItem">{JSON.stringify(item, undefined, 2)}</pre>;
};
