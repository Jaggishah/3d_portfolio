import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
       <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1 : (<h1
    className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
     py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Jaggi</span>👋
        <br/>
        A Software Engineer from California
        </h1>),
    2 : (
    <InfoBox
        text="Worked With Companies and picked up many skills along the way"
        link="/about"
        btnText="Learn More"
    />),
    3 : (<InfoBox
        text="Led multiple projects to success over the years. Curios about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
    />),
    4 : (<InfoBox
        text="Need a project done ? I'm here"
        link="/contact"
        btnText="Here"
    />),
}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
