import React from 'react'
import classes from '../AboutSection/AboutSection.scss'
import faqclasses from './FAQSection.scss'

export const FAQSection = (props) => (

  <div className={faqclasses.section}>
    <div className={classes.sectionHeader} style={{'textAlign': 'left'}}>
      {props.title}
    </div>

    <div className={faqclasses.sectionText}>
      {props.text}
    </div>
  </div>
)

FAQSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default FAQSection
