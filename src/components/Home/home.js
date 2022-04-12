import { Link } from 'react-router-dom';
import './home.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animated';
import Logo from './logo/logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['z', 'e', 'e', 'z']
    const jobArray = ['w','e','b','', 'd','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                     <br />
                     <span className={`${letterClass} _13`}>I</span>
                     <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                < br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Frontend Developer / Backend Developer / Freelancer</h2>
                <Link to='/contact' className='flat-button'> Contact Me</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home