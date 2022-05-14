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
    newMessageBody: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>

type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ActionsTypes =

    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
    subscribe: (callback: () => void) => void
}

export const addPostActionCreator = () => {
    return {
        type:'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
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
            ],
            newMessageBody: '',
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
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({message: body, id: 6})
            this._callSubscriber();
        }
    }
}

export default store
