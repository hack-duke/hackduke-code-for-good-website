import React from 'react'
// import BackgroundImage from '../assets/hackduke-background.png'
import classes from './Hero.scss'

export const Hero = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <h1>HACK</h1>
        <h1>DUKE</h1>
        <h5>CODE FOR GOOD</h5>
        <h6>November 13-14, 2016</h6>
        <button className={classes.homeButton}>Apply Now</button>
      </div>
    </div>
  </div>
)

export default Hero
