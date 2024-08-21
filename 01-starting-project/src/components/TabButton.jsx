export default function TabButton({ title, selectedTopic, onSelect }) {
    const isSelected = title.toLowerCase() === selectedTopic.toLowerCase();
    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                onClick={onSelect}
            >
                {title}
            </button>
        </li>
    );
}
