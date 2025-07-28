


// import data 
import { myData } from "../data";
// import Header 
import Header from "./components/Header/Header";
// import MainContent 
import MainContent from "./components/MainContent/MainContent";

// import TabButton 

import TabButton from "./components/TabButton.jsx"



// ✅ App component – Thành phần chính chứa toàn bộ nội dung
function App() {

  // tạo sự kiện click trong react sau đó gắn sự kiện cho nút bấm 
  // function handleClick() {
  //   // làm việc gì đó khi nút được bấm
  //   alert("nút bấm đã được click");
  // }

  // handerSelect 
  function handleClick(selectedButton) {
    alert(`Bạn đã chọn: ${selectedButton}`);
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
          <TabButton onSelect={() => handleClick("Components")}>Components</TabButton>
          <TabButton onSelect={() => handleClick("JSX")}>JSX</TabButton>
          <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
          <TabButton onSelect={() => handleClick("State")}>State</TabButton>
        </menu>
      </section>
      </main>
    </>
    );
}


// 📤 Xuất component App để index.js có thể sử dụng
export default App;
