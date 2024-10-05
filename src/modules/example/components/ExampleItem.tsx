import {TExample} from 'modules/example/model/types';
import React from 'react';
import './ExampleItem.less';

type TProps = {
  example: TExample;
};

export const ExampleItem = ({example}: TProps) => {
  return (
    <pre className="ExampleItem">{JSON.stringify(example, undefined, 2)}</pre>
  );
};
