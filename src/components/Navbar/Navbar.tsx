import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={'nav'}>
            <div>
                <NavLink  to="/profile" className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`} >Profile</NavLink>
            </div>
            <div>
                <NavLink  to="/dialogs" className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink  to="/news" className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}>News</NavLink>
            </div>
            <div>
                <NavLink  to="/music" className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}>Music</NavLink>
            </div>
            <div>
                <NavLink  to="/settings" className={({ isActive }) => isActive ? `${s.active}` : `${s.link}`}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;