import React, { Component } from "react"; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

//连接redux
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//导入action
// import { } from '../../../store/action';

//util
import Bus from '../../util/onfire';

//antd-mobile
import { TabBar } from "antd-mobile";
import { createForm } from "rc-form";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'
import "./index.less";


//引入地图
import { ReactAMAP, Map, Markers } from 'react-amap';
import Geolocation from 'react-amap-plugin-geolocation';

//自身坐标定位
const pluginProps = (() => {
    return () => ({
        enableHighAccuracy: true,
        timeout: 10000,
        showButton: true
    })
})()

const mark_style = {
    border: '1px solid red',
    width: '40px',
    backgroundColor: '#fff',
    padding: '8px',
    height: '40px'
}
const mark_style_out = {
    padding: '8px',
    backgroundColor: '#000',
    color: '#fff',
    border: '1px solid #fff',
};
const alphabet = 'ABCDEFGHIJKLMNOP'.split('');
const randomMarker = (len) => (
    Array(len).fill(true).map((e, idx) => ({
        position: {
            longitude: 100 + Math.random() * 30,
            latitude: 30 + Math.random() * 20,
        },
        myLabel: alphabet[idx],
        myIndex: idx + 1,
    }))
);
class childe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pluginProps: pluginProps(),
            markInfo: "",
            useCluster: false,
        }
        this.markers = randomMarker(10);
        this.mapCenter = { longitude: 115, latitude: 40 };
        var _this = this;
        this.markerEvents = {
            click(e, marker) {
                // 通过高德原生提供的 getExtData 方法获取原始数据
                const extData = marker.getExtData();
                console.log(extData)
                const index = extData.myIndex;
                _this._showMarkInfo(index)
                console.log(extData === _this.markers[index], `点击的是第${index}号坐标点`);
            },
            // mouseover: (e, marker) => {
            //     marker.render(this.renderMouseoverLayout);
            // },
            // mouseout: (e, marker) => {
            //     marker.render(this.renderMarkerLayout);
            // }
        }
        const markerStyle = {
            padding: '5px',
            border: '10px solid red',
            background: '#fff',
        };
        this.renderMarkerFn = (extData) => (
            <div style={markerStyle}>{extData.myIndex}</div>
        );
    }
    _showMarkInfo = (i) => {
        this.setState({
            markInfo:`现在点击的是${i}`
        }, () => {
            let markInfo = document.getElementsByClassName("markInfo")[0]
            if (markInfo) {
                markInfo.style.left = (window.screen.width - 300) / 2 + "px";
                console.log((window.screen.width - 300) + "px")

            }
        })
    }
    componentDidMount() {
        console.log('asdasd', pluginProps())
        Bus.on('getCurrentPosition', (e) => {
            if (e == 1) {
                // console.log(111)
                // this.setState({
                //     pluginProps: pluginProps()
                // })
            }
        })
        console.log('kaishi')

    }
    //自定义mark点样式
    // renderMarkerLayout(extData) {
    //     if (extData.myIndex === 3) {
    //         return false;
    //     }
    //     console.log("----", extData)
    //     return <div style={mark_style}>{extData.myLabel}</div>
    // }
    renderMouseoverLayout(extData) {
        if (extData.myIndex === 3) {
            return false;
        }
    
        return <div style={mark_style}>{extData.myLabel}</div>
    }

    renderMarkerLayout(extData) {
        if (extData.myIndex === 3) {
            return <div style={mark_style_out}>擦尼玛</div>
    
        }
        console.log(extData)
        return <div style={mark_style_out}>{extData.myLabel}</div>
        
    }

    render() {
        const events = {
            click: () => { console.log('You clicked') },
        }
        return (
            <Map amapkey={"7f55698103564f31822dcd0bdc3769af"} plugins={['ToolBar']} center={this.mapCenter} zoom={15} >

                <Geolocation events={events}  {...this.state.pluginProps } />
                <Markers
                    events={this.markerEvents}
                    markers={this.markers}
                    extData={this.markerExtData}
                    useCluster={this.state.useCluster}
                    render={this.renderMarkerLayout}
                />
                {((markInfo) => {
                    return markInfo ? <div className="markInfo">{markInfo}
                    <div className="goDetailBtn">按钮</div>
                    </div> : ""
                })(this.state.markInfo)}
            </Map>
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
