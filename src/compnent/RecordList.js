import React, {Component} from 'react'
import RecordComponent from "./RecordComponent";
import ScrollLoad from "../hook/useTouchBottom";
import {Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";


const RecordList = (props) => {
    const list = [{
        id: "10010",
        image_url: "abc",
        content: "知道",
        date: "2023-07-14 14:00:00"
    }];

    return (
        <Space direction="vertical" size="small" style={{display: 'flex'}}>
            {
                list && list.length ? list.map((item, i) => <RecordComponent
                    key={i} {...item} />) : ""
            }

            {props.loading && <div><LoadingOutlined/>加载中...</div>}

        </Space>
    )
};

export default RecordList;