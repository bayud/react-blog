import React from 'react';
import ReactDOM from 'react-dom';
import {Layout, theme} from 'antd';
import RecordList from "../compnent/RecordList";
import {EditOutlined, EditFilled} from '@ant-design/icons';
import { BrowserRouter, HashRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import EditPage from "./EditPage";

const {Header, Content, Footer, Sider} = Layout;


const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 200,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#edeedf',
};
const editStyle = {
    position: "fixed",
    bottom: "100px",
    right: "40px",
    fontSize: 50,
    color: '#a094a0'
};


const records = ([...Array(15).keys()]).map((item, i) => ({
    name: "cx",
    date: "07月06日18:00",
    content: "第" + i + "條內容"
}));

const BlogPagesBak = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    console.log("records", records);
    return (
        <Layout>
            <Layout>
                <Header style={headerStyle}>
                    <div className="demo-logo" style={{color: '#ad90b2'}}/>
                </Header>
                <RecordList records={records}/>
                <Footer style={{textAlign: 'center'}}>到底部了...</Footer>
            </Layout>
        </Layout>


    );
};

// 父组件
function ParentComponent(Comp) {
    return (props) => (
        <div className="parent-container">
            {/* 其他组件渲染 */}
            <Comp {...props}/>
            {/* 在上方渲染的组件 */}
            <Link to='/edit' component={EditPage}><EditOutlined style={editStyle}/></Link>
        </div>
    );
}



export default ParentComponent(BlogPagesBak);