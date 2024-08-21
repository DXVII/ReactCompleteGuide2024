export default function TabButton({ title, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{title}</button>
        </li>
    );
}
