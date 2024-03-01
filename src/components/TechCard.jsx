import "../styles/TechCard.css"

function TechCard({image, altText="", techName}) {
  return ( 
    <div className="tech-card flex flex-col justify-center items-center sm:gap-y-6 sm:text-xl text-sm gap-y-4">
      <img src={image} alt={altText} className="sm:w-24 sm:h-24 w-12 h-12" />
      <p>{techName}</p>
    </div>
   );
}

export default TechCard;