import React from 'react';
import Registration from "./components/registration/Registration";
import "./App.css"
import Navbar from "./components/common/navbar/Navbar";
import Login from "./components/login/Login";
import {Route, Routes} from "react-router-dom";
import Panel from "./components/panel/Panel";
import NoPageFound from "./components/no-page-found/NoPageFound";

const App = () => {
    return (
        <div className={"container"}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Panel/>} />
                <Route path="login" element={<Login/>} />
                <Route path="registration" element={<Registration/>} />
                <Route path="*" element={<NoPageFound/>}/>
            </Routes>
        </div>
    );
};

export default App;