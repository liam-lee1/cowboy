import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { Router,browserHistory } from 'react-router'
import store from "./store/index"

ReactDOM.render(
    <Provider store={store}>
        <Router routes={AppRoutes} history={browserHistory} queryKey={false}></Router>
    </Provider>,
    document.getElementById('root')
);