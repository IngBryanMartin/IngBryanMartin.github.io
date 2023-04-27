import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={()=>setShowNav(false)}>
                <img src={LogoS} alt ="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt ="BryanMDev" /> 
            </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#49b6d1" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#49b6d1" />
         </NavLink>
         <NavLink activeclassname="active" className="skills-link" to="/skills" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faCode} color="#49b6d1" />
         </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faSuitcase} color="#49b6d1" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} color="#49b6d1" />
        </NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#49b6d1" size='3x' className='close-icon'/>
    </nav>  

    <ul >
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/bryanmql'>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faLinkedin} color="#49b6d1" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/IngBryanMartin'>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faGithub} color="#49b6d1" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://wa.me/51980649494'>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faWhatsapp} color="#49b6d1" />
            </a>
        </li>
    </ul>
    <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#49b6d1" size='3x' className='hamburger-icon'/>
    </div>
    )
}

export default Sidebar