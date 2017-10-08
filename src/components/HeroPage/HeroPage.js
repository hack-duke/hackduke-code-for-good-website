import React from 'react'
import classes from './HeroPage.scss'

export const HeroPage = () => (
  <div>
    <div className={classes.hero}>
      <div className={classes.mainText}>
        <img src='hackduke-logo.png' alt='Hackduke Logo' />
        <h6>October 28-29, 2017 <br />Registration Has Closed</h6>
        <div className={classes.buttonDiv}>
          <a className={classes.applyLink} eventKey={1} href={'http://my.hackduke.org/login'}>
            <button className={classes.loginButton}> Login </button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default HeroPage
