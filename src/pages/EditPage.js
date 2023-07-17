import React, {Component} from 'react';
import {Button, Input, Layout, theme} from 'antd';
import {Col, Row} from 'antd';
import {observer} from "mobx-react";
import notice from "../store/notice";
import RecordList from "../compnent/RecordList";
import {EditOutlined, EditFilled} from '@ant-design/icons';
import appState from "../store/mobx.decorator";
import {Link, useNavigate, useParams} from "react-router-dom";
import {cache_data_content, clear_data_content, get_data_content} from "../util/cache_data";
import {post_content, post_content_update} from "../constant/ajax_config";

const {TextArea} = Input;
const {Header, Content, Footer, Sider} = Layout;


const BlogInput =
    React.forwardRef((props, ref) => <TextArea rows={10} placeholder="写下今天的心情" ref={ref} maxLength={1000} {...props}/>);


const BLOG_CACHE_KEY = "blog_cache_key";

function textChange(e) {
    const content = e.target.value;
    cache_data_content(content);
}

const EditPage = (props) => {

    const ref = React.createRef();
    const navigate = useNavigate();
    const {id} = useParams();

    const {
        token: {colorBgLayout},
    } = theme.useToken();
    console.log("edit-notice:", notice.bottom);
    const submit = () => {
        const value = ref.current.resizableTextArea.textArea.value;
        if (id === null) {
            post_content({content: value}, () => navigate('/blog'), () => navigate('/login'));

        } else {
            console.log(id);
            post_content_update({content: value, id: id}, () => navigate('/blog'), () => navigate('/login'));

        }
        clear_data_content();
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
                <BlogInput defaultValue={get_data_content()}
                           onChange={(e) => textChange(e)} ref={ref}/>
            </Layout>
        </Layout>
    );
};


export default EditPage;


