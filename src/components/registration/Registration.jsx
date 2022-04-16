import React, {useState} from 'react';
import Input from "../common/input/Input";
import classes from "./registration.module.css";
import {registration} from "../../actions/registration";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const reg = (email, password) => {
        const userRegData = {
            email,
            password
        }

        registration(userRegData)
            .then((response) => {
                alert("успех");
                setEmail("");
                setPassword("")
            })
            .catch(error => {
                alert(error)
            });
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