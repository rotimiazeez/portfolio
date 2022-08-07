import { Link, NavLink } from 'react-router-dom';
import './nav.scss';
import LogoA from '../../assets/images/logo-a.png'
import  LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidenav = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoA} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='azeez' />
        </Link>
        <nav>
            <NavLink  activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink  activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink  activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/azeezrotimi019/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/rotimiazeez'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/Harzeyzh'>
                    <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:harzeyzhrotimi'>
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                </a>
            </li>
        </ul> 
    </div>
)

export default Sidenav 