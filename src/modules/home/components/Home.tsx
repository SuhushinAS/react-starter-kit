import {SvgIcon} from 'modules/common/components/SvgIcon';
import {Message} from 'modules/locale/components/Message';
import React from 'react';

/**
 * Пример компонента.
 * @return {*} Представление.
 */
export const Home = () => (
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
