import {ActionsTypes, DialogsPageType} from "./store";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>

export type SendMessageActionType = ReturnType<typeof sendMessageCreator>

let initialState = {
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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({message: body, id: 6})
            return state;
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