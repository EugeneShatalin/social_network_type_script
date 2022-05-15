import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


export type DialogsPropsType = {
    state: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));

    let messagesElements = props.state.messages.map(m => (<Message key={m.id} message={m.message}/>));

    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder = 'Enter your message'
                            value = {newMessageBody}
                            onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;