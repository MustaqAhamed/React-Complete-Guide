import CoreConcept from "../CoreConcept";

import { CORE_CONCEPTS } from "../../data";


export default function CoreConcetps() {
  <section id="core-concepts">
    <h2>Core concepts</h2>

    <ul>
      {CORE_CONCEPTS.map((conceptItem, index) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  </section>;
}