import React from 'react'
import classes from '../About/About.scss'
import faqclasses from '../FAQ/FAQ.scss'
import { Col, Row } from 'react-bootstrap'
import FAQSection from 'components/FAQSection'

const title = 'FAQS'

export const FAQ = () => (
  <div>
    <div className={faqclasses.faq}>
      <h1 className={classes.header}>
        {title}
      </h1>
      <Row style={{'paddingTop': '30px'}}>
        <Col md={4}>
          <FAQSection title={'Prizes?'}
            text={'Yes, but there\'s a little twist! The grand prizes  \
                  are donations under your name to charities and  \
                  causes! There will be grand prize winners for  \
                  each track, novice track and many other  \
                  company sponsored API prizes as well.'} />
          <FAQSection title={'When? Where?'}
            text={'HackDuke starts Saturday, November 19th at 10:00 AM EST and ends on   \
                  Sunday, November 20th at 5:30 PM EST. It is hosted on Duke   \
                  University\'s West Campus, 305 Teer Engineering Building, Durham, NC 27708.'} />
          <FAQSection title={'Who can participate?'}
            text={'You can participate as long as you\'re a student   \
                  (undergraduate or graduate)! If you\'re a new   \
                  grad, we\'d love to have you too.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'Who can I work with?'}
            text={'Anyone! Get to know your fellow programmers   \
                  better from your own and other schools!  \
                  The only request that we have is that you make a   \
                  new friend by talking to each other, our mentors \
                  and our experts!'} />
          <FAQSection title={'Anything I should remember to bring?'}
            text={'Bring your own ethernet cables (or you can just use \
                  WiFi) and bring any Nerf gun arsenal you have!'} />
          <FAQSection title={'What can I make?'}
            text={'We welcome all software and hardware hacks   \
                   that align to our tracks for impact. We will also  \
                   have lab space for hardware hackers.'} />
        </Col>
        <Col md={4}>
          <FAQSection title={'I want to volunteer or mentor! How can I help?'}
            beforeText={'To help with logistics day of, sign up to '}
            linkText={'volunteer'}
            link={'https://hackduke.typeform.com/to/e7BfyC?route_receive_volunteer=xxxxx'}
            middleText={'. If you\'re looking to mentor hackers with tech or track knowledge, come help out as a '}
            linkText0={'mentor'}
            link0={'https://hackduke.typeform.com/to/Q8EGmW?route_receive_mentor=xxxxx'}
            afterText={'. Both mentors and volunteers will get a special HackDuke T-shirt!'} />

          <FAQSection title={'Travel?'}
            text={'Anyone from across the nation is welcome to  \
                   come! We will be providing buses for certain \
                   universities. Travel reimbursements will be provided \
                   in case by case scenarios.'} />
          <FAQSection title={'How can I become a sponsor?'}
            text={'Email us at sponsorship@hackduke.org.'} />
        </Col>
      </Row>
    </div>
  </div>
)

export default FAQ
