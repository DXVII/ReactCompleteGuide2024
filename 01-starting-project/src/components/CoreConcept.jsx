function CoreConcept({title, description, imgSrc, imgAlt}){
  return(
    <li>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}

export default CoreConcept;