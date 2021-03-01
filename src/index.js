import React from 'react';
import state, {addPost, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const log = () => {
    console.log('state was changed')
}

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
subscribe(log);