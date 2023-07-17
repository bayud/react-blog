import React, {Component} from 'react'
import RecordComponent from "./RecordComponent";
import ScrollLoad from "../hook/useTouchBottom";
import {Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";


const RecordList = (props) => {
    const list = props.list;
    // const list = [{
    //     id: "10010",
    //     name: "直达打发算法答复详仔~",
    //     image_url: "abc",
    //     content: "知道<br>sdfa",
    //     date: "2023-07-14 14:00:00"
    // },
    // {
    //     id: "10010",
    //     name: "直达打发算法答复详仔~",
    //     image_url: "abc",
    //     content: "知道s谁发发发收款方哈发客户啊螺蛳粉爱番番啊收款方<br><br><br>啊司法局发发\r\n\t<br>打法是否",
    //     date: "2023-07-14 14:00:00"
    // }
    // ];
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