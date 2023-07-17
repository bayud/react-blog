import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BlogPages from "./pages/BlogPages";
import appState from "./store/mobx";
import EditPage from "./pages/EditPage";
import {BrowserRouter, HashRouter, Navigate, Route, Routes, Link, Switch, Redirect} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
	const [showDialog, setShowDialog] = useState(true);

    return (

        <BrowserRouter basename="/view">
            <title>心情空间</title>
            <Routes>
                <Route path="/" element={<Navigate to="/blog" />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/blog" element={<BlogPages/>}/>
                <Route path="/edit" element={<EditPage appState={appState}/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
	          {showDialog && (
        <div className="overlay">
          <div>底部弹出框</div>
        </div>
      )}
        </BrowserRouter>);
}

export default App;
