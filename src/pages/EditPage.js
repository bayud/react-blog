import React, {Component} from 'react';
import {Button, Input, Layout, theme} from 'antd';
import {Col, Row} from 'antd';
import {observer} from "mobx-react";
import RecordList from "../compnent/RecordList";
import {EditOutlined, EditFilled} from '@ant-design/icons';
import appState from "../store/mobx.decorator";
import {Link, useNavigate} from "react-router-dom";
import {cache_data, get_data} from "../util/cache_data";
import {post_content} from "../constant/ajax_config";

const {TextArea} = Input;
const {Header, Content, Footer, Sider} = Layout;


const BlogInput =
    React.forwardRef((props, ref) => <TextArea rows={10} placeholder="写下今天的心情" ref={ref} maxLength={1000} {...props}/>);


const BLOG_CACHE_KEY = "blog_cache_key";

function textChange(e) {
    const content = e.target.value;
    cache_data(BLOG_CACHE_KEY, content);
}

const EditPage = (props) => {

    const ref = React.createRef();
    const navigate = useNavigate();
    const {
        token: {colorBgLayout},
    } = theme.useToken();
    props.appState.get();

    const submit = () => {
        const value = ref.current.resizableTextArea.textArea.value;
        post_content({content: value}, () => navigate('/blog'), () => navigate('/login'));
    };

    return (
        <Layout style={{padding: '0 0px', background: colorBgLayout}}>
            <Layout style={{padding: '0 0px', background: '#ffffff', lineHeight: "80px"}}>
                <Row>
                    <Col span={6} style={{textAlign: "center"}}>
                        <Link to="/blog" style={{color: '#a29ca8'}}>取消</Link>
                    </Col>
                    <Col span={2}/>
                    <Col span={8} style={{textAlign: "center", fontWeight: "bold"}}>写心情
                    </Col>
                    <Col span={2}/>
                    <Col span={6}>
                        <Button type="primary" onClick={submit}>发表</Button>
                    </Col>
                </Row>
            </Layout>
            <br/>
            <Layout style={{lineHeight: "20px", background: colorBgLayout}}>
                <BlogInput defaultValue={get_data(BLOG_CACHE_KEY)}
                           onChange={(e) => textChange(e)} ref={ref}/>
            </Layout>
        </Layout>
    );
};


export default observer(EditPage);


