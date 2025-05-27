/*
array (mảng) là một dạng đặc biệt của object,
được thiết kế để lưu trữ các giá trị theo thứ tự và truy cập bằng chỉ số (index),  bắt đầu từ 0
*/

// 1. Tạo mảng: Mảng được tạo bằng cặp dấu ngoặc vuông []
//

const traiCay = ["cam", "xoai", "nho", "táo", "ổi"];

// console.log(typeof (traiCay));
// console.log(traiCay);
// console.log(traiCay[0]);
// console.log(traiCay[4]);

//2. Mảng lồng nhau và kiểu dữ liệu trong mảng
//Mảng có thể chứa bất kỳ loại dữ liệu nào, bao gồm chuỗi,
// số, đối tượng, hoặc thậm chí các mảng khác...

// const mang = [1, "hello", true, null, undefined, [1,2,3]];
// console.log(mang);

//2.1. truy cập mảng lồng nhau
// console.log(mang[5][1]);

//3. Một số phương thức thường dùng
//3.1 push(): thêm phần tử vào cuối mảng
// traiCay.push(" dứa ");
// console.log(traiCay);

//3.2 map():(map sẽ duyệt qua từng phần tử của mảng) tạo mảng mới từ mảng cũ
// const so = [1, 2, 3, 4, 5];
// console.log(so);
// const so2 = so.map((item) => item * 2);
// console.log(so2);

//biến đổi phần tử của mảng thành đối tượng mới
// const so3 = so.map((item) => ({so: item}));
// console.log(so3);


const numbers = [10, 15, 20, 25];

// const result = numbers.findIndex(function(element, index, array) {
//   console.log('Giá trị:', element);   // value
//   console.log('Vị trí:', index);      // index
//   console.log('Mảng:', array);        // full array
  
//   return element > 18; // điều kiện tìm kiếm
// });

// console.log('👉 Kết quả:', result); // 2


const result = numbers.findIndex(function(element, index) {
  console.log('Giá trị:', element);   // value
  console.log('Vị trí:', index);      // index
  //console.log('Mảng:', array);        // full array
  
  return element > 18; // điều kiện tìm kiếm
});

console.log('👉 Kết quả:', result); // 2
