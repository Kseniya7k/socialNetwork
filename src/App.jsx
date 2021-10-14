import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/FindUsers/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {isInitializeThunkCreator} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import FriendsContainer from "./components/Friends/FrendsContainer";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
                                <Route path="/friends" render={() => <FriendsContainer/>}/>
                                <Route path="/login" render={() => <Login/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize: isInitializeThunkCreator}))(App);

