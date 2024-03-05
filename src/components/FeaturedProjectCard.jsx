function FeaturedProjectCard({imageSrc, title, description, tags, slug}) {

  return ( 
    <div className="sm:flex sm:flex-row bg-white sm:p-6 box-border md:max-w-[840px] md:w-auto md:h-auto md:gap-x-4 sm:w-[520px] sm:max-w-none sm:h-[240px] sm:gap-x-2 w-auto max-w-[360px] h-[280px] flex flex-col justify-start items-center gap-y-2 md:rounded-xl sm:rounded-lg rounded-md p-4 relative">
      <img src={imageSrc} alt="placeholder image" className="md:h-60 md:w-60 sm:h-32 sm:w-32 w-20 h-20 object-contain sm:rounded-xl bg-sky-200" />
      <div className="flex flex-col md:gap-y-6 sm:gap-y-2 gap-y-2">
        <p className="md:text-2xl md:font-bold sm:text-lg sm:font-bold text-base">{title}</p>
        <p className="md:text-lg sm:text-base text-sm">{description}</p>
        <div className="flex sm:gap-x-4 gap-x-1">
          {tags.map( (tag, index) => (<div key={index} className="bg-sky-400 text-white md:px-4 md:py-2 md:rounded-2xl md:text-lg sm:px-2 sm:py-1 sm:rounded-xl sm:text-base text-sm rounded-lg p-1">{tag}</div>) )}
        </div>
      </div>
      <div className="absolute md:bottom-8 md:right-12 md:text-xl md:font-bold sm:bottom-4 sm:right-6 bottom-2 right-4 sm:text-lg sm:font-semibold bg-blue-500 md:hover:bg-blue-600 text-white md:p-2 md:cursor-pointer md:rounded-lg sm:px-2 sm:py-1 p-1 sm:rounded-md rounded-md transition-all duration-300 hover:scale-105"><a href={slug} target="_blank">Live Demo</a></div>
    </div>
   );
}

export default FeaturedProjectCard;