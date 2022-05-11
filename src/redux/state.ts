export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
    id?: number
}

export type PostType = {
    post: string
    likesCount: number
    id?: number
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type ActionTypeAddPost = {
    type: 'ADD-POST'
}

type ActionTypeUpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionsTypes = ActionTypeAddPost | ActionTypeUpdateNewPostText

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
    subscribe: (callback: () => void) => void
}

let store: StoreType = {
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
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
            }
}

export default store
