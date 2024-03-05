function ProjectCard({imageSrc, title, description, slug}) {
  return ( 
    <div className="md:flex md:flex-col md:justify-start md:items-center md:gap-y-4 sm:flex sm:flex-col sm:justify-start sm:items-center sm:gap-y-2 flex flex-col justify-start items-center gap-y-1 relative md:p-2 md:w-[500px] md:h-[400px] md:rounded-xl sm:p-2 sm:w-[400px] sm:h-[300px] sm:rounded-xl p-1 w-[300px] h-[260px] rounded-lg bg-white transition-all duration-500 md:hover:scale-105 cursor-pointer">
      <div>
        <img src={imageSrc} alt={`${title} project thumbnail`} className="md:h-48 md:w-48 md:rounded-xl sm:h-40 sm:w-40 h-32 w-32 object-contain bg-sky-200" />
      </div>
      <div className="md:flex md:flex-col sm:flex sm:flex-col flex flex-col w-full gap-y-1">
        <p className="md:text-2xl sm:text-xl text-base font-bold">{title}</p>
        <p className="md:text-lg sm:text-base text-sm font-medium">{description}</p>
      </div>
      <div className="absolute md:bottom-4 md:right-6 sm:bottom-4 sm:right-6 bottom-2 right-4 md:text-xl md:font-bold sm:text-lg sm:font-semibold text-md font-medium bg-blue-500 md:hover:bg-blue-600 text-white sm:p-2 p-1 cursor-pointer md:rounded-lg sm:rounded-lg rounded-md transition-all duration-300 md:hover:scale-105"><a href={slug} target="_blank">Live Demo &#8599;</a></div>
    </div>
   );
}

export default ProjectCard;