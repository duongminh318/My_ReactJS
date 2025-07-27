// Nhập thư viện PropTypes để kiểm tra kiểu dữ liệu của props
import PropTypes from "prop-types";

// Nhập các hình ảnh dùng trong app
import logo from "./assets/logo-tuhoc.png";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";

import { myData } from "../data";

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
function MainContent({image, title, desc}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
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
  console.log(myData);
  console.log(myData[0].title);
  console.log(myData[0].desc);
  console.log(myData[0].image);

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
              image={myData[0].image}
              title={myData[0].title}
              desc={myData[0].desc}
            />
            {/* Hoặc có thể sử dụng cú pháp spread để truyền props ngắn gọn hơn */}
            <MainContent {...myData[0]} /> 
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}


// 📤 Xuất component App để index.js có thể sử dụng
export default App;
