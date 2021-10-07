import { userList } from "./sample2";
import sample3 from "./sample3";

console.log('===> call sample1.js')
console.log("call sample1: ", sample3);

export const getUserNameList = () => {
  return userList.map(({ name }) => name);
};
