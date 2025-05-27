// 1. lấy 1 phần tử cần thiết
// import { myVar } from "./name.js";
// console.log(myVar);         // 👉 10

// 2. hoặc chỉ lấy một số phần tử cần thiết
// import { myFunction, myVar } from "./name.js";

// console.log("biến mới import vào", myVar);
// console.log(myVar);         // 👉 10
// myFunction();               // 👉 Xin chào đây là hàm


// 3. hoặc lấy tất cả
// * chỉ lấy được mấy cái export name không lấy được export default
//import df2, * as name from "./name.js"

// console.log(name.myVar);
// name.myFunction();

// import default 
// import df from "./default.js"
// console.log(df);

// import total from "./default.js"
// let sum= total(3,4);
// console.log(` Tổng của hai số là ${sum}`);

// console.log(df2);

// 5. đổi tên khi import
// default : đổi tuỳ ý
// name :as 

// import tenTuyY from "./default.js"
// console.log(tenTuyY(8, 9));

// with name export
// import { myVar as newName } from "./name.js";
// console.log(newName);