import { makeAutoObservable } from "mobx";
export default class addUserModalMobxViewModel {
  role = "";
  listOptionRole = [
    { name: "Choose an option", value: "" },
    { name: "Admin", value: "admin" },
    { name: "Member", value: "member" },
  ];
  name = "";
  email = "";
  phone = "";
  isActive = false;
  constructor() {
    makeAutoObservable(this);
  }

  handleChangeRole = (event) => {
    console.log("handleChangeRole Value Select :" + event.target.value);
    this.role = event.target.value;
  };

  handleChangeName = (event) => {
    console.log("handleChangeName Value :" + event.target.value);
    this.name = event.target.value;
  };
  handleChangeEmail = (event) => {
    console.log("handleChangeEmail Value :" + event.target.value);
    this.email = event.target.value;
  };

  handleChangePhone = (event) => {
    console.log("handleChangePhone Value :" + event.target.value);
    this.phone = event.target.value;
  };

  handleChangeActive = (event) => {
    console.log("handleChangeActive checked :" + event.target.checked);
    this.isActive = event.target.checked;
  };
}
