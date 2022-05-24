import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {DialogsConMapDispatchToPropsType, DialogsConMapStateToPropsType} from "./DialogsContainer";



export type DialogsPropsType = DialogsConMapStateToPropsType & DialogsConMapDispatchToPropsType

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));

    let messagesElements = props.dialogsPage.messages.map(m => (<Message key={m.id} message={m.message}/>));

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.updateNewMessageBody()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.sendMessage(body)
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