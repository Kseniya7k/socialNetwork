import React from 'react';
import classes from './header.module.css';
import logo from "../../img/l.png";

const Header = () => {
    return (
        <header className={classes.header}>
        <img src={logo} />
        </header>
    )
}

export default Header;