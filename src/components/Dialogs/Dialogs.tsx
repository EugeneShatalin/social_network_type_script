import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogItemPropsType, MessagePropsType, PostType} from "../../index";

export type DialogsPropsType = {
    dialogs:  Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));

    let messagesElements = props.messages.map(m => (<Message key={m.id} message={m.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;