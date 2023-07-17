import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import BlogPages from "./pages/BlogPages";
import appState from "./store/mobx";
import EditPage from "./pages/EditPage";
import {BrowserRouter, HashRouter, Navigate, Route, Routes, Link, Switch, Redirect} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const myApp = {
    position: "relative",
    zIndex: 1
};

const dialogOverlay = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 2
};

const dialog = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "4px",
    marginBottom: "20px"
}


function App() {
    const [showDialog, setShowDialog] = useState(true);

    return (

        <BrowserRouter basename="/view" style={myApp}>
            <title>心情空间</title>
            <Routes>
                <Route path="/" element={<Navigate to="/blog"/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/blog" element={<BlogPages/>}/>
                <Route path="/edit" element={<EditPage appState={appState}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            {showDialog && (
                <div className="overlay" style={dialogOverlay}>
                    <div style={dialog}>底部弹出框</div>
                </div>
            )}
        </BrowserRouter>);
}

export default App;
