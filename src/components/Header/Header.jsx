import React from 'react';
import s from './header.module.css';
import logo from "../../img/l.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logoutMe}>Выйти</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;