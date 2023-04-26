import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import TextShpere from "./TextShpere.js";

const Skills = () => {
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
        <div className='container skills-page'>
            <div className='text-zone'>
                <div>
                    
                </div>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['S', 'k', 'i', 'l', 'l', 's']}
                    idx={15}
                    />
                </h1>
                <p>As a FullStack developer, I possess a broad set of skills that allow 
                    me to create web applications comprehensively and efficiently. 
                    My experience spans from frontend technologies such as HTML5, 
                    CSS3, and JavaScript, to modern tools and frameworks like Angular 
                    and React, enabling me to create attractive and highly functional 
                    user interfaces.</p>
                <p>Furthermore, I have a deep understanding of backend technologies 
                    such as Java, .NET, SQLServer, MySQL, and Oracle, which allows me 
                    to develop and efficiently manage server-side logic. I am also 
                    familiar with version control tools like Git, enabling me to work 
                    collaboratively and maintain an organized and efficient workflow 
                    within a team.</p>
                
            </div>
            <div class="skills-charts">
            <TextShpere />
        </div>
        </div>
        <Loader  type=''/>
        <div class="loader">
        <span style={{'--i': 1}}></span>
        <span style={{'--i': 2}}></span>
        <span style={{'--i': 3}}></span>
        <span style={{'--i': 4}}></span>
        <span style={{'--i': 5}}></span>
        <span style={{'--i': 6}}></span>
        <span style={{'--i': 7}}></span>
        <span style={{'--i': 8}}></span>
        <span style={{'--i': 9}}></span>
        <span style={{'--i': 10}}></span>
        </div>
        </>
    )
}

export default Skills