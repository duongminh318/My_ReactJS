// Cách 1: Khai báo trước, export sau
// const myVar = 10;
// function myFunction() {
//     console.log("Xin chào thím đây là hàm import/export vào");
// }
// export { myVar, myFunction };

// cách 2: export tại nơi khai báo

export const myVar = 10;
export function myFunction() {
    console.log("Xin chào thím đây là hàm import/export vào");
}

// file có 1 export default
let df2= " this is default2 variable";
export default df2;