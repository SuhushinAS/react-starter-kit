// @flow

import {commonSelectorLoading} from 'modules/common/selectors/index.es';
import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

const layoutPropList = {
    main: {
        className: 'width_xs_24 width_md_15 width_lg_17 width_xl_19 h_full po_r d_t-c',
    },
    side: {
        className: 'width_xs_24 width_md_9 width_lg_7 width_xl_5 h_full bg_white po_r d_t-c',
    },
};

/**
 * Привязка store к props.
 * @param {*} state Состояние.
 * @return {{prop}} Объкет, элементы которого будут добавлены в props.
 */
function mapStateToProps(state) {
    return {
        commonLoading: commonSelectorLoading(state),
    };
}

/**
 * Привязка actions к props.
 * @param {function} dispatch Функция для вызова редьюсера.
 * @return {{importedAction: *}|B|N} Объкет, элементы которого будут добавлены в props.
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

type TLayoutProps = {
    commonLoading: number,
    main: React.Node,
    side: React.Node,
};

class Layout extends React.Component<TLayoutProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {};

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        return (
            <div className="h_full d_t w_full t-l_f">
                <div className="d_t-r">
                    <div className="d_t-c po_r z_2">
                        Header
                    </div>
                </div>
                {this.renderRow()}
            </div>
        );
    }

    renderRow() {
        const {main, side} = this.props;

        if ('undefined' === typeof main) {
            return (
                <div className="d_t-r h_full">
                    <div className="d_t-c po_r">
                        {side}
                    </div>
                </div>
            );
        }

        if ('undefined' === typeof side) {
            return (
                <div className="d_t-r h_full">
                    <div className="d_t-c po_r">
                        {main}
                    </div>
                </div>
            );
        }

        return (
            <div className="d_t-r h_full">
                <div className="d_t-c po_r z_1 o_a">
                    <div className="d_md_t h_full t-l_f w_full">
                        <div className="d_md_t-r h_full">
                            <div {...layoutPropList.side}>
                                {side}
                            </div>
                            <div {...layoutPropList.main}>
                                {main}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
