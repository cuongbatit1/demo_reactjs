import { makeAutoObservable, makeObservable, observable, action } from "mobx";
export default class homeMobxViewModel {
  open = false;
  constructor() {
    makeAutoObservable(this);
  }
  handleOpen = () => {
    this.open = true;
  };
  handleClose = () => {
    this.open = false;
  };
}
