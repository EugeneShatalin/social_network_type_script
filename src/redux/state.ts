let rerenderEntireTree = () => {
}

export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
    id?: number
}

export type PostType = {
    post: string,
    likesCount: number,
    id?: number
}

export type dialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
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
        newPostText: "IT-KAMASUTRA",
    }
}

export const addPost = () => {
    let newPost: PostType = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}