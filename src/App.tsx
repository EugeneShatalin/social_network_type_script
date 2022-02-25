import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'content'}>Main content</div>
        </div>
    );
}

export default App;
