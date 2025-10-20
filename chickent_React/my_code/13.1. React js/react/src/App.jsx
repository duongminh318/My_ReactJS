// Import file CSS để áp dụng style cho component App
import './App.css'

// Import hình ảnh demo từ thư mục assets
import demoPic from "../src/assets/img/demopic.jpg"

// --- LẤY THỜI GIAN HIỆN TẠI ---
let today = new Date().toLocaleDateString(); // Lấy ngày hiện tại (VD: "20/10/2025")
let time = new Date().toLocaleTimeString();  // Lấy giờ hiện tại (VD: "14:30:15")

// --- MẢNG CHỨA CÁC CÂU CHÀO NGẪU NHIÊN ---
const wellCome = [
  "Chào mừng bạn đến với thế giới React!",
  "Rất vui được chào đón bạn đến thế giới React",
  "Chúng ta sẽ được học các kiến thức thú vị về React",
];

// --- HÀM CHỌN NGẪU NHIÊN 1 CÂU CHÀO ---
function ranDomTitle() {
  // Math.random() → tạo số ngẫu nhiên từ 0 đến 1
  // Nhân với độ dài mảng rồi làm tròn xuống → ra vị trí ngẫu nhiên (0, 1, 2)
  return Math.floor(Math.random() * wellCome.length)
}

// --- COMPONENT HEADER: HIỂN THỊ CÂU CHÀO + THỜI GIAN ---
function Header() {
  // Lấy ngẫu nhiên 1 phần tử từ mảng wellCome
  const title = wellCome[ranDomTitle()]

  // JSX (giống HTML nhưng có thể chèn biểu thức JavaScript bên trong {})
  return (
    <>
      {/* Hiển thị tiêu đề chào mừng */}
      <h1>{title}</h1>

      {/* Hiển thị ngày và giờ hiện tại */}
      <p>
        Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại{" "}
        <strong>{time}</strong>
      </p>
    </>
  )
}

// --- KHAI BÁO BIẾN THƯỜNG ---
const name = "Win";        // Tên người dùng
let isLogedIn = false;     // Trạng thái đăng nhập
let person = {             // Đối tượng chứa thông tin cá nhân
  name: "Lan",
  age: 38,
};

// --- COMPONENT DINAMICVALUE: DEMO DỮ LIỆU ĐỘNG TRONG JSX ---
function DinamicValue() {
  return (
    <>
      {/* 1. Chèn BIỂU THỨC JavaScript (expression) vào JSX */}
      <h2>Chào {name}</h2>  {/* In ra “Chào Win” */}

      <p>Kết quả: {1 + 2 * 5}</p> {/* Tính toán trực tiếp → 1 + 10 = 11 */}

      {/* 2. KHÔNG thể chèn CÂU LỆNH (statement) trong JSX */}
      {/* Ví dụ: if, for... sẽ báo lỗi */}
      {/* <p>{if(true) {"Đúng rồi"}}</p> */}  {/* ❌ Sai cú pháp */}

      {/* 3. Dùng toán tử 3 ngôi để kiểm tra điều kiện (thay cho if/else) */}
      <p>{isLogedIn ? "Bạn đã đăng nhập" : "Hãy đăng nhập"}</p>

      {/* 4. Truy cập thuộc tính đối tượng */}
      <p>
        Tên: {person.name}, Tuổi: {person.age}
      </p>

      {/* 5. Hiển thị hình ảnh đã import */}
      <img src={demoPic} alt="demo" />
    </>
  );
}

// --- COMPONENT CHÍNH (App): GỘP CÁC THÀNH PHẦN LẠI ---
function App() {
  return (
    <>
      {/* Gọi component Header */}
      <Header></Header>

      {/* Gọi component DinamicValue */}
      <DinamicValue></DinamicValue>
    </>
  );
}

// Xuất component App ra để index.js có thể render
export default App
