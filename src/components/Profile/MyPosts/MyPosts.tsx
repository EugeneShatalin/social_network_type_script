import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts: React.FC = () => {
    return (
        <div className={style.my_posts}>
            <Post post={"My post number 1"} likes={12}/>
            <Post post={"My post number 2"} likes={23}/>
            <Post post={"My post number 3"} likes={44}/>
        </div>
    );
};

export default MyPosts;