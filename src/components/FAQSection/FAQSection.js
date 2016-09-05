import React from 'react'
import classes from './FAQSection.scss'
import { Col, Row } from 'react-bootstrap'

export const FAQSection = (props) => (

  <div>
    <Row className={classes.section}>
      <Col md={4}>
        <div className={classes.sectionHeader}>
          {props.title}
        </div>
        <div className={classes.sectionText}>
          {props.text}
        </div>
      </Col>
    </Row>
  </div>
)

FAQSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default FAQSection
