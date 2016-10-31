import React from 'react'
import classes from '../AboutSection/AboutSection.scss'
import faqclasses from './FAQSection.scss'

export const FAQSection = (props) => (

  <div className={faqclasses.section}>
    <div className={classes.sectionHeader} style={{'textAlign': 'left'}}>
      {props.title}
    </div>
    <div className={faqclasses.sectionText}>
      {(props.link && props.link0) ? (
        generateTextWithMultiLinks(props.beforeText, props.link, props.linkText, props.middleText, props.link0, props.linkText0, props.afterText)
      ) : props.text }
    </div>
  </div>
)

function generateTextWithMultiLinks (beforeText, link, linkText, middleText, link0, linkText0, afterText) {
  return (
    <div>
      {beforeText}
      <a href={link} className={classes.link}>{linkText}</a>
      {middleText}
      <a href={link0} className={classes.link}>{linkText0}</a>
      {afterText}
    </div>
  )
}

FAQSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  beforeText: React.PropTypes.string,
  afterText: React.PropTypes.string,
  middleText: React.PropTypes.string,
  linkText: React.PropTypes.string,
  linkText0: React.PropTypes.string,
  link: React.PropTypes.string,
  link0: React.PropTypes.string
}

export default FAQSection
