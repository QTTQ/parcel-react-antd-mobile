import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile

import { Tabs, Badge } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
// import { createForm } from "rc-form";
// import "./index.less";
 import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'


//util
import Bus from '../../util/onfire'
import { requestaxios } from "../../util/request";

//公共組件
import Map from '../../components/Map/';
import C_header from '../../components/C_header/';

const tabs = [
    { title: <Badge text={'3'}>我的团队</Badge> },
    { title: <Badge text={'新增(20)'}>我的推荐人</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];

const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    // { title: 'Third Tab', sub: '3' },
];
const renderTabBar = (props) => {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
};
const Atab1 = (tab) => {
    console.log(tab)
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>ddadsasdasdasda</div>)
}
const Atab2 = (tab) => {
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>sdasdasdasdadsasda</div>)
}
const aaa = ['tab1', 'tab2']
class childe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            selectedTab: 'zhiwei',
            hidden: false,
            // fullScreen: false,
        };
    }
    componentDidMount() {
        this._init()
    }

    _init = () => {

    }
    render() {
        return (
            <div className="cl-layout">
                {/* <C_header showHideIcon={true} themeName={"我的团队"} /> */}
                <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                    >
                        <Atab1 />
                        <Atab2 />
                    </Tabs>
                </StickyContainer>

            </div>
        );
    }
}

// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    // let { Common, ClickAdd, LoginApp } = state;
    // let { InitialDataReducer } = state; //获取reducer中的方法
    // return {
    //     InitialData: InitialDataReducer.InitialData,
    // }
    return {
    }
};
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// });

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormMain_redux = connect(mapStateToProps)(childe); // 连接redux

export default createFormMain_redux;
