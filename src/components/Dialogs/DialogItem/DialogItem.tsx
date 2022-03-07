import React from 'react';
import {NavLink} from "react-router-dom";
import { DialogItemPropsType } from '../../../index';
import s from "../Dialogs.module.css";


const DialogItem = (props: DialogItemPropsType) => {
    return <NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>
        {props.name}
    </NavLink>
};

export default DialogItem;