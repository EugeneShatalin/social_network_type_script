import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {PostType} from "../../../index";

type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {

   let postsElements = props.posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>);

   let newPostElement:  React.RefObject<HTMLTextAreaElement> = React.createRef();

   const addPost = () => {
       if(newPostElement.current) {
           alert(newPostElement.current.value)
       }
   }

    return (
        <div>
            <textarea ref={newPostElement} placeholder={'Enter your text'}></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.my_posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;