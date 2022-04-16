import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";

const AppRouter = () => {
    const isAuth = useSelector(({user}) => user.isAuth);

    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(pr =>
                    <Route key={pr.path} path={pr.path} element={<pr.element/>}/>
                )
                :
                publicRoutes.map(pr =>
                    <Route key={pr.path} path={pr.path} element={<pr.element/>}/>
                )
            }
            {!isAuth && <Route path={"*"} element={<Navigate to={"/login"} replace/>}/>}
        </Routes>
    );
};

export default AppRouter;