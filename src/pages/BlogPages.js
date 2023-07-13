import React, {useEffect, useRef, useState} from 'react';
import {Layout, theme} from 'antd';
import RecordList from "../compnent/RecordList";
import {EditOutlined} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import EditPage from "./EditPage";
import {get_blog_data} from "../constant/ajax_config";
import {page} from "react-router-decorator";

const {Header, Content, Footer, Sider} = Layout;


const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 200,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#edeedf',
};
const editStyle = {
    position: "fixed",
    bottom: "100px",
    right: "40px",
    fontSize: 50,
    color: '#a094a0'
};


const BlogPages = () => {
    const pageSize = 10;
    const [dom, setDom] = useState(HTMLDivElement | null);
    const [pageNum, setPageNum] = useState(1);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadingRef = useRef();
    const [done, setDone] = useState(false);
    loadingRef.current = loading;
    const navigate = useNavigate();
    const load = (page) => {
        console.log("load...page:", page);
        const data = ([...Array(10).keys()]).map((item, i) => ({
            name: "cx",
            date: "07月06日18:00",
            content: "第" + (i + (page - 1) * 10) + "條內容"
        }));
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 1000)
            }
        )
    };
    // 监听页面滚动
    const handleOnScroll = () => {
        console.log("页面发生滚动...");
        if (dom && !loading && !done) {
            const contentScrollTop = dom.scrollTop; //滚动条距离顶部
            const clientHeight = dom.clientHeight; //可视区域
            const scrollHeight = dom.scrollHeight; //滚动条内容的总高度
            if (contentScrollTop + clientHeight >= scrollHeight) {
                setPageNum((pageNum) => pageNum + 1);    // 获取数据的方法
            }
        }
    };
    const handleOnclick = () => {
        if (!loading && !done) {
            setPageNum((pageNum) => pageNum + 1);
        }
    };
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    useEffect(() => {
        getList();
    }, [pageNum]);

    const getList = () => {
        setLoading(true);
        console.log("getList...");
        get_blog_data(pageNum, pageSize, (res) => {
                const temp = res['data'];
                if (temp.length < pageSize) {
                    console.log("list-size" + temp.length + "pageSize" + pageSize);
                    setDone(true);
                }
                const nowList = pageNum === 1 ? temp : [...list, ...temp];
                setList(nowList);
                console.log("loading-false-set", loadingRef.current);
                setLoading(false);
                console.log("loading-false", loadingRef.current, loading);
            },
            (error) => {
                if (error.status === 400) {
                    navigate("/login");
                }
                setLoading(false);

            }
        );
        load(pageNum)
            .then((res) => {

            })
            .finally(() => {


            });
    };
    return (
        <Layout onScroll={() => handleOnScroll()} ref={(dom) => {
            setDom(dom)
        }} style={{height: "800px", overflow: "scroll"}}>
            <Layout>
                <Header style={headerStyle}>
                    <div className="demo-logo" style={{color: '#ad90b2'}}/>
                </Header>
                <RecordList list={list} loading={loading}/>
                <Footer style={{textAlign: 'center'}}>
                    {
                        done ? <p>到底了...</p> :
                            <p onClick={() => handleOnclick()}>上拉加载更多...</p>

                    }

                </Footer>
            </Layout>
        </Layout>


    );
};

// 父组件
function ParentComponent(Comp) {
    return (props) => (
        <div className="parent-container">
            {/* 其他组件渲染 */}
            <Comp {...props}/>
            {/* 在上方渲染的组件 */}
            <Link to='/edit' component={EditPage}><EditOutlined style={editStyle}/></Link>
        </div>
    );
}


export default ParentComponent(BlogPages);