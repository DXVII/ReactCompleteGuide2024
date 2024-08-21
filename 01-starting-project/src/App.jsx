import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import TabContent from "./components/TabContent";

function App() {
    // States:
    const [selectedTopic, setSelectedTopic] = useState('');
    console.log(`Current selectedTopic: ${selectedTopic}`)
    // Event Handlers:
    function handleClickExample (key) {
        setSelectedTopic(key)
    }

    // App:
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
                    <SectionExamples
                        selectedTopic={selectedTopic} 
                        handleClickExample={handleClickExample} 
                    />
                    <TabContent selectedTopic={selectedTopic} />
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

function SectionExamples({selectedTopic,handleClickExample}) {
    
    return (
        <menu>
            {/* note: onSelect is an arbitrary name for passing
              the event handler to the "onClick" defined in TabButton */}
            {Object.keys(EXAMPLES).map( (key) => 
                <TabButton
                    key={EXAMPLES[key].title}
                    title={EXAMPLES[key].title}
                    selectedTopic={selectedTopic}
                    onSelect={()=>handleClickExample(key)}
                />
            )}
        </menu>)
}


export default App;
