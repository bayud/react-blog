import logo from './logo.svg';
import './App.css';
import React from "react";
import BlogPages from "./pages/BlogPages";
import appState from "./store/mobx";
import EditPage from "./pages/EditPage";
import {BrowserRouter, HashRouter, Navigate, Route, Routes, Link, Switch, Redirect} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
    return (

        <BrowserRouter basename="/view">
            <Routes>
                <Route path="/" element={<Navigate to="/blog" />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/blog" element={<BlogPages/>}/>
                <Route path="/edit" element={<EditPage appState={appState}/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>);
}

export default App;
