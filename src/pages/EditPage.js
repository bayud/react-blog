import React, {Component} from 'react';
import {Button, Input, Layout, theme} from 'antd';
import {Col, Row} from 'antd';
import {observer} from "mobx-react";
import notice from "../store/notice";

import {Link, useNavigate, useLocation} from "react-router-dom";
import {cache_data_content, clear_data_content, get_data_content} from "../util/cache_data";
import {post_content, post_content_update} from "../constant/ajax_config";
import PhotoUploadCom from "../compnent/PhotoUploadComponent";
import fileList from "../store/fileListMobx";

const {TextArea} = Input;
const {Header, Content, Footer, Sider} = Layout;


const BlogInput =
    React.forwardRef((props, ref) => <TextArea rows={10} placeholder="写下今天的心情" ref={ref}
                                               maxLength={1000} {...props}/>);


const BLOG_CACHE_KEY = "blog_cache_key";

function textChange(e) {
    const content = e.target.value;
    cache_data_content(content);
}

const EditPage = (props) => {

    const ref = React.createRef();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const {
        token: {colorBgLayout},
    } = theme.useToken();
    console.log("edit-notice:", notice.bottom.value);
    const submit = () => {
        console.log("fileList:", fileList.value);
        const value = ref.current.resizableTextArea.textArea.value;
        if (id === null) {
            post_content({
                content: value,
                files: fileList.value.map((item, i) => item.originFileObj)
            }, () => navigate('/blog'), () => navigate('/login'));

        } else {
            const ori_file_arr = fileList.value.filter((item, i) => item.url).map((item, i) => [String(i), item.url]);
            const ori_file_dict = Object();
            ori_file_arr.forEach(x => ori_file_dict[x[0]] = x[1]);
            post_content_update({
                content: {content: value, id: Number(id)},
                files: fileList.value.filter((item) => item.originFileObj).map((item, i) => item.originFileObj),
                ori_files: ori_file_dict
            }, () => navigate('/blog'), () => navigate('/login'));

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
                <Layout>
                    <PhotoUploadCom/>
                </Layout>
            </Layout>
        );
    }
;


export default observer(EditPage);


