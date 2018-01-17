import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile
import { Carousel, Card, Button, Icon } from 'antd-mobile';
// import { createForm } from "rc-form";
// import "./index.less";
 import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// request请求
// import { request, requestaxios } from "../../util/request";
import { requestaxios } from "../../util/request";

// import Header from "../Header/index";
// const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
// const data = size.map(item => ({
//     icon: (<Icon type="search" size={item} />),
//     text: item,
// }));
const IconStyle = {
    background: '#red'
}
class childe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 400,
            slideIndex: 0,
            signIconStyle: 1
        };
    }
    componentDidMount() {
        this._init()
    }
    _init = () => {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    _changeIcon = () => {
        const { signIconStyle } = this.state
        this.setState({
            signIconStyle: this.state.signIconStyle + 1,
        })

        console.log(signIconStyle % 2)
    }
    render() {
        let { signIconStyle } = this.state
        return (
            <div className="cl-pleasepay">
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map((val, i) => (
                        <div
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            key={val}>
                            <Card full>
                                <Card.Header
                                    // title="This is title"
                                    thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                                // extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    {/* <div>This is content of `Card`</div> */}
                                    <h3>{val}</h3>空气净化时长1小时
                                </Card.Body>
                                <Card.Footer
                                    content={
                                        <div className="iconCheckBtn"
                                        >
                                            <Icon style={{ color: '#red', display: 'inlineBlock' }} onClick={() => { this._changeIcon() }} type={signIconStyle % 2 ? 'check-circle' : 'check-circle-o'} size={"xs"} />
                                            点击支付即同意
                                            <Link to={{ pathname: "/userprotocol" }}>用户协议</Link>
                                            </div>} extra={<div></div>} />
                            </Card>

                        </div>
                    ))}
                </Carousel>
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
