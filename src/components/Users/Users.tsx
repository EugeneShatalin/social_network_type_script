import React, {Component} from 'react';
import {UsersConMapDispatchToPropsType, UsersConMapStateToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {InitialStateUsersReducerType} from "../../redux/users-reducer";

type UsersPropsType = UsersConMapStateToPropsType & UsersConMapDispatchToPropsType

class Users extends Component<UsersPropsType, InitialStateUsersReducerType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    {
                        u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
    }

};

export default Users;