import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link,withRouter } from "react-router-dom";
import { withRouter } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile
import { NavBar, Icon, TextareaItem, SegmentedControl, Popover } from "antd-mobile";
import { createForm } from "rc-form";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
import "./index.css";
// request请求
// import { request, requestaxios } from "../../util/request";
import { requestaxios } from "../util/request";

// import Header from "../Header/index";
const selectedData = {
    '经验': ['不限', '应届生', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上'],
    '学历': ['不限', '中专及以下', '高中', '大专', '本科', '硕士', '博士'],
    '薪资': ['不限', '3K以下', '3-5K', '5-10K', '10-15K', '15-20K', '20-30K', '30-50K'],
    '规模': ['不限', '0-20人', '20-99人', '100-499人', '500-999人', '1000-9999人', '10000人以上',],
    '融资': ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '已上市', '不需要经验']
}
class childe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHide: 'show',
            showHideIcon: false,
            visible: false,
            selected: '',
            mengBanShow: false,
            conditionScreeningData: [],
            selectionConditionsData: ['经验', '学历', '薪资', '规模', '规模', '融资'],
            selectIndex: '',
            selectListIndex: 0,
            localCity: '杭州',
            companyName: "公司"
        };
    }
    componentDidMount() {
        const { showHide, location, showHideIcon } = this.props;
        if (location.params) {
            this.setState({
                showHide,
                showHideIcon,
                companyName: location.params.companyName
            })
        }
    }

    _goBack = () => {
        const { history } = this.props;
        history.goBack()
    }
    onChange = (e) => {
        this.setState({
            visible: false,
            mengBanShow: true,
            conditionScreeningData: selectedData[e]
        })
    }
    onValueChange = (i=0) => {
        this.setState({
            mengBanShow: false,
            selectListIndex: i
        })
        console.log(i);
    }
    _hideMengBan = () => {
        this.setState({
            mengBanShow: false
        })
    }
    render() {
        const { showHide } = this.props;
        return (
            <div className="c-com-header">
                {((showHide) => {
                    if (showHide == 'show') {
                        return (
                            <div className="c-show-header">
                                <NavBar
                                    mode="light"
                                    icon={this.state.showHideIcon ? <Icon type="left" /> : ""}
                                    onLeftClick={() => this.state.showHideIcon ? this._goBack() : ""}
                                    rightContent={[
                                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                                        <Icon key="1" type="ellipsis" />,
                                    ]}
                                >
                                    <TextareaItem
                                        title={this.state.localCity}
                                        placeholder="请输入职位或公司"
                                        clear
                                    />
                                </NavBar>
                                <div className="filter-bar">
                                    <ul>
                                        {
                                            this.state.selectionConditionsData.map((v, i) => (
                                                <li key={i} className={this.state.selectIndex == i ? 'selected' : ''} onClick={() => { this.setState({ selectIndex: i }, () => { this.onChange(v) }) }}>{v}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="mengBan" style={{ display: this.state.mengBanShow ? 'block' : "none" }} onClick={() => { this._hideMengBan() }}>
                                    {/* <div className={typeof this.state.selectIndex == Number ? 'selected' : ''} */}
                                    <div
                                        style={{
                                            marginTop: '89px',
                                            padding: '0 15px',
                                            marginRight: '-15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            zIndex: '1111',
                                            position: 'relative',
                                            background: '#ffffff',
                                        }}
                                    >
                                        {this.state.conditionScreeningData.map((v, i) => (
                                            <div className="selectList" style={{ backgroundColor: this.state.selectListIndex == i ? '#f8f8fa' : '' }} key={i} onClick={() => { this.onValueChange(i) }} >{v}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <NavBar
                                // mode="dark"
                                // leftContent="Back"
                                mode="light"
                                icon={this.state.showHideIcon ? <Icon type="left" /> : ""}
                                onLeftClick={() => this.state.showHideIcon ? this._goBack() : ""}
                                rightContent={[
                                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                                    // <Icon key="1" type="ellipsis" />,
                                ]}
                            >
                                {this.state.companyName}
                                {/* <TextareaItem
                                    title={this.state.companyName}
                                    placeholder="please input content"
                                    clear
                                /> */}
                            </NavBar>
                        )
                    }
                })(showHide)}
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
};
// 将 action 作为 props 绑定到 Product 上。我感觉是把actions方法添加到props上
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     actions: bindActionCreators({ }, dispatch) //发射action中的方法
// });

// const createFormLogin_redux = connect(mapStateToProps, mapDispatchToProps)(createForm()(Login)); // 连接redux
const createFormMain_redux = connect(mapStateToProps)(withRouter(childe)); // 连接redux

export default createFormMain_redux;
