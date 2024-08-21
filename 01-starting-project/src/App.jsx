import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

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

function SectionCoreConcepts() {
    return (
        <ul> 
            {CORE_CONCEPTS.map( (concept) => 
                <CoreConcept
                    key={concept.title}
                    title={concept.title}
                    description={concept.description}
                    imgSrc={concept.image}
                    imgAlt={concept.title}
                />
            )}
        </ul>
    );
}

function SectionExamples() {
    return (
        <menu>
            {Object.keys(EXAMPLES).map( (key) => 
                <button key={key}> {
                    EXAMPLES[key].title}
                </button>
            )}
        </menu>)
}


export default App;

