import React from 'react'
import classes from './SponsorsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
import coinbase from 'static/sponsors/coinbase.png'
import fb from 'static/sponsors/fb.png'
import appian from 'static/sponsors/appian.png'
import cs from 'static/sponsors/cs.png'
import capital from 'static/sponsors/capital-one.png'
import scimed from 'static/sponsors/scimed.png'
import avalara from 'static/sponsors/avalara.svg'
import smartcar from 'static/sponsors/smartcar.png'
import pratt from 'static/sponsors/pratt.png'
import fuqua from 'static/sponsors/fuqua.png'
import optum from 'static/sponsors/optum.png'
import zoho from 'static/sponsors/zoho.png'
import google from 'static/sponsors/google.png'
import blank from 'static/sponsors/blank.png'
import microsoft from 'static/sponsors/microsoft.png'

class SponsorsPage extends React.Component {
  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['http://pratt.duke.edu/', 'https://coinbase.com', 'http://appian.com', 'https://campus.capitalone.com/',
        'http://www.scimedsolutions.com/', 'https://www.avalara.com/', 'http://facebook.com', 'http://www.fuqua.duke.edu/',
        'https://www.cs.duke.edu', 'https://www.optum.com/', 'https://www.zoho.com/', 'https://smartcar.com/',
        'https://www.microsoft.com/en-us/home/beta_a.html', '', 'https://www.google.com/'],
      windowWidth: window.innerWidth,
      imageUrls: [pratt, coinbase, appian, capital, scimed, avalara, fb, fuqua, cs, optum, zoho, smartcar, microsoft, blank, google],
      sizes: [3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3],
      title: '2017 SPONSORS',
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sponsorButtonText: 'Sponsor Us'
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth})
  }

  renderSponsors () {
    let mapArray = []
    if (this.state.windowWidth < 600) {
      mapArray = [0]
    } else if (this.state.windowWidth < 1000) {
      mapArray = [0, 1]
    } else {
      mapArray = [0, 1, 2]
    }
    return (
      mapArray.map(mod => {
        return this.sponsorsColAtMod(mod, mapArray.length)
      })
    )
  }

  sponsorsColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return (
              <div>
                <SponsorsItem key={index}
                  imageUrl={url}
                  sponsorUrl={this.state.sponsorsUrls[index]}
                  size={this.state.sizes[index]} />
              </div>
            )
          }
        })}
      </Col>
    )
  }

// <p className={classes.sponsorsText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.sponsors}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <br />
            <a className={classes.link} href={'mailto:sponsorship@hackduke.org'}>
              <button className={classes.homeButton}> {this.state.sponsorButtonText} </button>
            </a>
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row>
                  {this.renderSponsors()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SponsorsPage
