// 1. spread operator với mảng
// danh sách sở thích hiện tại
let soThich= ["đọc sách", "nghe nhạc"];

// Sở thích mới muôn thêm
const soThichMoi= ["Đi du lịch", "xem phim"];

// cập nhật danh sách sở thích
soThich= [...soThich, "abc", ...soThichMoi];
//console.log("danh sách sở thích sau khi thêm", soThich);

// SPREAD OPERATOR VỚI OBJECT
// thông tin người dùng ban đầu
let user= {
  id:1,
  name: "Nguyễn Văn A",
  email: "vana@gmail.com",
   role: "member",
};

// thông tin cần cập nhật
const updates ={
  address: "123 ABC street",
  role: "admin",  // ông đứng sau sẽ ghi đè lại ông đứng trước
};

// updated user
user= {...user, ...updates};
console.log(user);

