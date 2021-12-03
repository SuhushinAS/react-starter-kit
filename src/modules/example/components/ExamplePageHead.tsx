import React from 'react';
import {Link} from 'react-router-dom';
import 'modules/example/components/ExamplePageHead.less';

type TProps = {
  linkText: React.ReactNode;
  linkUrl: string;
  title: React.ReactNode;
};

/**
 * Компонент.
 * @return {*} Представление.
 */
export const ExamplePageHead = ({linkText, linkUrl, title}: TProps) => (
  <>
    <h1 className="ExamplePageHead__Title">{title}</h1>
    <p>
      <Link to={linkUrl}>{linkText}</Link>
    </p>
  </>
);
