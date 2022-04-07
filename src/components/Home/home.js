import { Link } from 'react-router-dom';
import './home.scss'
import LogoTitle from '../../assets/images/logo-a.png'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt='developer' />
                zeez
                < br />
                Web developer
                </h1>
                <h2>Frontend Developer / Backend Developer / Freelancer</h2>
                <Link to='/contact' className='flat-button'> Contact Me</Link>
            </div>
        </div>
    );
}

export default Home