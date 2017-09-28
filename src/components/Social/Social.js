import React from 'react'
import classes from './Social.scss'
import mlh from 'static/sponsors/mlh.png'

export const Social = () => (
  <div>
    <div className={classes.footerBackground}>
      <a className={classes.mlh}
        href={'https://mlh.io/seasons/na-2018/events'}>
        <img style={{'height': '20vh', 'width': 'auto'}} src={'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg'}
          alt={'Major League Hacking 2018 Hackathon Season'} />
      </a>
      <a className={classes.mlhPartner}
        href={'https://static.mlh.io/docs/mlh-code-of-conduct.pdf'}>
        <img style={{'height': '12vh', 'width': 'auto'}} src={mlh}
          alt={'Major League Hacking 2018 Hackathon Season'} />
      </a>
      <div className={classes.contact}>
        <div className={classes.contactContainer}>

          <a className={classes.footerIcon} href={'mailto:hackers@hackduke.org'}>
            <i className={'fa fa-envelope'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://www.facebook.com/hackduke'}>
            <i className={'fa fa-facebook'}></i>
          </a>
          <a className={classes.footerIcon} href={'https://twitter.com/hackduke'}>
            <i className={'fa fa-twitter'}></i>
          </a>
        </div>
        <div className={classes.copyright}>Copyright © 2017 HackDuke. </div>
      </div>
    </div>
  </div>
)

export default Social
