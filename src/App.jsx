// import componentsImg from "./assets/components.png";

// import { useState } from "react";

// import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header";
import CoreConcepts from "./componentsCoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// import CoreConcept from "./components/CoreConcept.jsx";
// import TabButton from "./components/TabButton.jsx";
// import { EXAMPLES } from "./data.js";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
export default App;
