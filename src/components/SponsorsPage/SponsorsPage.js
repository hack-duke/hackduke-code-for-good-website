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

class SponsorsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['http://facebook.com', 'https://coinbase.com', 'http://appian.com',
        'https://www.cs.duke.edu', 'https://campus.capitalone.com/', 'http://www.scimedsolutions.com/'],
      windowWidth: window.innerWidth,
      imageUrls: [fb, coinbase, appian, cs, capital, scimed],
      sizes: [3, 3, 3, 3, 3, 3],
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
