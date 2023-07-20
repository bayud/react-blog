import React from 'react';
import {Image} from 'antd';
import {get_file_url} from "../constant/ajax_config";

const PhotoViewGroupCom = (props) => {
        console.log("photoView", props);
        const width = 125
        return (
            <Image.PreviewGroup style={{paddingLeft: "10px", paddingRight: "10px"}}
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
            >

                {
                    props.list && props.list.length && props.list.map((item, i) =>
                        <Image width={width} src={get_file_url(item)}/>
                    )
                }

            </Image.PreviewGroup>
        )
    }
;
export default PhotoViewGroupCom;