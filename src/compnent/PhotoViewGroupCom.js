import React from 'react';
import {Image} from 'antd';
import {get_file_url} from "../constant/ajax_config";

const PhotoViewGroupCom = (props) => {
        console.log("photoView", props);
        const width = 130
        return (
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >

                {
                    props.list && props.length && props.list.map((item, i) =>
                        <Image width={width} src={get_file_url(item)}/>
                    )
                }

            </Image.PreviewGroup>
        )
    }
;
export default PhotoViewGroupCom;