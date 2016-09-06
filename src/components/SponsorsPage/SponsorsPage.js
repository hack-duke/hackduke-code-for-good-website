import React from 'react'
import classes from './SponsorsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
import a16z from 'static/sponsors/a16z.png'
import aboutme from 'static/sponsors/aboutme.png'
import akamai from 'static/sponsors/akamai.png'
import appia from 'static/sponsors/appia.png'
import apt from 'static/sponsors/apt.png'
import att from 'static/sponsors/att-old.png'
import au from 'static/sponsors/au.png'
import aws from 'static/sponsors/aws.png'
import bronto from 'static/sponsors/bronto.png'

const sponsorsUrls = ['http://google.com', 'http://google.com', 'http://google.com', 'http://google.com',
'http://google.com', 'http://google.com', 'http://google.com', 'http://google.com', 'http://google.com']
const imageUrls = [a16z, aboutme, akamai, appia, apt, att, au, aws, bronto]

const sponsorsColAtMod = (mod) => {
  return (
    <Col md={4}>
      {imageUrls.map((url, index) => {
        if (index % 3 === mod) {
          return <SponsorsItem key={index} imageUrl={url} sponsorUrl={sponsorsUrls[index]} />
        }
      })}
    </Col>
  )
}

const title = 'SPONSORS'
const aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua'
const sponsorButtonText = 'Sponsor Us'

// Page layout
export const SponsorsPage = () => (
  <div className={classes.sponsors}>
    <div className={'container text-center'}>
      <h1 className={classes.header}>{title}</h1>
      <p className={classes.sponsorsText}>
        {aboutText}
      </p>
      <br />
      <button className={classes.homeButton}>{sponsorButtonText}</button>
      <div className={classes.section}>
        <div className={classes.logobox}>
          <Row>
            {[0, 1, 2].map(mod => {
              return sponsorsColAtMod(mod)
            })}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default SponsorsPage
