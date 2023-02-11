import React from 'react';
import User from '../User/User';
import s from "./style.module.css"

const UserContainer = () => {
    const users = [
        {id: 1, name: 'Иван', lastname: 'Ушанов', age: 30},
        {id: 2, name: 'Ольга', lastname: 'Степанова', age: 28},
        {id: 3, name: 'Семен', lastname: 'Иванов', age: 19},
        {id: 4, name: 'Степан', lastname: 'Петров', age: 26},
        {id: 5, name: 'Екатерина', lastname: 'Игорева', age: 45},
        {id: 6, name: 'Анатолий', lastname: 'Сидоров', age: 67}
      ]
    return (
        <div  className={s.card}>
            {
            users.map(user => <User key={user.id} {...user}/>)
            }
        </div>
    );
};

export default UserContainer;