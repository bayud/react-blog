import React, { Component } from 'react';
import { App, Row, Col, theme } from 'antd';
import BlogAvatar from "../compnent/BlogAvatar";
import notice from "../store/notice";
import { delete_blog_data } from "../constant/ajax_config";
import { useNavigate } from "react-router-dom";
import { cache_data_content } from "../util/cache_data";

const footerStyle = {
    textAlign: 'start',
    lineHeight: '0px',
    fontSize: 'small',
    height: 15,

};


const BaseRecord = (props) => {
    const { message, modal, notification } = App.useApp();

    const showModal = () => {
        modal.warning({
            title: '删除失败',
            content: '请检查权限',
        });
    };
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
            window.location.reload();
        },
            (error) => {
                console.log("res:", error.message, error);
                showModal();
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
                    func: (props) => {
                        notice.confirm.confirmShow("确认删除本条记录吗?", ()=>deleteRecord(props));
                    }
                },
                {
                    value: "取消",
                    func: () =>notice.bottomHide()
                }
            ],
            props,
            notice.bottomHide
        )
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const get_date = (dateStr) => {
        const date = new Date(dateStr);
        return date.getFullYear() + "年" + String(date.getMonth() + 1).padStart(2, '0') + "月" + String(date.getDate()).padStart(2, '0') + "日 "
            + String(date.getHours()).padStart(2, 0) + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0");
    };

    return (
        <div style={{ padding: '0 0px', background: colorBgContainer }}>
            <Row style={{ height: "80px", padding: "5px 10px 0 10px" }}>
                <Col span={5} style={{ background: colorBgContainer }}>
                    <BlogAvatar image_url={props.image_url} />
                </Col>
                <Col span={17} style={{ background: colorBgContainer }}>
                    <Row style={{ padding: "5px 0 0 0", height: "30%" }}>
                        <Col span={24} style={{
                            // color: '#000000',
                            textAlign: "start",
                            fontWeight: "650",
                            fontSize: "18px"
                            // color: "darkred",
                        }}>{props.name}</Col>
                    </Row>
                    <Row style={{ padding: "8px 0 0 0" }}>
                        <Col span={24} style={{
                            fontSize: "small",
                            color: '#a094a0',
                            textAlign: "start"
                        }}>{
                                get_date(props.date)
                            }</Col>
                    </Row>
                </Col>
                <Row />
                <Col span={2} style={{ background: colorBgContainer }}>
                    <Row>
                        <Col span={24} onClick={handleClick}
                            style={{ fontSize: 40, color: "#a094a0", transform: "translate(0%, -60%)" }}>...
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ fontSize: "large", paddingLeft: "10px", paddingRight: "10px", fontWeight: "400" }}
                    class="multiline">{props.content.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}</Col>

            </Row>
            <Row>
                <br />
            </Row>
        </div>
    );
};


export default class RecordComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<BaseRecord {...this.props} />);
    }
};

