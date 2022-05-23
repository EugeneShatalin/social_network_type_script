import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {SendMessageActionType, UpdateNewMessageBodyActionType} from "./dialogs-reducer";

let rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer
    }
)

let store = createStore(rootReducer);

export default store;

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType