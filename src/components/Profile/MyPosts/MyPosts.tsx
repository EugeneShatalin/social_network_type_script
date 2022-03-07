import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'

export type PostType = {
    post: string,
    likesCount: number,
    id?: number
}

const MyPosts: React.FC = () => {

    const posts: Array<PostType> = [
        {post: 'My post number 1', likesCount: 12, id: 1},
        {post: 'My post number 2', likesCount: 23, id: 2},
        {post: 'My post number 3', likesCount: 44, id: 3},
    ]

    let postsElements = posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>);

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