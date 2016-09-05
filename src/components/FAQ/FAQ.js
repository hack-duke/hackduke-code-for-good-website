import React from 'react'
import classes from './FAQ.scss'
import { Col, Row } from 'react-bootstrap'
import FAQSection from 'components/FAQSection'

export const FAQ = () => (
  <div className={classes.FAQ}>
    <div className={'container text-center'}>
      <div className={classes.header}>
        FAQs
      </div>
      <Row>
        <Col md={4}>
          <FAQSection title={"How can I help? I want to volunteer!"}
            text={"If you're a Duke student and you want to help  \
                  out day of, please fill out this form! If you aren't,  \
                  please put your email in the netID section. You'll  \
                  get a free hack kitty t-shirt. :D"} />
          <FAQSection title={"Prizes?"}
            text={"Yes, but there's a little twist! The grand prizes  \
                  are donations under your name to charities and  \
                  causes! There will be grand prize winners for  \
                  each track, novice track and many other  \
                  company sponsored API prizes as well. Check \
                  the prizes page for more info!"} />
          <FAQSection title={"Travel?"}
            text={"Anyone from across the nation is welcome to  \
                   come! We will be providing buses for certain \
                   universities."} />
        </Col>
      </Row>

    </div>
  </div>
)

export default FAQ
