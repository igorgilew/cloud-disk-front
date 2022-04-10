import React from 'react';
import cl from "./navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.container}>
            <div className={cl.logo}>
                <h3>Cloud Disk App</h3>
            </div>
            <div className={cl.nav}>
                <Link className={cl.link} to="/login">Войти</Link>
                <Link className={cl.link} to="/registration">Регистрация</Link>
            </div>
        </div>
    );
};

export default Navbar;