import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';
import {get_file_url} from "../constant/ajax_config";

const BlogAvatar = (props) => {
    return (
        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}
                size={80}
                src={get_file_url(props.image_url)}/>
    )
};
export default BlogAvatar;