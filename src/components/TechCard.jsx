import "../styles/TechCard.css"

function TechCard({image, altText="", techName}) {
  return ( 
    <div className="tech-card flex flex-col justify-center items-center md:gap-y-6 md:text-xl sm:gap-y-5 sm:text-lg text-sm gap-y-4">
      <img src={image} alt={altText} className="md:w-24 md:h-24 sm:w-20 sm:h-20 w-12 h-12 object-contain" />
      <p>{techName}</p>
    </div>
   );
}

export default TechCard;