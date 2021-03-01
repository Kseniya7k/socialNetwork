import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    const { appState, updateNewPostText, addPost } = props;
    const { dialogsPage, profilePage } = appState;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs"
                           render={() => <Dialogs
                               messages={dialogsPage.messages}
                               interlocutors={dialogsPage.interlocutors}/>}/>
                    <Route exact path="/profile"
                           render={() =>
                               <Profile massagesPosts={profilePage.massagesPosts}
                                        addPost={addPost}
                                        newPostText={profilePage.newPostText}
                                        updateNewPosText={updateNewPostText}/>
                           }
                    />
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

