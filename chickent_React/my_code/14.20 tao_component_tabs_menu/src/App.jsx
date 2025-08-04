import { useState } from "react";
import MainContent from "./components/MainContent/MainContent.jsx";
import Header from "./components/Header/Header.jsx";
import { myData, EXAMPLES } from "../data.js";
import TabButton from "./components/TabButton.jsx";
import Section from "./components/MainContent/Section.jsx";
import Tabs from "./components/MainContent/Tabs.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  // Declare tabContent variable here
  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main>
        <Section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {
              myData.map((item) => (
                <MainContent key={item.title} {...item} />
              ))
            }
          </ul>
        </Section>

        <Section title="Examples" id="examples" className="demo_class" moi="moi">

          {/* prettier-ignore */}
          <Tabs button={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => { handleSelect('components') }}>
                Components
              </TabButton>
              <TabButton isSelected={selectedTopic === "jsx"} onClick={() => { handleSelect('jsx') }}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === "props"} onClick={() => { handleSelect('props') }}>Props</TabButton>
              <TabButton isSelected={selectedTopic === "state"} onClick={() => { handleSelect('state') }}>State</TabButton>
            </>
          }>



            {tabContent}
          </Tabs>
          {/* dùng toán tử 3 ngôi */}
          {/* {!selectedTopic ? (
            <p>vui lòng click vào nút để lựa chọn</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>

            </div>)
          } */}

          {/* cách 2 */}

          {/* Nếu chưa chọn chủ đề, hiển thị thông báo yêu cầu chọn */}
          {/* {!selectedTopic && <p>vui lòng click vào nút để lựa chọn</p>} */}

          {/* Nếu đã chọn chủ đề, hiển thị nội dung chi tiết */}
          {/* {selectedTopic && (
            <div id="tab-content"> */}
          {/* Hiển thị tiêu đề của chủ đề đã chọn */}
          {/* <h3>{EXAMPLES[selectedTopic].title}</h3> */}
          {/* Hiển thị mô tả của chủ đề đã chọn */}
          {/* <p>{EXAMPLES[selectedTopic].desc}</p> */}
          {/* Hiển thị đoạn mã ví dụ của chủ đề đã chọn */}
          {/* <pre> */}
          {/* <code> */}
          {/* {EXAMPLES[selectedTopic].code} */}
          {/* </code> */}
          {/* </pre> */}
          {/* </div> */}
          {/* )} */}

          {/* cách 3 */}
          {/* cách 3: sử dụng biến tabContent */}



        </Section>
      </main>
    </>
  );
}

export default App;
