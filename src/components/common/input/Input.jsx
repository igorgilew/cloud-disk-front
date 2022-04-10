import React from 'react';

const Input = ({placeholder, setValue, value, className, type="text"}) => {
    return (
        <input
            className={className}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={(e)=>setValue(e.target.value)}
        />
    );
};

export default Input;