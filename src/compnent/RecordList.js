import React, {Component} from 'react'
import RecordComponent from "./RecordComponent";
import ScrollLoad from "../hook/useTouchBottom";
import {Space} from "antd";
import {LoadingOutlined} from "@ant-design/icons";


const RecordList = (props) => {
    return (
        <Space direction="vertical" size="small" style={{display: 'flex'}}>
            {
                props.list && props.list.length ? props.list.map((item, i) => <RecordComponent
                    key={i} {...item} />) : ""
            }

            {props.loading && <div><LoadingOutlined/>加载中...</div>}

        </Space>
    )
};

export default RecordList;