import React from 'react'
import classes from './FAQSection.scss'

export const FAQSection = (props) => (

  <div>
    <div className={classes.sectionHeader}>
      {props.title}
    </div>

    <div className={classes.sectionText}>
      {props.text}
    </div>
  </div>
)

FAQSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default FAQSection
