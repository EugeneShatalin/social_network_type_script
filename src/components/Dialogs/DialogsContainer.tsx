import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    InitialStateDialogsReducerType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";


export type DialogsConMapStateToPropsType = {
    dialogsPage: InitialStateDialogsReducerType
}

export type DialogsConMapDispatchToPropsType = {
    sendMessage: (body: string) => void
    updateNewMessageBody: () => void
}

let mapStateToProps = (state: AppStateType): DialogsConMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): DialogsConMapDispatchToPropsType => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;