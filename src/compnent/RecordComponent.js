import React, {Component} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import BlogAvatar from "../compnent/BlogAvatar";
import notice from "../store/notice";
import {delete_blog_data} from "../constant/ajax_config";
import {useNavigate} from "react-router-dom";
import {cache_data, cache_data_content} from "../util/cache_data";

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
    const navigate = useNavigate();

    const reedit = (props) => {
        cache_data_content(props.content);
        const id = props.id;
        navigate(`/edit?id=${id}`);
    };

    const deleteRecord = (props) => {
        const data = {
            id: props.id
        };
        delete_blog_data(data, () => {
        }, () => {
        })
    };

    const handleClick = () => {
        notice.bottomShow(
            [
                {
                    value: "编辑",
                    func: (props) => {
                        reedit(props);
                    }
                },
                {
                    value: "删除",
                    func: (props) => deleteRecord(props)
                },
                {
                    value: "取消",
                    func: () => notice.bottomHide()
                }
            ],
            props,
            notice.bottomHide
        )
    };

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const get_date = (dateStr) => {
        const date = new Date(dateStr);
        return date.getFullYear() + "年" + String(date.getMonth() + 1).padStart(2, '0') + "月" + String(date.getDate()).padStart(2, '0') + "日 "
            + String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0");
    };

    return (
        <Layout style={{padding: '0 0px', background: colorBgContainer}} recordId={props.id}>
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
                    <Sider style={{background: colorBgContainer}}>
                        <h1 style={{position: "relative"}}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                margin: 0,
                                fontSize: 50,
                                color: "#a29ca8",
                                transform: "translate(0%, -100%)"
                            }} onClick={handleClick}>...
                            </div>
                        </h1>
                    </Sider>
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

