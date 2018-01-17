import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile
import { NavBar, Icon } from 'antd-mobile';
 import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// import "./index.less";

// request请求
// import { request, requestaxios } from "../../util/request";
import { requestaxios } from "../../util/request";


class childe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
   
    }
    _goBack=()=>{
        const { history } = this.props;
        history.goBack()
    }
    render() {
        console.log("---", this.props.showHideIcon)
        return (
            <div className="cl-header">
                <NavBar
                    mode="light"
                    icon={this.props.showHideIcon ? <Icon type="left" /> : ""}
                    onLeftClick={() => this.props.showHideIcon ? this._goBack() : ""}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >{this.props.themeName}</NavBar>
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
const createFormMain_redux = connect(mapStateToProps)(withRouter(childe)); // 连接redux

export default createFormMain_redux;
