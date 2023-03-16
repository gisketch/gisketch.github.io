function Skill({image, name, description}) {
  return(
    <div className="Skill">
      <img src={image} alt={name} className="Skill-Image"/>
      <div className="Skill-Name">{name}</div>
      <div className="Skill-Description">{description}</div>
    </div>
  )
}

export default Skill;