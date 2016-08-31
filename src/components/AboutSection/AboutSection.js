import React from 'react'
import classes from './AboutSection.scss'
import { Col, Row } from 'react-bootstrap'

export const AboutSection = (props) => (

  <div>
    <Row className={classes.section}>
      <Col md={4}>
        <div className={classes.sectionHeader}>
          {props.title}
        </div>
      </Col>
      <Col md={8}>
        <div className={classes.sectionText}>
          {props.text}
        </div>
      </Col>
    </Row>
  </div>
)

AboutSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default AboutSection
