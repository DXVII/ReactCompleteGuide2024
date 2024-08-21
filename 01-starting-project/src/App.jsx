import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function CoreConcept({title, description, imgSrc, imgAlt}){
  return(
    <li>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((concept) => (
                <CoreConcept
                  title={concept.title}
                  description={concept.description}
                  imgSrc={concept.image}
                  imgAlt={concept.title}
                />
              ))}
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <button>Components</button>
            <button>JSX</button>
            <button>Props</button>
            <button>State</button>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

