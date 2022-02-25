import React from 'react';
import style from './Post.module.css'

type PostPropsType = {
    post: string,
    likes: number,
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={style.post}>
            <div>{props.post}</div>
            <div>likes: {props.likes}</div>
        </div>
    );
};

export default Post;