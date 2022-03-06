import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'

const MyPosts: React.FC = () => {
    return (
        <div>
            <textarea placeholder={'Enter your text'}></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div className={style.my_posts}>
                <Post post={"My post number 1"} likes={12}/>
                <Post post={"My post number 2"} likes={23}/>
                <Post post={"My post number 3"} likes={44}/>
            </div>
        </div>

    );
};

export default MyPosts;