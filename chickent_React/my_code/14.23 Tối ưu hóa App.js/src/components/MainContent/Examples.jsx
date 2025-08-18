import { useState } from "react";
import { EXAMPLES } from "../../../data.js";
import TabButton from "../TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";
export default function Examples(){
  
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
         <Section title="Examples" id="examples" className="demo_class" moi="moi">
             
                  <Tabs 
                  
                  button={
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
        
                </Section>
    )
}