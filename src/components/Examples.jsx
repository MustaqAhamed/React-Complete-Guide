import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //SelectedButton => 'components', 'jsx', 'props', ' state'
    // tabContent = SelectedButton;
    console.log(selectedTopic);
  }

  console.log("App component executing");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title} </h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }
  return (
    <Section title="EXAMPLES" id="examples">
      <Tabs
      ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}