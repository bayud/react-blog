import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {get_file_url} from "../constant/ajax_config";

const BlogAvatar = (image_url) => {
    console.log(image_url);
    return (
        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}
                size={80}
                src={get_file_url(image_url)}/>

        // <Avatar size="large" icon={<UserOutlined />} />
    )
};
export default BlogAvatar;