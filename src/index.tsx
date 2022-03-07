import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
    id?: number
}

export type PostType = {
    post: string,
    likesCount: number,
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

const posts: Array<PostType> = [
    {post: 'My post number 1', likesCount: 12, id: 1},
    {post: 'My post number 2', likesCount: 23, id: 2},
    {post: 'My post number 3', likesCount: 44, id: 3},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
