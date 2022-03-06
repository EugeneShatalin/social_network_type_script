import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

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
                <DialogItem name={'Dimych'} id={1}/>
                <DialogItem name={'Anna'} id={2}/>
                <DialogItem name={'Victor'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How are you?'}/>
                <Message message={`I'm fine, thanks!`}/>
            </div>
        </div>
    );
};

export default Dialogs;