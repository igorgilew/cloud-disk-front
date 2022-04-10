import React from 'react';
import cl from './page404.module.css'

const NoPageFound = () => {
    return (
        <div className={cl.container}>
            <h1>404</h1>
            <span>Ой... Такой страницы у нас нет!</span>
        </div>
    );
};

export default NoPageFound;