import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BlogPages from "./pages/BlogPages";
import EditPage from "./pages/EditPage";
import { BrowserRouter, HashRouter, Navigate, Route, Routes, Link, Switch, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BottomNotice from "./compnent/notice/BottomNotice";
import ConfirmModal from "./compnent/notice/ConfirmDialog";
import { observer } from "mobx-react";
import App from "antd/es/app";


const myApp = () => (<App>
    <BrowserRouter basename="/view">
        <Routes>
            <Route path="/" element={<Navigate to="/blog" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog" element={<BlogPages />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
        <BottomNotice />
    <ConfirmModal />
</App>);


export default observer(myApp);
