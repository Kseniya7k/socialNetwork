import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
// const rerenderEntireTree = () => {
//
// }

// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);