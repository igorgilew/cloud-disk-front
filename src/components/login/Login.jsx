import React, {useState} from 'react';
import classes from "./login.module.css";
import Input from "../common/input/Input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={classes.container}>
            <div>
                <h3>Вход</h3>
            </div>
            <Input className={classes.email} placeholder={"Введите email"} setValue={setEmail}/>
            <Input className={classes.password} placeholder={"Введите пароль"} setValue={setPassword}/>
            <button className={classes.btn} onClick={()=> console.log(email)}>Войти</button>
        </div>
    );
};

export default Login;