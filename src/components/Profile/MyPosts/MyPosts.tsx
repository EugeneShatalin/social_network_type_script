import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {ProfilePropsType} from "../Profile";

const MyPosts = (props: ProfilePropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>);

    return (
        <div>
            <textarea placeholder={'Enter your text'}></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div className={style.my_posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;