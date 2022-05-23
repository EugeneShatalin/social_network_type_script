import profileReducer, { AddPostActionType, UpdateNewPostTextActionType } from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id?: number
}

type PostType = {
    post: string
    likesCount: number
    id?: number
}

type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type ActionsTypes =

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store
