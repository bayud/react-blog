import React, {Component} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import BlogAvatar from "../compnent/BlogAvatar";

const {Header, Content, Footer, Sider} = Layout;

const footerStyle = {
    textAlign: 'start',
    lineHeight: '0px',
    fontSize: 'small',
    height: 15,

};

const contentStyle = {
    textAlign: 'start',
    lineHeight: '6400px',
    height: 64,
    fontSize: 'large',
    color: '#4C464C',
};

const BaseRecord = (props) => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const get_date = (dateStr) => {
        const date = new Date(dateStr);
        return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };

    return (
        <Layout style={{padding: '0 0px', background: colorBgContainer}}>
            <Layout hasSider style={{
                display: 'flow layout', alignItems: 'center',
                padding: '0 20px',
                background: colorBgContainer, minHeight: 80
            }}>
                <Sider width={100} style={{background: colorBgContainer}}>
                    <BlogAvatar image_url={props.image_url}/>
                </Sider>
                <Layout style={{background: colorBgContainer}}>
                    <Content style={contentStyle}>
                        <p style={{
                            fontSize: 30,
                            color: '#050505',
                            lineHeight: 0,
                            textAlign: "start"
                        }}>{props.name}</p>
                    </Content>
                    <Content>
                        <p style={{
                            fontSize: "small",
                            color: '#a094a0',
                            lineHeight: 0,
                            textAlign: "start"
                        }}>{

                            get_date(props.date)

                        }</p>
                    </Content>
                </Layout>
            </Layout>
            <Content style={{padding: '0 20px'}}>
                <p style={{fontSize: "large"}}>{props.content}</p></Content>
        </Layout>
    );
};


export default class RecordComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<BaseRecord {...this.props}/>);
    }
};

