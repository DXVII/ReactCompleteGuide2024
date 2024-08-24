import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
export default function SectionCoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept
                        key={concept.title}
                        title={concept.title}
                        description={concept.description}
                        imgSrc={concept.image}
                        imgAlt={concept.title}
                    />
                ))}
            </ul>
        </section>
    )
}
