// khai báo hàm function declaration (tuyên bố)
// function xinChao(){
//     console.log("Hello, How are you");
// }

// xinChao();


// function xinChaoBan(name){
//     console.log(`Hello, How are you, ${name}`);
// }

// xinChaoBan("Vân");

// tính tích 2 số
// function tinhTich(soThuNhat, soThuHai){

//     let tich= soThuNhat* soThuHai;
//     console.log(`Đáp Án:  ${soThuNhat} x ${soThuHai} = ${tich}`);
// }

// tinhTich(3,4);

// Function expression (sau dấu bằng và không có tên hàm)

// let tong = function (soA, soB) {
//     return soA + soB;
// }

// // gọi tên biến

// console.log(tong(2, 4));

// 3. arrow function
// tính tích 2 số, tổng 2 số sau đó lấy tích + tổng

// let result = (soA, soB)=>{
//     let tong= soA+ soB;
//     let tich= soA* soB;
//     return tong +tich;
// }

// console.log(result(3,5));

// 3.3 khi trả về 1 đối tượng
let person= (ten, tuoi)=>{
    return{
        "hoVaTen": ten,
        "hưởng Thọ": tuoi
    }
}

 //console.log(person("Win",100));

let obj= person("Minh",100);

console.log(obj.hoVaTen);
console.log(obj["hưởng Thọ"]);