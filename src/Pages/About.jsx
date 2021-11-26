import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id="about">
            <h1>About Astroweb</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda odit provident pariatur? Placeat sit saepe impedit. Commodi, unde magnam?
            </p>
            <button onClick={() => navigate('/contact')}>Contact us Now</button>
        </div>
    )
}

export default About
