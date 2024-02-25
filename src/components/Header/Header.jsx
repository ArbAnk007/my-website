import "../../styles/Header.css"
import { Link, NavLink } from "react-router-dom";
import { logo, githubIcon, instagramIcon, darkThemeIcon, lightThemeIcon } from "../../images"

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

  return (
    <nav>
      <div className="header">
        <div className="left-section">
          <Link to="/"><img src={logo} alt="arbank007 logo" className="logo" /></Link>
        </div>
        <div className="mid-section">
          {navbarContent.map( (item) => (
            item.active ? <NavLink key={item.name} to={item.slug} className={ ({isActive}) => isActive ? "active navbar-link" : "navbar-link" } >{item.name}</NavLink> : null
          ) )}
        </div>
        <div className="right-section">

            {/* // TODO: add linkedin and remove insta */}
            
          <img src={darkThemeIcon} alt="dark theme icon" className="theme-switcher" />
          <Link to="https://github.com/ArbAnk007" target="_blank" ><img src={githubIcon} alt="github icon" className="github-icon" /></Link>
          <Link to="https://www.instagram.com/arbank_007/?next=%2F" target="_blank"><img src={instagramIcon} alt="instagram icon" className="insta-icon" /></Link>
        </div>
      </div>
    </nav>
   );
}

export default Header;