import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
    id?: number
}


let dialogs: Array<DialogItemPropsType> = [
    {name: 'Dimych', id: 1},
    {name: 'Anna', id: 1},
    {name: 'Victor', id: 1},
    {name: 'Sasha', id: 1},
]

let messages: Array<MessagePropsType> = [
    {message: 'Hi!', id: 1},
    {message: 'How are you?', id: 1},
    {message: 'I\'m fine, thanks!', id: 1},
]

let dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
let messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>);

const DialogItem = (props: DialogItemPropsType) => {
    return <NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>
        {props.name}
    </NavLink>
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs: React.FC = () => {
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