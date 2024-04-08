import { Link, NavLink } from "react-router-dom";
import { logo, githubIcon, darkThemeIcon, lightThemeIcon, hamburgerIconDark, crossIconDark, linkedInIcon } from "../../images"
import { useState } from "react";

function Header() {

  const navbarContent = [
    {
      name: 'Home',
      slug: '/home',
      active: true,
    },
    {
      name: 'Projects',
      slug: '/projects',
      active: true,
    },
    {
      name: 'Contact',
      slug: '/contact',
      active: true,
    }
  ]

  const [expandedHeader, setExpandedHeader] = useState(false)

  const toggleHeader = () => {
    setExpandedHeader( prev => !prev )
  }

  return (
    <nav className={`sm:flex sm:flex-col sm:content-center z-50 sticky top-0 right-0 left-0 sm:h-[70px] ${expandedHeader ? "h-[300px]" : "h-[56px]"} md:bg-[#f1f6f9a9] backdrop-blur transition-all duration-300 overflow-hidden`}>
      <div className={`flex sm:flex-row sm:justify-around items-center bg-transparent h-full ${expandedHeader ? "flex-col justify-start items-center gap-y-[2px] pt-[8px]" : "justify-between p-2"}`}>
        <div>
          <Link to="/"><img src={logo} alt="arbank007 logo" className={`h-[40px] w-[40px] border-2 border-black border-solid rounded-full`} /></Link>
        </div>
        <div className={`${expandedHeader ? "flex flex-col gap-y-[4px]" : "hidden"} sm:flex sm:flex-row justify-center items-center gap-x-5 transition-all duration-1000`} id="mid-section">
          {navbarContent.map( (item) => (
            item.active ? <NavLink key={item.name} to={item.slug} className={ ({isActive}) => {return `${isActive ? "text-[#000000]" : ""} sm:text-xl text-base font-bold text-[#00000099] sm:hover:text-black transition-all duration-300` } } >{item.name}</NavLink> : null
          ) )}
        </div>
        <div className={`sm:flex sm:flex-row justify-center items-center gap-x-3 ${expandedHeader ? "flex flex-col gap-y-[4px]" : "hidden"}`}>

            {/* // TODO: add linkedin and remove insta */}
            
          <img src={darkThemeIcon} alt="dark theme icon" className="h-[32px]" />
          <Link to="https://github.com/ArbAnk007" target="_blank" ><img src={githubIcon} alt="github icon" className="h-[32px]" /></Link>
          <Link to="https://www.linkedin.com/in/arbab-ansari-74ab232b7" target="_blank"><img src={linkedInIcon} alt="linkedin icon" className="h-[32px]" /></Link>
        </div>
        <div className="sm:hidden">
          <img src={hamburgerIconDark} alt="hamburger icon" className={`${expandedHeader ? "hidden" : ""}`} onClick={toggleHeader} />
          <img src={crossIconDark} alt="close icon" className={`${expandedHeader ? "" : "hidden"} mt-4`} onClick={toggleHeader} />
        </div>
      </div>
    </nav>
   );
}

export default Header;