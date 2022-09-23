import { observable, action, makeAutoObservable } from "mobx";

class CounterStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  _count = 5;

  get count() {
    return this._count;
  }

  @action
  increment() {
    this._count++;
  }

  @action
  decrement() {
    this._count--;
  }
}

export default new CounterStore();
