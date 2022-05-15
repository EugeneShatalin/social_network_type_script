import React from 'react';
import {ActionsTypes, DialogsPageType, PostType, ProfilePageType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {EmptyObject, Store} from "redux";

type MyPostsType = {
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, ActionsTypes>
}

const MyPostsContainer = (props: MyPostsType) => {

    const addPost = () => {
        let action: ActionsTypes = addPostActionCreator();
        props.store.dispatch(action);
    }

    const onPostChange = (text: string) => {
        let action: ActionsTypes = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            posts={props.store.getState().profilePage.posts}
            newPostText={props.store.getState().profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
        />

    );
};

export default MyPostsContainer;