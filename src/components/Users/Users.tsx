import React from 'react';
import {UsersConMapDispatchToPropsType, UsersConMapStateToPropsType} from "./UsersContainer";

type UsersPropsType = UsersConMapStateToPropsType & UsersConMapDispatchToPropsType

const Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photo: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
                followed: false,
                fullName: 'Jonik',
                status: 'I understand REACT.js',
                location: {
                    city: 'Ereymentau',
                    country: 'Kazachstan'
                }
            },
            {
                id: 2,
                photo: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
                followed: true,
                fullName: 'Victor',
                status: 'I understand REACT.js',
                location: {
                    city: 'Ereymentau',
                    country: 'Kazachstan'
                }
            },
            {
                id: 2,
                photo: 'https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg',
                followed: false,
                fullName: 'Miha',
                status: 'I understand REACT.js',
                location: {
                    city: 'Ereymentau',
                    country: 'Kazachstan'
                }
            },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photo} alt=""/>
                </div>
                <div>
                    {
                        u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
                </div>)
            }
        </div>
    );
};

export default Users;