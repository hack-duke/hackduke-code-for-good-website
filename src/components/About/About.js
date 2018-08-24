import React from 'react'
import classes from './About.scss'
import AboutSection from 'components/AboutSection'

export const About = () => (
  <div>
    <div className={classes.about} >
      <div className={'container text-center'}>
        <img src = "./images/About.png"></img>
      </div>
    </div>
  </div>
)

export default About
