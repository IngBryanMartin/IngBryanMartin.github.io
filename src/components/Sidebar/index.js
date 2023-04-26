import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <a className='logo' href='#'>
            
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='BryanMDev' />
        </a>
    <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
            <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bryanmql'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/IngBryanMartin'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://wa.me/51980649494'>
                <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
            </a>
        </li>
    </ul>
    </div>
)

export default Sidebar