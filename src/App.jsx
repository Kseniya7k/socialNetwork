import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-body-img">
                <div className="app-img">
                    <div className='app-wrapper'>
                        <Header/>
                        <Nav/>
                        <div className='app-wrapper-content'>
                            <Route exact path="/dialogs"
                                   render={() => <DialogsContainer />}/>
                            <Route exact path="/profile"
                                   render={() =>
                                       <Profile />
                                   }
                            />
                            <Route exact path="/news" render={() => <News/>}/>
                            <Route exact path="/music" render={() => <Music/>}/>
                            <Route exact path="/findUsers" render={() => <FindUsersContainer/>}/>
                            <Route exact path="/settings" render={() => <Settings/>}/>
                            <Route path="/friends" render={() => <Friends/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

