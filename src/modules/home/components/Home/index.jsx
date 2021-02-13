// @flow
import SvgIcon from 'modules/common/components/SvgIcon';
import Message from 'modules/locale/components/Message';
import React from 'react';

type THomeProps = {};

/**
 * Пример компонента.
 */
export class Home extends React.Component<THomeProps> {
    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <div className="home">
                <div className="box">
                    <h1>
                        <Message id="home.header.title" />
                    </h1>
                    <h2>
                        <SvgIcon name="logo" />
                    </h2>
                </div>
            </div>
        );
    }
}

export default Home;
