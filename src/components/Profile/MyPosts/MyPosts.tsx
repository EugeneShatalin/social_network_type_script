import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css'
import {ActionsTypes, PostType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type MyPostsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount}/>);

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        let action: ActionsTypes = addPostActionCreator();
        props.dispatch(action);
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            let action: ActionsTypes = updateNewPostTextActionCreator(text);
            props.dispatch(action);
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
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.my_posts}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;