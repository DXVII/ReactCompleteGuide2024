import '../index.css';
import { EXAMPLES } from '../data';
export default function TabContent({ selectedTopic }) {
    // initial prompt
    if (!selectedTopic) return <p id="tab-content">Please select a topic</p>;

    // adjust content per key
    return (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    );
}
