import React from 'react';
import './App.css';
import Nav from "./components/NavBar/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-body-img">
                <div className="app-img">
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Nav/>
                        <div className='app-wrapper-content'>
                            <Route exact path="/dialogs" render={() => <DialogsContainer />}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                            <Route exact path="/news" render={() => <News/>}/>
                            <Route exact path="/music" render={() => <Music/>}/>
                            <Route exact path="/findUsers" render={() => <UsersContainer/>}/>
                            <Route exact path="/settings" render={() => <Settings/>}/>
                            <Route path="/friends" render={() => <Friends/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

