import React from 'react';
import cl  from "./loader.module.css";

const Loader = () => {
    return (
        <div>
            <div className={cl.loader}>

            </div>
            <h3 className={cl.title}>Загрузка приложения</h3>
        </div>

    );
};

export default Loader;