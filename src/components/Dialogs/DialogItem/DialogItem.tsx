import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import {DialogItemPropsType} from "../../../redux/store";


const DialogItem = (props: DialogItemPropsType) => {
    return <NavLink to={'/dialogs/' + props.id} className={s.dialog + ' ' + s.active}>
        {props.name}
    </NavLink>
};

export default DialogItem;