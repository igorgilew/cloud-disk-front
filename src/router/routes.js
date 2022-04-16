import Panel from "../components/panel/Panel";
import React from "react";
import NoPageFound from "../components/common/no-page-found/NoPageFound";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";

export const privateRoutes = [
    {path: "/", element: Panel},
    {path: "*", element: NoPageFound},
];

export const publicRoutes = [
    {path: "/login", element: Login},
    {path: "/registration", element: Registration},
]