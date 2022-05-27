import React from 'react';
import {UsersConMapDispatchToPropsType, UsersConMapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type UsersPropsType = UsersConMapStateToPropsType & UsersConMapDispatchToPropsType

const Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {
       axios.get("https://social-network.samuraijs.com/api/1.0/users")
           .then(response => {
              props.setUsers(response.data.items)
               console.log(response)
           })
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
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
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
            </span>
                </div>)
            }
        </div>
    );
};

export default Users;