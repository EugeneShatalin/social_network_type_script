import {ActionsTypes} from "./redux-store";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>

export type SendMessageActionType = ReturnType<typeof sendMessageCreator>

export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    id?: number
    message: string
}

export type InitialStateDialogsReducerType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

let initialState: InitialStateDialogsReducerType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sasha'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I\'m fine, thanks!'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state: InitialStateDialogsReducerType = initialState, action: ActionsTypes): InitialStateDialogsReducerType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default:
            return state;
    }
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

export default dialogsReducer;