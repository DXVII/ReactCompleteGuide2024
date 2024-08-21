import Header from './components/Header';
import SectionCoreConcepts from './components/SectionCoreConcepts';
import SectionExamples from './components/SectionExamples';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <h2>Time to get started!</h2>
                <SectionCoreConcepts />
                <SectionExamples />
            </main>
        </>
    );
}
