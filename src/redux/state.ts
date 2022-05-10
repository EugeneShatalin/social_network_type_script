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

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: () => void) => void
}

let store: storeType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    addPost() {
        let newPost: PostType = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    }
}

export default store
