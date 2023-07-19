import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { observer } from "mobx-react";
import notice from '../../store/notice';



const ConfirmModal = () => {
    return (
        <>
            <Modal title="提醒" open={notice.confirm.value} onOk={()=>notice.confirm.submit()}
                onCancel={()=>notice.confirm.cancel()}>
                <p>{notice.confirm.content}</p>

            </Modal>
        </>
    );
};
export default observer(ConfirmModal);