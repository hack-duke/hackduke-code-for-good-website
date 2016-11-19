import React from 'react'
import classes from './HeroPage.scss'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <img src='hackduke-logo.png' alt='Hackduke Logo' />
        <h6>November 19-20, 2016</h6>
        <div className={classes.buttonDiv}>
          <a className={classes.applyLink} eventKey={1} href={'http://my.hackduke.org/login'}>
            <button className={classes.loginButton}> Login </button>
          </a>
          <a className={classes.applyLink}
            href={'https://dayof.hackduke.org'}>
            <button className={classes.homeButton}> Day Of Info </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default HeroPage
