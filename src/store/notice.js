import { observable, action } from "mobx";

// 创建观察者
const notice = observable({
    bottom: {
        value: false,
        content: [],
        params: {},
        callBack: () => notice.bottomHide()
    },
    confirm: {
        value: false,
        content: "确认对话框",
        submitFunc: () => { },
        cancel: () => notice.confirmHie(),
        submit: () => {
            notice.confirm.submitFunc();
            notice.confirmHie()
        }
    }
});

/**
 * @param content 底部显示的列表
 * @param fs  对应的执行函数
 * @param params 函数执行参数
 * @param callback 执行后回调
 * @type {Function}
 */
notice.bottomShow = action((content, params, callback) => {
    notice.bottom.value = true;
    notice.bottom.content = content;
    notice.bottom.params = params;
    notice.bottom.callBack = callback;
});
notice.bottomHide = action(() => {

    notice.bottom.value = false;

});

notice.confirmShow = action(
    (content, confirmFunc, cancelFunc) => {
        notice.confirm.content = content;
        notice.confirm.submitFunc = confirmFunc;
        if (cancelFunc !== undefined) {
            notice.confirm.cancel = cancelFunc;
        }
        notice.confirm.value = true;
    }
);

notice.confirmHie = action(() => {
    notice.confirm.value = false;
});

export default notice;

