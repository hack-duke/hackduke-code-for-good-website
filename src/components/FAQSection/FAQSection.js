import React from 'react'
import classes from '../AboutSection/AboutSection.scss'
import faqclasses from './FAQSection.scss'

export const FAQSection = (props) => (

  <div className={faqclasses.section}>
    <div className={classes.sectionHeader} style={{'textAlign': 'left'}}>
      {props.title}
    </div>
    <div className={faqclasses.sectionText}>
      {props.link ? (
        generateTextWithLink(props.beforeText, props.link, props.linkText, props.afterText)
      ) : props.text }
    </div>
  </div>
)

function generateTextWithLink (beforeText, link, linkText, afterText) {
  return (
    <div>
      {beforeText}
      {' '}
      <a href={link} className={classes.link}>{linkText}</a>
      {' '}
      {afterText}
    </div>
  )
}

FAQSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  beforeText: React.PropTypes.string,
  afterText: React.PropTypes.string,
  linkText: React.PropTypes.string,
  link: React.PropTypes.string
}

export default FAQSection
