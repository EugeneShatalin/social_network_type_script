import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {dialogsPageType} from "../../redux/state";



export type DialogsPropsType = {
    state:  dialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    console.log(props.state)
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));

    let messagesElements = props.state.messages.map(m => (<Message key={m.id} message={m.message}/>));

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