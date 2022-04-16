import React, {useState} from 'react';
import classes from "./login.module.css";
import Input from "../common/input/Input";
import {authByEmailAndPassword} from "../../actions/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        dispatch(authByEmailAndPassword({email, password}))
            .then(()=> navigate("/"))
    }

    return (
        <div className={classes.container}>
            <div>
                <h3>Вход</h3>
            </div>
            <Input
                className={classes.email}
                placeholder={"Введите email"}
                setValue={setEmail}
            />
            <Input
                className={classes.password}
                type="password"
                placeholder={"Введите пароль"}
                setValue={setPassword}
            />
            <button
                className={classes.btn}
                onClick={() => login()}
            >
                Войти
            </button>
        </div>
    );
};

export default Login;