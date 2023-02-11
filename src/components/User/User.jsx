import React from 'react';
import s from './style.module.css'

const User = ({name, lastname, age}) => {
    return (
    <div className = {s.card}>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{age}</p>  
    </div>
    );
};

export default User;