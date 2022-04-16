import React, {useState} from 'react';
import Input from "../common/input/Input";
import classes from "./registration.module.css";
import {register} from "../../actions/reg";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const reg = () => {
        register(email, password)
            .then(()=>navigate("/login"))
    };

    return (
        <div className={classes.container}>
            <div>
                <h3>Регистрация</h3>
            </div>
            <Input className={classes.email} value={email} placeholder={"Введите email"} setValue={setEmail}/>
            <Input className={classes.password} type="password" value={password} placeholder={"Введите пароль"}
                   setValue={setPassword}/>
            <button className={classes.btn} onClick={() => reg()}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;