import React from "react";
// import { Router } from "react-router";
// import { BrowserRouter, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//连接store
import { Provider } from "react-redux";
import store from "../store";

//公共组件
import UserProtocol from '../components/UserProtocol';



import HZloginPage from '../containers/HZloginPage';
import LoginPage from '../containers/LoginPage';
import LayoutPage from "../containers/LayoutPage";
import MyTeam from "../containers/MyTeam";
import PleasePay from '../containers/PleasePay';
import UseAbnormality from '../containers/UseAbnormality';





store.subscribe(() => {
    console.log('store.getState()', store.getState());
})
const App = () => (
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route exact path='/' component={MyTeam} />
                <Route path='/login' component={LoginPage} />
                <Route path='/layout' component={LayoutPage} />
                <Route path='/myteam' component={MyTeam} />
                <Route path='/pleasepay' component={PleasePay} />
                <Route path='/userprotocol' component={UserProtocol} />
                <Route path='/useabnormality' component={UseAbnormality} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

export default App