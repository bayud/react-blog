import { observable,action } from "mobx";

// 创建观察者
const appState = observable({
    content: ""
});

appState.get = action(() => {
        appState.content =  sessionStorage.getItem("blogContent") ?JSON.parse(sessionStorage.getItem("blogContent")) : "";
});
appState.cache = action(() => {
    sessionStorage.setItem("blogContent", JSON.stringify(this.content));

});
appState.set = action((content) => {
    this.content = content
});

export default appState;

