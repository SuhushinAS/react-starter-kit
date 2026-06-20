import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import './ExampleHead.less';

type TProps = {
  linkText: ReactNode;
  linkUrl: string;
  title: ReactNode;
};

export const ExampleHead = ({linkText, linkUrl, title}: TProps) => {
  return (
    <>
      <h1 className="ExampleHead__Title">{title}</h1>
      <p>
        <Link to={linkUrl}>{linkText}</Link>
      </p>
    </>
  );
};
