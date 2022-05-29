import React, {Component} from 'react';
import {UsersConMapDispatchToPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {InitialStateUsersReducerType} from "../../redux/users-reducer";
import s from './users.module.css';

type UsersPropsType = InitialStateUsersReducerType & UsersConMapDispatchToPropsType

class Users extends Component<UsersPropsType, InitialStateUsersReducerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
                console.log(response)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response)
            })
    }

    render() {

        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages: Array<number> = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={this.props.currentPage === p ? s.selectedPage : s.page}
                                         onClick={() => this.onPageChanged(p)}
                            >{p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                <div>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        alt="user image"
                        className={s.userPhoto}
                    />
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