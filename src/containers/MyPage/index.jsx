import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Link} from "react-router-dom";
import { Link } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//antd-mobile
import { PullToRefresh, ListView, Button } from "antd-mobile";
import { createForm } from "rc-form";
// import "./index.less";
 import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
// request请求
import { request, requestaxios } from "../../util/request";

import CommonHeader from '../../components/CommonHeader';

class childe extends Component {
    constructor(props) {
        super(props);
        this.rData = [];
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
            handoffPage: false
        };
    }
    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }
    componentDidMount() {
        console.log('----',this.props);
        const { handoffPage } = this.props;
        if (handoffPage != this.state.handoffPage && handoffPage) {
            this.setState({
                handoffPage
            })
            const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
            // simulate initial Ajax
            let apiUrl = `http://localhost:3000/ssy?pageNumber=1&pageIndex=10&query=web`;
            requestaxios(apiUrl).then(data => {
                console.log(data);
                if (data.data.status == 200) {
                    console.log(data.data);
                    this.rData = data.data.data;
                    setTimeout(() => {
                        this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(data.data.data),
                            height: hei,
                            refreshing: false,
                            isLoading: false,
                        });
                    }, 600);

                }
            })
        }

    }
    onRefresh = () => {
        const { pageIndex } = this.state;

        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        let apiUrl = `http://localhost:3000/ssy?pageNumber=1&pageIndex=10&query=web`;
        requestaxios(apiUrl).then(data => {
            if (data.data.status == 200) {
                console.log(data.data);
                this.rData = data.data.data;
                setTimeout(() => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.rData),
                        refreshing: false,
                        isLoading: false,
                    });
                }, 600);
            }
        })
    };
    onEndReached = (event) => {
        // load new data
        const { pageIndex } = this.state;
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        // simulate initial Ajax
        // let apiUrl = `http://localhost:3000/ssy?0&source=${pageIndex}&query=web`;
        let apiUrl = `http://localhost:3000/ssy?pageNumber=1&pageIndex=10&query=web`;
        requestaxios(apiUrl).then(data => {
            if (data.data.status == 200) {
                this.rData = [...this.rData, ...data.data.data];
                setTimeout(() => {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(this.rData),
                        isLoading: false,
                    });
                }, 1000);
            }
        })
    }

    render() {
        let index = this.rData.length - 1;
        console.log(this.rData);
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = this.rData.length - 1;
            }
            const obj = this.rData[index--];
            /**
             * 我感觉rowData==obj
             */
            return (
                <Link to={{ pathname: "/job_details/?job_name" + "=" + rowData.job_name + "&" + "companyName=" + rowData.corporate_name, params: { name: rowData.job_name, companyName: rowData.corporate_name } }} >
                    <div keys={rowID} className="list-box">
                        <img className="list-hr_img" src={rowData.hr_img} />
                        <div className="list-box2">
                            <div className="list-title">
                                <h4>{rowData.job_name}</h4>
                                <span>{rowData.job_wahes}</span>
                            </div>
                            <div className="list-corporate_name">{rowData.corporate_name}</div>
                            <div className="list-msg">
                                <em>{rowData.company_address}</em>
                                <em>{rowData.working_life}</em>
                                <em>{rowData.education}</em>
                            </div>
                        </div>
                    </div>
                </Link>

            );
        };
        return (
            <div className="c-search-homePage">
                <CommonHeader showHide={"show"} />
                <ListView

                    key={this.state.useBodyScroll ? '0' : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>Pull to refresh</span>}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : '已经到底了'}
                    </div>)}
                    renderRow={row}
                    // renderSeparator={separator}
                    useBodyScroll={this.state.useBodyScroll}
                    style={this.state.useBodyScroll ? {} : {
                        height: this.state.height,
                        border: '1px solid #ddd',
                        margin: '5px 0',
                    }}
                    pullToRefresh={<PullToRefresh
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                    onEndReached={this.onEndReached}
                    pageSize={10}
                />
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
const createFormMain_redux = connect(mapStateToProps)(createForm()(childe)); // 连接redux

export default createFormMain_redux;
