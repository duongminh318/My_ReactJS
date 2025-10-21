// import thư viện React hook useState để quản lý trạng thái (state)
import { useState } from "react";

// lấy dữ liệu từ file data.js
import { myData } from "../data";

// import các component con
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import TabButton from "./components/TabButton.jsx";

// ✅ Component chính của ứng dụng
function App() {

  // Khai báo state 'selectedTopic' để lưu chủ đề đang được chọn
  // Giá trị khởi tạo ban đầu là chuỗi "vui lòng click vào nút"
  const [selectedTopic, setSelectedTopic] = useState("vui lòng click vào nút");

  // Hàm xử lý khi người dùng bấm nút (được truyền vào từng TabButton)
  function handleSelect(selectedButton) {
    // Khi TabButton được click, giá trị selectedButton (ví dụ: "jsx")
    // sẽ được truyền vào hàm này → React cập nhật lại state
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      {/* Phần đầu trang */}
      <Header />

      {/* Nội dung chính */}
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>

          <ul>
            {/* Truyền props cho từng MainContent */}
            <MainContent
              image={myData[0].image}
              title={myData[0].title}
              desc={myData[0].desc}
            />

            {/* Cú pháp spread giúp viết ngắn gọn hơn */}
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>

          {/* Các nút chọn chủ đề */}
          <menu>
            {/* Khi click vào nút này, hàm onSelect sẽ chạy và gọi handleSelect("components") */}
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>

            {/* Tương tự, các nút còn lại truyền giá trị tương ứng */}
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* Hiển thị giá trị của state hiện tại */}
          {/* Khi bấm nút, setSelectedTopic() cập nhật giá trị → React render lại nội dung mới */}
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

// 📤 Xuất component App để file index.js có thể dùng
export default App;
