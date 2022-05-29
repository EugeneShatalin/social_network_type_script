import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

type UsersComponentPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersComponentPropsType) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : s.page}
                                     onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
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
}

export default Users;