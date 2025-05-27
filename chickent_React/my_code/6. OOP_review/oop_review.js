/*
1. Objects là gì?
Objects trong JavaScript được sử dụng để nhóm các giá trị lại với nhau. 
Chúng cho phép tổ chức dữ liệu dưới dạng các cặp key-value, 
trong đó key là tên thuộc tính và value là giá trị tương ứng.
*/

// const user = {
//     name: "Lan",
//     age: 70,
//     "giới tính": "nam",


//     // phương thức
//     xinChao() {
//         console.log("Xin chào thím tui là phương thức");
//         // truy cập vào thuộc tính của object gọi = this
//         console.log(` tuổi là ${this.age} `);
//         return "trả về cái gì đó";
//     }

// };

// console.log(user);
// console.log(user.age);
// console.log(user["giới tính"]);
// console.log(user.xinChao());


// tạo khuôn mẫu để có thể tạo ra nhiều object giống nhau về cấu trúc

// class

class User {
    constructor(name, age) {
        this.ten = name;
        this.tuoi = age;
    }

    // phương thức
    xinChao() {
        console.log("Xin chào thím tui là phương thức");
        // truy cập vào thuộc tính của object gọi = this
        console.log(` tuổi là ${this.tuoi} `);
        return "trả về cái gì đó";
    }
}

// const user1= new User("Ngoc", 17);
// console.log(user1.ten);
// console.log(user1.tuoi);

// user1.xinChao();



const user2= new User("Vân", 20);
console.log(user2.ten);
console.log(user2.tuoi);

user2.xinChao();
console.log(user2.xinChao());