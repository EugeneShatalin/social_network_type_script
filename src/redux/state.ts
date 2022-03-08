import {DialogItemPropsType, MessagePropsType, PostType} from "../index";

export type dialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

export type profilePageType = {
    posts: Array<PostType>
}

export type stateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}

export let state: stateType = {
    dialogsPage: {
        dialogs: [
            {name: 'Dimych', id: 1},
            {name: 'Anna', id: 1},
            {name: 'Victor', id: 1},
            {name: 'Sasha', id: 1},
        ],
        messages: [
            {message: 'Hi!', id: 1},
            {message: 'How are you?', id: 1},
            {message: 'I\'m fine, thanks!', id: 1},
        ]
    },
    profilePage: {
        posts: [
            {post: 'My post number 1', likesCount: 12, id: 1},
            {post: 'My post number 2', likesCount: 23, id: 2},
            {post: 'My post number 3', likesCount: 44, id: 3},
        ],
    }
}