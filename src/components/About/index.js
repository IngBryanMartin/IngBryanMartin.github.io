import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <div>
                    
                </div>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>I'm a systems engineer and computer enthusiast who is passionate 
                    about technology and constantly seeking challenges in order to 
                    continue learning and improving my skills to tackle challenging projects.</p>
                <p>With strong analytical, problem-solving, and communication skills, 
                    I can effectively collaborate with clients and team members in 
                    different languages, including Spanish and English.</p>
                <p>In addition, I have advanced skills in programming, data analysis 
                    and database management. I'm passionate about finding innovative 
                    ways to improve the efficiency and effectiveness of IT systems and 
                    I'am excited to apply my skills in a company that values innovation 
                    and operational excellence.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='ball-scale-multiple' />
        </>
    )

    
}


export default About