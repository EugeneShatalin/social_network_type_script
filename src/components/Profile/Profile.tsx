import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile: React.FC = () => {
    return (
        <div className={'profile'}>
            <textarea placeholder={'Enter your text'}></textarea>
            <div>
                <button>Add post</button>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;