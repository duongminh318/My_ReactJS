// Nhập thư viện PropTypes để kiểm tra kiểu dữ liệu của props
import PropTypes from "prop-types";

// Nhập các hình ảnh dùng trong app
import logo from "./assets/logo-tuhoc.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";


// ✅ Header component – phần đầu trang gồm logo, tiêu đề, mô tả
function Header() {
  return (
    <header>
      <img src={logo} alt="Tự Học" />
      <h1>React winTech.pro</h1>
      <p>
        Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và đầy sáng tạo!
      </p>
    </header>
  );
}


// ✅ MainContent component – hiển thị 1 khái niệm trong React, nhận dữ liệu qua props
function MainContent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}

// 🔍 Kiểm tra kiểu dữ liệu props được truyền vào MainContent
MainContent.propTypes = {
  image: PropTypes.string.isRequired,  // Đường dẫn ảnh (bắt buộc)
  title: PropTypes.string.isRequired,  // Tiêu đề (bắt buộc)
  desc: PropTypes.string               // Mô tả (không bắt buộc)
};


// ✅ App component – Thành phần chính chứa toàn bộ nội dung
function App() {
  return (
    <>
      {/* Phần đầu trang */}
      <Header />

      {/* Nội dung chính */}
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>

          <ul>
            <MainContent
              image={pic1}
              title="Components"
              desc="Khối xây dựng giao diện cơ bản - kết hợp nhiều thành phần để tạo nên ứng dụng."
            />
            <MainContent
              image={pic2}
              title="JSX"
              desc="Kết hợp HTML và JavaScript để tạo giao diện động và mạnh mẽ."
            />
            <MainContent
              image={pic3}
              title="Props"
              desc="Truyền dữ liệu vào thành phần để làm nó linh hoạt và tái sử dụng."
            />
            <MainContent
              image={pic4}
              title="State"
              desc="Dữ liệu được React quản lý, khi thay đổi sẽ tự động làm mới giao diện."
            />
          </ul>
        </section>
      </main>
    </>
  );
}


// 📤 Xuất component App để index.js có thể sử dụng
export default App;
