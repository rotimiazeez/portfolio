import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animated'
import {
    faNode,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      const sett = setInterval(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
      return () => clearInterval(sett);
    }, [])
return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
            I'm a results-driven Frontend Developer/Full-stack Developer with years of broad knowledge in React, Ruby, ROR, node and Progressive Web Applications areas with the willingness to constantly improve and solve problems as I go. A remote working enthusiast who enjoys working with new/emerging technologies, I’m always ready to master a new stack when necessary.
          </p>
          <p align='LEFT'>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family person, father of an handsome baby boy, a sports fanatic,
            like meeting new people and learning new things fro9m them, and tech-obsessed!!!
          </p>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
             <FontAwesomeIcon icon={faNode} color='#008000' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
)
}

export default About