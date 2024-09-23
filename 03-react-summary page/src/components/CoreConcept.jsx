export default function CoreConcept({ title, description, imgSrc, imgAlt }) {
    const uniqueId = `core-concept-${title}`
    return (
        <li>
            <img src={imgSrc} alt={imgAlt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
