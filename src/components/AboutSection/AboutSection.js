import React from 'react'
import classes from './AboutSection.scss'
import { Col, Row } from 'react-bootstrap'

export const AboutSection = (props) => (

  <div>
    <Row className={classes.section}>
    </Row>
  </div>
)

AboutSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default AboutSection
