import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile
import { TabBar } from "antd-mobile";
import { createForm } from "rc-form";
// import "./index.less";
 import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'

//util
import Bus from '../../util/onfire'
import { requestaxios } from "../../util/request";

//公共組件
import Map from '../../components/Map/';
import C_header from '../../components/C_header/';



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
        //获取屏幕高
        const box_h = (() => {
            var o = document.getElementsByClassName("cl-layout")[0];
            return (window.screen.height - o.offsetHeight + "px")
        })();
        console.log('box_h', box_h)
        document.getElementsByClassName("map—box")[0].style.height = box_h;
    }
    _getCurrentPosition=()=>{
        Bus.fire("getCurrentPosition",1)
    }
    render() {
        return (
            <div className="cl-layout">
                {/* <C_header showHideIcon={false} themeName={"禾子空气净化器"}/> */}
                <div className="map—box">
                   <Map />
                </div>
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
const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux

export default createFormMain_redux;
