import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { observer } from "mobx-react";
import notice from '../../store/notice';



const ConfirmModal = () => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal title="Basic Modal" open={notice.confirm.value} onOk={notice.confirm.submit} 
      onCancel={notice.confirm.cancel}>
        <p>{notice.confirm.content}</p>

      </Modal>
    </>
  );
};
export default observer(ConfirmModal);