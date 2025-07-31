// import componentsImg from "./assets/components.png";

import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = "Please cli ck a button";

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={
                conceptItem.title
              } {...conceptItem} />
            ))}
          </ul>
        </section>
        <section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
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
            </menu>
            {tabContent}
          </section>
        </section>
      </main>
    </div>
  );
}
export default App;
