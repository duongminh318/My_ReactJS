


// import data 
import { useState } from "react";
import { myData } from "../data";
// import Header 
import Header from "./components/Header/Header";
// import MainContent 
import MainContent from "./components/MainContent/MainContent";

// import TabButton 

import TabButton from "./components/TabButton.jsx"



// ✅ App component – Thành phần chính chứa toàn bộ nội dung
function App() {
  const [selectedTopic, setselectedTopic] = useState("vui lòng click vào nút");
  // console.log("App được gọi");


  // console.log(`${tabContent} ngoài hàm`);

  // handerSelect 
  function handleSelect(selectedButton) {
    setselectedTopic(selectedButton); // Đúng
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
            <MainContent
              image={myData[0].image}
              title={myData[0].title}
              desc={myData[0].desc}
            />
            {/* Hoặc có thể sử dụng cú pháp spread để truyền props ngắn gọn hơn */}
            {/* <MainContent {...myData[0]} />  */}
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}


// 📤 Xuất component App để index.js có thể sử dụng
export default App;
