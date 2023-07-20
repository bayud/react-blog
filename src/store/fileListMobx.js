import {observable, action} from "mobx";

// 创建观察者
const fileList = observable({
    value: []
});


fileList.setNewList = action((newList) => {
    fileList.value = newList
});

fileList.push = action((file) => {
    fileList.value.push(file);
});

export default fileList;