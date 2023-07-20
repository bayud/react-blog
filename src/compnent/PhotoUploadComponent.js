import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Modal, Upload, message} from 'antd';
import fileList from "../store/fileListMobx";

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const PhotoUploadCom = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [currentFileList, setCurrentFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleCustomRequest = (options) => {
        const {file, onSuccess, onError} = options;
        // 这里可以执行自定义的上传操作
        // 例如使用 fetch 或 axios 来进行文件上传
        // file 是要上传的文件对象
        // 假设上传成功后，获取服务器返回的图片地址，用于预览
        const imageUrl = 'https://example.com/uploaded-image.jpg';
        // 模拟上传延迟
        onSuccess(); // 通知上传成功
    };

    const handleChange = ({fileList: newFileList}) => {
        console.log("newFileList:", newFileList);
        fileList.setNewList(newFileList);
        setCurrentFileList(newFileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    return (
        <>
            <Upload
                action="your-custom-upload-url" // 替换成自定义上传的服务端接口
                listType="picture-card"
                fileList={currentFileList}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={handleCustomRequest} // 设置自定义上传函数
            >
                {currentFileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};

export default PhotoUploadCom;
