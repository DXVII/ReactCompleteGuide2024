import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function SectionCoreConcepts() {
    return <ul> 
        {CORE_CONCEPTS.map( (concept) => 
            <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                imgSrc={concept.image}
                imgAlt={concept.title}
            />
        )}
    </ul>;
}

function SectionExamples() {
    <menu>
        <button>Components</button>
        <button>JSX</button>
        <button>Props</button>
        <button>State</button>
    </menu>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <SectionCoreConcepts />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <SectionExamples />
        </section>
      </main>
    </div>
  );
}

export default App;

