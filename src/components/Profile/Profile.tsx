import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, DialogsPageType, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";

export type ProfilePropsType = {
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, ActionsTypes>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store = {props.store}
            />
        </div>
    );
};

export default Profile;