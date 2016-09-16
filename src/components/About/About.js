import React from 'react'
import classes from './About.scss'
import AboutSection from 'components/AboutSection'

export const About = () => (
  <div>
    <div className={classes.about} >
      <div className={'container text-center'}>
        <h1 className={classes.header}> HACKDUKE IS ABOUT </h1>
        <AboutSection title={"COLLABORATION NOT COMPETITION."}
          text={"HackDuke is not just about building meaningful projects. \
                It's also an open forum to discuss, share and bring to life ideas \
                that aim to make a positive impact on social issues. Look forward \
                to working with experts from non-profits and coding alongside \
                mentors from tech companies!"} />
        <AboutSection title={"EXPLORING THE INTERSECTION BETWEEN TECH & SOCIAL GOOD."}
          text={"The core principle behind hacking for social good is collaboration, \
                and HackDuke’s project tracks provide an avenue to collaborate with each \
                other, with initiatives at their university and with community organizations."} />
        <AboutSection title={"GIVING BACK."}
          text={"HackDuke encourages students to venture beyond the classroom. \
                Learn how your skills can be used to make a difference in other \
                people’s lives. Tracks enable members to collaborate while providing \
                an alleyway to partnership with peers, local organizations, nonprofits \
                and universities to continue working towards the cause."} />
      </div>
    </div>
  </div>
)

export default About
