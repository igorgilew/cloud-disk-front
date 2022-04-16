import React, {useEffect, useState} from 'react';
import "./App.css"
import Navbar from "./components/common/navbar/Navbar";
import {useDispatch} from "react-redux";
import {authByToken} from "./actions/login";
import AppRouter from "./router/AppRouter";
import Loader from "./components/common/loader/Loader";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authByToken())
            .finally(() =>
                setIsLoading(false)
            )
    }, [])

    return (
        <div className={"container"}>
            <Navbar/>
            {isLoading ?
                <Loader/>
                :
                <AppRouter/>
            }
        </div>
    );
};

export default App;