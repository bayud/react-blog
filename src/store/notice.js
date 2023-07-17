import {observable, action} from "mobx";

// 创建观察者
const notice = observable({
    bottom: false,
    content: [],
    params: {},
    callBack: () => notice.bottomHide()
});

/**
 * @param content 底部显示的列表
 * @param fs  对应的执行函数
 * @param params 函数执行参数
 * @param callback 执行后回调
 * @type {Function}
 */
notice.bottomShow = action((content, params, callback) => {
    notice.bottom = true;
    notice.content = content;
    notice.params = params;
    notice.callBack = callback;
});
notice.bottomHide = action(() => {

    notice.bottom = false;

});

export default notice;

