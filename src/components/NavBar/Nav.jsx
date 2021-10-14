import React from 'react';
import s from './nav.module.css';
import {NavLink} from "react-router-dom";
import avatar1 from "../../img/ava_Artem.jpg"
import avatar2 from "../../img/ava_Sacha.jpg"
import avatar3 from "../../img/ava_Nastya.jpg"

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/findUsers" activeClassName={s.activeLink}>Find Users</NavLink>
        </div>
        <div className={s.item}>
            <div className={s.itemGrid}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </div>
        <div className={s.item}>
            <div className={s.itemGrid}>
                <div>
                    <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
                </div>
                <div className={s.avatarsFriends}>
                    <img src={avatar1} alt={'Друзья'}/>
                    <img src={avatar2} alt={'Друзья'}/>
                    <img src={avatar3} alt={'Друзья'}/>
                </div>
            </div>
        </div>
    </nav>
}

export default Nav;