import { useState } from 'react';

import TabButton from './TabButton';
import TabContent from './TabContent';

import { EXAMPLES } from '../data';

export default function SectionExamples() {
    // States:
    const [selectedTopic, setSelectedTopic] = useState('');
    console.log(`Current selectedTopic: ${selectedTopic}`);

    // Event Handlers:
    function handleClickExample(key) {
        setSelectedTopic(key);
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <SectionTabButtons
                selectedTopic={selectedTopic}
                handleClickExample={handleClickExample}
            />
            <TabContent selectedTopic={selectedTopic} />
        </section>
    );
}

function SectionTabButtons({ selectedTopic, handleClickExample }) {
    return (
        <menu>
            {/* note: onSelect is an arbitrary name for passing
              the event handler to the "onClick" defined in TabButton */}
            {Object.keys(EXAMPLES).map((key) => (
                <TabButton
                    key={EXAMPLES[key].title}
                    title={EXAMPLES[key].title}
                    selectedTopic={selectedTopic}
                    onSelect={() => handleClickExample(key)}
                />
            ))}
        </menu>
    );
}
