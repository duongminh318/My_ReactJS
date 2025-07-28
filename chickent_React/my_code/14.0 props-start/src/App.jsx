


// import data 
import { myData } from "../data";
// import Header 
import Header from "./components/Header/Header";
// import MainContent 
import MainContent from "./components/MainContent/MainContent";




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
            {/* <MainContent {...myData[0]} />  */}
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
