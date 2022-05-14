import {ActionsTypes, DialogsPageType} from "./state";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>

export type SendMessageActionType = ReturnType<typeof sendMessageCreator>

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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