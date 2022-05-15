import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {PostType} from "../../../redux/store";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>);

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
        }
    }

    return (
        <div>
            <textarea
                ref={newPostElement}
                value={props.newPostText}
                onChange={onPostChange}
            />
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.my_posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;