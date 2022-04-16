import React from 'react';
import cl from "./navbar.module.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setLogout} from "../../../reducers/userReducer";

const Navbar = () => {

    const isAuth = useSelector(({user})=> user.isAuth);
    const dispatch = useDispatch();

    return (
        <div className={cl.container}>
            <div className={cl.logo}>
                <h3>Cloud Disk App</h3>
            </div>
            <div className={cl.nav}>
                {!isAuth && <Link className={cl.link} to="/login">Войти</Link>}
                {!isAuth && <Link className={cl.link} to="/registration">Регистрация</Link>}
                {isAuth && <div className={cl.link} onClick={() => dispatch(setLogout())}>Выйти</div>}
            </div>
        </div>
    );
};

export default Navbar;