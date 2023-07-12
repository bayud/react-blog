// import React, {useEffect, useRef, useState} from 'react';
// import {LoadingOutlined} from '@ant-design/icons';
// import {Space} from 'antd';
//
// const value = 0;
// export default function ScrollLoad(Comp, ) {
//
//
//     // useEffect(() => {
//     //     const Dom = wrapRef.current;
//     //     Dom.addEventListener('scroll', loadMore, true);
//     //     console.log(Dom, loading);
//     //     return () => {
//     //         if (Dom) {
//     //             console.log('清空监听事件');
//     //             Dom.removeEventListener('scroll', loadMore, true);
//     //         }
//     //     };
//     // }, []);
//
//
//
//
//
//
//     return (
//         <div style={{  height:"800px", overflow: "scroll"}}>
//         <Space direction="vertical" size="small" style={{display: 'flex'}} >
//             {list && list.length && list.map((item, i) => <Comp key={i} {...item} />)}
//             {loading && <div><LoadingOutlined/>加载中...</div>}
//         </Space>
//         </div>
//     );
// }
