import { observable, action, computed } from "mobx";

// 创建观察者
class AppState {

  increment() {
    this.num += 1;
  }
  decrement() {
    this.num -= 1;
  }
}

export default new AppState();
