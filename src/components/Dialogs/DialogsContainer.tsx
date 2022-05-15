import React from 'react';
import {ActionsTypes, DialogsPageType, ProfilePageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {EmptyObject, Store} from "redux";
import Dialogs from "./Dialogs";


export type DialogsPropsType = {
    store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, ActionsTypes>
}

const DialogsContainer = (props: DialogsPropsType) => {

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
       <Dialogs state={props.store.getState().dialogsPage} sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}/>
    );
};

export default DialogsContainer;