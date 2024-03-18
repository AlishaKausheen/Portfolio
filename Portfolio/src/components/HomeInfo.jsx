import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
        
    </div>
)



const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Alisha Kausheen</span>
            <br />
            A Full-stack developer from India
        </h1>
    ),
    2: (
       
        <InfoBox
            text='I built solid foundation for many skills on the way of learning them'
            link="/about"
        btnText="Learn more"/>

    ),
    3: (
     <InfoBox
            text='Worked on many personal projects to get hands-on-experience. Curious to know them?'
            link="/projects"
        btnText="Go to this place wanderer"/>


    ),
    4: (
        <InfoBox
            text='Hey, are you looking for a developer? I am just a few keystrokes away'
            link="/contact"
        btnText="Let have a conversation"/>

    ),
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
