import { SvgIcon } from 'src/modules/common/ui/SvgIcon';
import { Message } from 'src/modules/locale/ui/Message';

export const Home = () => {
  return (
    <div className="home">
      <div className="box">
        <h1>
          <Message id="home.title" />
        </h1>
        <h2>
          <SvgIcon name="logo" />
        </h2>
      </div>
    </div>
  );
};
