import "../styles/TechCard.css"

function TechCard({image, altText="", techName}) {
  return ( 
    <div className="tech-card">
      <img src={image} alt={altText} />
      <p>{techName}</p>
    </div>
   );
}

export default TechCard;