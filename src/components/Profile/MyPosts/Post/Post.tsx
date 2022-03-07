import React from 'react';
import style from './Post.module.css'
import {PostType} from "../MyPosts";

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={style.post}>
            <div>{props.post}</div>
            <div>likes: {props.likesCount}</div>
        </div>
    );
};

export default Post;