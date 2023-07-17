import {observer} from "mobx-react";
import React, {useEffect, useRef} from "react";

import notice from "../../store/notice";
import {Button, Col, Row} from 'antd';

const dialogOverlay = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    zIndex: 2
};

const dialog = {
    backgroundColor: "white",
    borderRadius: "4px",
    width: "100%"
};

/**
 *
 * @param Comp 组件
 * @param props
 */
const BottomNotice = () => {

    const dialogRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                notice.bottomHide();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    console.log("detect-bottom:", notice.bottom);
    return (
        <div>
            {notice.bottom && (
                <div className="overlay" style={dialogOverlay}>
                    <div style={dialog} ref={dialogRef}>
                        {notice.content.map((item, key) =>
                            <Row>
                                <Col span={24}><Button style={{width: "100%", height: "60px"}}
                                                       onClick={
                                                           () => {
                                                               new Promise((resolve, reject) => {
                                                                   item.func(notice.params);
                                                                   resolve(1);
                                                               }).then(notice.callBack);
                                                           }

                                                       }>{item.value}</Button></Col>
                            </Row>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};


export default observer(BottomNotice);
